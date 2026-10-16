import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";

const target = await fetch(
  `http://127.0.0.1:9223/json/new?${encodeURIComponent("http://127.0.0.1:8777/megafon-migrants-landing.html")}`,
  { method: "PUT" },
).then((response) => response.json());

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let commandId = 0;
const pending = new Map();
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

const command = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++commandId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });

const evaluate = async (expression, awaitPromise = false) => {
  const result = await command("Runtime.evaluate", {
    expression,
    awaitPromise,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text);
  }
  return result.result.value;
};

await command("Page.enable");
await command("Runtime.enable");
await command("Emulation.setDeviceMetricsOverride", {
  width: 360,
  height: 800,
  deviceScaleFactor: 1,
  mobile: false,
});
await command("Page.navigate", {
  url: "http://127.0.0.1:8777/megafon-migrants-landing.html",
});
await new Promise((resolve) => setTimeout(resolve, 800));

await evaluate("document.documentElement.style.scrollBehavior = 'auto'");
const initialReveal = await evaluate(
  "document.querySelector('.landing-service-side-picture-card').parentElement.dataset.revealState",
);
assert.equal(initialReveal, "pending", "Offscreen tariff card must wait for its reveal");

await evaluate(`(() => {
  const card = document.querySelector('.landing-service-side-picture-card');
  const top = card.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.5;
  window.scrollTo(0, top);
})()`);
await new Promise((resolve) => setTimeout(resolve, 700));
const revealed = await evaluate(
  "document.querySelector('.landing-service-side-picture-card').parentElement.dataset.revealState",
);
assert.ok(["playing", "shown"].includes(revealed), `Tariff card must reveal, got ${revealed}`);
if (process.env.REVEAL_ARTIFACT_PATH) {
  const screenshot = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  await writeFile(process.env.REVEAL_ARTIFACT_PATH, screenshot.data, "base64");
}

const slider = await evaluate(`(() => {
  const stage = document.getElementById('perks-stage');
  const carousel = document.getElementById('perks-carousel');
  const start = stage.getBoundingClientRect().top + window.scrollY;
  window.scrollTo(0, start + 80 + (stage.offsetHeight - 80) * 0.65);
  return {
    range: carousel.scrollWidth - carousel.clientWidth,
    stageHeight: stage.offsetHeight,
    pinHeight: stage.querySelector('.perks-pin').offsetHeight,
  };
})()`);
await new Promise((resolve) => setTimeout(resolve, 100));
const drivenLeft = await evaluate("document.getElementById('perks-carousel').scrollLeft");
assert.ok(slider.range > 0, "Perks carousel must overflow horizontally");
assert.ok(slider.stageHeight > slider.pinHeight, "Perks slider must reserve vertical travel");
assert.ok(drivenLeft > 0, `Vertical scrolling must move the perks slider, left=${drivenLeft}`);

await evaluate(`(() => {
  document.querySelector('#tab-bio-no').click();
  const button = document.querySelector('#panel-bio-no .mfui-button');
  window.scrollTo(0, button.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.45);
})()`);
await new Promise((resolve) => setTimeout(resolve, 700));
const buttonHeight = await evaluate(
  "document.querySelector('#panel-bio-no .mfui-button').offsetHeight",
);
assert.equal(buttonHeight, 52, "No-biometry CTA must remain 52px high");

if (process.env.ARTIFACT_PATH) {
  const screenshot = await command("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  await writeFile(process.env.ARTIFACT_PATH, screenshot.data, "base64");
}
if (process.env.BUTTON_ARTIFACT_PATH) {
  await evaluate(`(() => {
    document.querySelector('#panel-bio-no .mfui-button').scrollIntoView({ block: 'center' });
  })()`);
  await new Promise((resolve) => setTimeout(resolve, 150));
  const screenshot = await command("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  await writeFile(process.env.BUTTON_ARTIFACT_PATH, screenshot.data, "base64");
}

console.log(
  `Browser checks passed: CTA ${buttonHeight}px; reveal ${initialReveal}->${revealed}; slider travel ${slider.stageHeight - slider.pinHeight}px; driven to ${drivenLeft}px`,
);
socket.close();
