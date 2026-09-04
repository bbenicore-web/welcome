"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  Check,
  FileText,
  Fingerprint,
  Mail,
  MapPinned,
  Share2,
  Smartphone,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CallbackForm } from "@/components/landing/callback-form";
import { LandingChrome } from "@/components/landings/chrome";
import { withBase } from "@/lib/base-path";
import {
  biometryIpa,
  biometryLines,
  instructionCopy,
} from "@/lib/instruction-copy";
import { useLanguage } from "@/lib/language-context";
import { catalogTariffs, formTariffs } from "@/lib/products";

const bringIcons = [Building2, FileText, Smartphone];
const bring2Icons = [Building2, FileText, Fingerprint, Mail];

export function ArrivePage() {
  const { locale } = useLanguage();
  const copy = instructionCopy[locale];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tariff, setTariff] = useState("family");
  const [shared, setShared] = useState(false);

  function openLead(id = "family") {
    setTariff(id);
    setDialogOpen(true);
  }

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  async function share() {
    const url = shareUrl || withBase("/arrive");
    try {
      if (navigator.share) {
        await navigator.share({ title: copy.hero, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setShared(true);
      window.setTimeout(() => setShared(false), 2000);
    } catch {
      await navigator.clipboard.writeText(url);
      setShared(true);
    }
  }

  return (
    <LandingChrome current="arrive">
      <main>
        <section className="relative overflow-hidden bg-[#e7f8ee]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#00B956]">
                МегаФон · {copy.productKicker}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#07150d] sm:text-5xl lg:text-6xl">
                {copy.hero}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3d5c4a]">
                {copy.gainSub}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  render={<a href="#snils" />}
                  className="h-12 rounded-full bg-[#00B956] px-6 text-base font-semibold text-white hover:bg-[#00a34c]"
                >
                  {copy.download}
                </Button>
                <Button
                  onClick={() => openLead()}
                  variant="outline"
                  className="h-12 rounded-full border-[#00B956]/40 bg-white px-6 text-base font-semibold text-[#07150d] hover:bg-white"
                >
                  {copy.apply}
                </Button>
              </div>
            </div>
            <div className="flex items-end">
              <div className="w-full rounded-[2rem] bg-[#07150d] p-8 text-white">
                <p className="text-sm text-[#9dffc2]">{copy.gainTitle}</p>
                <p className="mt-4 text-3xl font-semibold leading-tight">
                  Минимум +{" "}
                  <span className="text-[#9dffc2]">и Семейный +</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {copy.benefits[0].text}
                </p>
              </div>
            </div>
          </div>
        </section>

        <nav className="border-b border-black/5 bg-white">
          <div className="mx-auto grid max-w-6xl gap-2 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {copy.widgets.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium hover:bg-[#f3faf5]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#00B956] text-xs font-semibold text-white">
                  {index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="tariffs" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#00B956]">
                  {copy.productKicker}
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Минимум + · Семейный +
                </h2>
              </div>
              <Button
                render={<a href="#snils" />}
                className="h-12 rounded-full bg-[#07150d] px-6 font-semibold text-white hover:bg-black"
              >
                {copy.productCta}
              </Button>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {catalogTariffs.map((item) => {
                const popular = "popular" in item && item.popular;
                return (
                  <article
                    key={item.id}
                    className={`rounded-[2rem] p-7 ring-1 ${
                      popular
                        ? "bg-[#07150d] text-white ring-[#00B956]"
                        : "bg-[#f3faf5] ring-black/5"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wide ${
                        popular ? "text-[#9dffc2]" : "text-[#00B956]"
                      }`}
                    >
                      {item.level}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold">{item.name}</h3>
                    <p className="mt-4 text-4xl font-semibold">
                      {item.price}
                      <span
                        className={`ml-2 text-base font-normal ${
                          popular ? "text-white/55" : "text-muted-foreground"
                        }`}
                      >
                        / 30 дней
                      </span>
                    </p>
                    <ul className="mt-6 space-y-3 text-sm">
                      {[item.minutes, item.data, item.extra, ...item.points].map(
                        (line) => (
                          <li key={line} className="flex gap-2">
                            <Check
                              className={`mt-0.5 size-4 shrink-0 ${
                                popular ? "text-[#9dffc2]" : "text-[#00B956]"
                              }`}
                            />
                            {line}
                          </li>
                        ),
                      )}
                    </ul>
                    <Button
                      onClick={() => openLead(item.id)}
                      className={`mt-8 h-12 w-full rounded-full text-base font-semibold ${
                        popular
                          ? "bg-[#00B956] text-white hover:bg-[#00a34c]"
                          : "bg-[#07150d] text-white hover:bg-black"
                      }`}
                    >
                      {copy.productCta}
                    </Button>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {copy.benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-[#f3faf5] p-5 ring-1 ring-black/5"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.howTitle}
          </h2>
        </section>

        <section id="snils" className="scroll-mt-24 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <StepHead n={1} title={copy.step1Title} />
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {copy.step1Text}
            </p>
            <article className="mt-8 rounded-[2rem] bg-[#07150d] p-6 text-white sm:p-8">
              <MapPinned className="size-8 text-[#00B956]" />
              <h3 className="mt-4 text-2xl font-semibold">{copy.placeTitle}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                {copy.placeText}
              </p>
              <Button
                onClick={() => openLead()}
                className="mt-6 h-11 rounded-full bg-[#00B956] px-5 font-semibold text-white hover:bg-[#00a34c]"
              >
                {copy.placeBtn}
              </Button>
            </article>
            <h3 className="mt-10 text-xl font-semibold">{copy.bringTitle}</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {copy.bring.map((item, index) => {
                const Icon = bringIcons[index] ?? FileText;
                return (
                  <article
                    key={item.title}
                    className="rounded-3xl bg-[#f3faf5] p-5 ring-1 ring-black/5"
                  >
                    <Icon className="size-6 text-[#00B956]" />
                    <h4 className="mt-4 font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                    {index === 1 ? (
                      <a
                        href="https://2gis.ru/moscow/search/%D0%B1%D1%8E%D1%80%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-sm font-semibold text-[#00B956] hover:underline"
                      >
                        {copy.translateBtn}
                      </a>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="getsim" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <StepHead n={2} title={copy.step2Title} />
          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {copy.step2Items.map((item, index) => (
              <li key={item.title} className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
                <span className="text-sm font-semibold text-[#00B956]">
                  {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-[2rem] bg-[#07150d] p-6 text-white sm:p-8">
            <h3 className="text-2xl font-semibold">{copy.bioTitle}</h3>
            <p className="mt-2 text-sm text-white/70">{copy.bioText}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {biometryLines.map((line, index) => (
                <article
                  key={line}
                  className="rounded-2xl bg-white p-4 text-[#07150d]"
                >
                  <p className="font-mono text-lg font-semibold tracking-wide">
                    {line}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {biometryIpa[index]}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <h3 className="mt-10 text-xl font-semibold">{copy.bring2Title}</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.bring2.map((item, index) => {
              const Icon = bring2Icons[index] ?? FileText;
              return (
                <article
                  key={item.title}
                  className="rounded-3xl bg-white p-5 ring-1 ring-black/5"
                >
                  <Icon className="size-5 text-[#00B956]" />
                  <h4 className="mt-3 font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="activation" className="scroll-mt-24 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <StepHead n={3} title={copy.step3Title} />
            <p className="mt-4 text-muted-foreground">{copy.step3Text}</p>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {copy.step3Items.map((item, index) => (
                <li key={item.title} className="rounded-3xl bg-[#f3faf5] p-6">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-[#00B956] font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  {item.note ? (
                    <p className="mt-3 text-xs leading-relaxed text-[#3d5c4a]">
                      {item.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="payment" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <StepHead n={4} title={copy.step4Title} />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {copy.step4Items.map((item, index) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[2rem] bg-white p-6 ring-1 ring-black/5"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {item.text}
                </p>
                {index === 0 ? (
                  <Button
                    onClick={() => openLead()}
                    className="mt-6 h-11 rounded-full bg-[#00B956] font-semibold text-white hover:bg-[#00a34c]"
                  >
                    {item.btn}
                  </Button>
                ) : (
                  <Button
                    render={
                      <a
                        href={
                          index === 1
                            ? "https://www.megafon.ru/"
                            : "https://www.megafon.ru/download/"
                        }
                        target="_blank"
                        rel="noreferrer"
                      />
                    }
                    variant="outline"
                    className="mt-6 h-11 rounded-full font-semibold"
                  >
                    {item.btn}
                  </Button>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.faqTitle}
          </h2>
          <Accordion className="mt-6 rounded-3xl bg-white px-5 ring-1 ring-black/5">
            {copy.faq.map((item, index) => (
              <AccordionItem key={item.q} value={`a-${index}`}>
                <AccordionTrigger className="py-4 text-base hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <button
            type="button"
            onClick={() => void share()}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00B956]"
          >
            <Share2 className="size-4" />
            {shared ? "Ссылка скопирована" : copy.share}
          </button>
        </section>

        <section id="lead" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-6 ring-1 ring-black/5 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                {copy.leadTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {copy.leadText}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <UserRound className="mt-0.5 size-4 text-[#00B956]" />
                  {copy.placeTitle}
                </li>
                <li className="flex gap-2">
                  <Fingerprint className="mt-0.5 size-4 text-[#00B956]" />
                  {copy.bioTitle}
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-[#00B956]" />
                  Подскажем ближайший салон и что взять с собой
                </li>
              </ul>
            </div>
            <CallbackForm
              defaultTariff={tariff}
              idPrefix="arrive-lead"
              tariffChoices={formTariffs}
            />
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/5 bg-white p-3 sm:hidden">
        <Button
          onClick={() => openLead()}
          className="h-12 w-full rounded-full bg-[#00B956] text-base font-semibold text-white hover:bg-[#00a34c]"
        >
          {copy.apply}
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{copy.apply}</DialogTitle>
            <DialogDescription>{copy.leadText}</DialogDescription>
          </DialogHeader>
          <CallbackForm
            key={tariff}
            compact
            defaultTariff={tariff}
            idPrefix="arrive-dialog"
            tariffChoices={formTariffs}
          />
        </DialogContent>
      </Dialog>
    </LandingChrome>
  );
}

function StepHead({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#00B956] text-lg font-semibold text-white">
        {String(n).padStart(2, "0")}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
