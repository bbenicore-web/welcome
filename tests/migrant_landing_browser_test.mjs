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

await evaluate("document.querySelector('#tab-bio-no').click()");
const buttonHeight = await evaluate(
  "document.querySelector('#panel-bio-no .mfui-button').getBoundingClientRect().height",
);
assert.equal(buttonHeight, 52, "No-biometry CTA must remain 52px high");

const carouselMetrics = await evaluate(`(() => {
  const carousel = document.querySelector('#perks-carousel');
  return {
    clientWidth: carousel.clientWidth,
    scrollWidth: carousel.scrollWidth,
    left: carousel.scrollLeft,
  };
})()`);
assert.ok(
  carouselMetrics.scrollWidth > carouselMetrics.clientWidth,
  "Perks carousel must have horizontally scrollable content",
);

await new Promise((resolve) => setTimeout(resolve, 4800));
const rotatedLeft = await evaluate(
  "document.querySelector('#perks-carousel').scrollLeft",
);
assert.ok(rotatedLeft > 0, "Perks carousel must rotate to its second page");

const carouselRect = await evaluate(`new Promise((resolve) => {
  const carousel = document.querySelector('#perks-carousel');
  document.documentElement.style.scrollBehavior = 'auto';
  carousel.scrollIntoView({ block: 'center' });
  carousel.scrollLeft = 0;
  setTimeout(() => {
    const rect = carousel.getBoundingClientRect();
    resolve({ left: rect.left, top: rect.top, width: rect.width, height: rect.height });
  }, 100);
})`, true);
const dragY = carouselRect.top + carouselRect.height / 2;
await evaluate(`(() => {
  window.__perksPointerEvents = [];
  const carousel = document.querySelector('#perks-carousel');
  ['pointerdown', 'pointermove', 'pointerup'].forEach((type) => {
    carousel.addEventListener(type, (event) => {
      window.__perksPointerEvents.push({ type, x: event.clientX, pointerType: event.pointerType });
    });
  });
})()`);
await command("Input.dispatchMouseEvent", {
  type: "mousePressed",
  x: carouselRect.left + carouselRect.width - 30,
  y: dragY,
  button: "left",
  buttons: 1,
  clickCount: 1,
});
await command("Input.dispatchMouseEvent", {
  type: "mouseMoved",
  x: carouselRect.left + 50,
  y: dragY,
  button: "left",
  buttons: 1,
});
await command("Input.dispatchMouseEvent", {
  type: "mouseReleased",
  x: carouselRect.left + 50,
  y: dragY,
  button: "left",
  buttons: 0,
  clickCount: 1,
});
await new Promise((resolve) => setTimeout(resolve, 500));
const dragResult = await evaluate(`({
  left: document.querySelector('#perks-carousel').scrollLeft,
  events: window.__perksPointerEvents,
})`);
assert.ok(
  dragResult.left > 0,
  `Perks carousel must respond to mouse dragging; rect=${JSON.stringify(carouselRect)} events=${JSON.stringify(dragResult.events)}`,
);

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
  `Browser checks passed: CTA ${buttonHeight}px; carousel ${carouselMetrics.clientWidth}/${carouselMetrics.scrollWidth}px; rotated to ${rotatedLeft}px; dragged to ${dragResult.left}px`,
);
socket.close();
