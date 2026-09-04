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
import { IconWell, MegaGlow, StepBadge } from "@/components/landings/mega-art";
import { mf } from "@/components/landings/mf";
import { Reveal } from "@/components/motion/reveal";
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
      <main className={`${mf.wrap} space-y-4 py-4 lg:py-6`}>
        <section className={`${mf.hero} px-6 py-12 sm:px-10 lg:px-16 lg:py-16`}>
          <MegaGlow />
          <div className="relative z-10 max-w-2xl">
            <p className={mf.kicker}>МегаФон · {copy.productKicker}</p>
            <h1 className={`${mf.h1} mt-4`}>{copy.hero}</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-white/80">
              {copy.gainSub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button render={<a href="#snils" />} className={mf.btnWhite}>
                {copy.download}
              </Button>
              <Button
                onClick={() => openLead()}
                variant="outline"
                className="h-[52px] rounded-full border-white/30 bg-transparent px-6 text-[15px] font-medium text-white hover:bg-white/10"
              >
                {copy.apply}
              </Button>
            </div>
          </div>
        </section>

        <nav className={`${mf.card} ring-1 ring-[#EDEDED]`}>
          <div className="grid gap-1 p-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.widgets.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-[16px] px-3 py-3 text-[15px] font-medium hover:bg-[#F6F6F6]"
              >
                <StepBadge n={index + 1} />
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="tariffs" className={`${mf.card} p-6 ring-1 ring-[#EDEDED] sm:p-10`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#731982]">{copy.productKicker}</p>
              <h2 className={`${mf.h2} mt-2`}>Минимум + · Семейный +</h2>
            </div>
            <Button render={<a href="#snils" />} className={mf.btnGreen}>
              {copy.productCta}
            </Button>
          </div>

          <Reveal className="mt-10 grid gap-4 lg:grid-cols-2">
            {catalogTariffs.map((item) => {
              const popular = "popular" in item && item.popular;
              return (
                <article
                  key={item.id}
                  className={`rounded-[24px] p-7 ${
                    popular
                      ? "bg-[#731982] text-white"
                      : "bg-[#F6F6F6] text-[#333]"
                  }`}
                >
                  <p
                    className={`text-xs font-medium uppercase tracking-wide ${
                      popular ? "text-[#00B956]" : "text-[#731982]"
                    }`}
                  >
                    {item.level}
                  </p>
                  <h3 className="mt-2 text-[28px] font-semibold">{item.name}</h3>
                  <p className="mt-4 text-[36px] font-bold leading-none">
                    {item.price}
                    <span
                      className={`ml-2 text-base font-normal ${
                        popular ? "text-white/60" : "text-[#999]"
                      }`}
                    >
                      / 30 дней
                    </span>
                  </p>
                  <ul className="mt-6 space-y-3 text-[15px]">
                    {[item.minutes, item.data, item.extra, ...item.points].map(
                      (line) => (
                        <li key={line} className="flex gap-2">
                          <Check
                            className={`mt-0.5 size-4 shrink-0 ${
                              popular ? "text-[#00B956]" : "text-[#00B956]"
                            }`}
                          />
                          {line}
                        </li>
                      ),
                    )}
                  </ul>
                  <Button
                    onClick={() => openLead(item.id)}
                    className={`mt-8 w-full ${popular ? mf.btnGreen : mf.btnPurple}`}
                  >
                    {copy.productCta}
                  </Button>
                </article>
              );
            })}
          </Reveal>

          <Reveal className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" flip={false}>
            {copy.benefits.map((item) => (
              <article key={item.title} className="rounded-[24px] bg-[#F6F6F6] p-5">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[#999]">{item.text}</p>
              </article>
            ))}
          </Reveal>
        </section>

        <section className="px-1 pt-6">
          <h2 className={mf.h2}>{copy.howTitle}</h2>
        </section>

        <section id="snils" className={`${mf.card} scroll-mt-24 p-6 ring-1 ring-[#EDEDED] sm:p-10`}>
          <StepHead n={1} title={copy.step1Title} />
          <p className="mt-4 max-w-3xl text-[15px] leading-6 text-[#999]">{copy.step1Text}</p>
          <Reveal className="mt-8">
            <article className="rounded-[24px] bg-[#731982] p-6 text-white sm:p-8">
              <MapPinned className="size-8 text-[#00B956]" />
              <h3 className="mt-4 text-[22px] font-semibold">{copy.placeTitle}</h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-6 text-white/75">
                {copy.placeText}
              </p>
              <Button onClick={() => openLead()} className={`mt-6 ${mf.btnGreen}`}>
                {copy.placeBtn}
              </Button>
            </article>
          </Reveal>
          <h3 className="mt-10 text-[20px] font-medium">{copy.bringTitle}</h3>
          <Reveal className="mt-5 grid gap-4 md:grid-cols-3" flip={false}>
            {copy.bring.map((item, index) => {
              const Icon = bringIcons[index] ?? FileText;
              return (
                <article key={item.title} className="rounded-[24px] bg-[#F6F6F6] p-5">
                  <IconWell>
                    <Icon className="size-6" />
                  </IconWell>
                  <h4 className="mt-4 font-medium">{item.title}</h4>
                  <p className="mt-2 text-[15px] text-[#999]">{item.text}</p>
                  {index === 1 ? (
                    <a
                      href="https://2gis.ru/moscow/search/%D0%B1%D1%8E%D1%80%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-[15px] font-medium text-[#00B956] hover:underline"
                    >
                      {copy.translateBtn}
                    </a>
                  ) : null}
                </article>
              );
            })}
          </Reveal>
        </section>

        <section id="getsim" className={`${mf.card} scroll-mt-24 p-6 ring-1 ring-[#EDEDED] sm:p-10`}>
          <StepHead n={2} title={copy.step2Title} />
          <Reveal as="ol" className="mt-8 grid gap-4 lg:grid-cols-2" flip={false}>
            {copy.step2Items.map((item, index) => (
              <li key={item.title} className="rounded-[24px] bg-[#F6F6F6] p-6">
                <StepBadge n={index + 1} />
                <h3 className="mt-3 text-[18px] font-medium">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[#999]">{item.text}</p>
              </li>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <div className="rounded-[24px] bg-[#731982] p-6 text-white sm:p-8">
              <h3 className="text-[22px] font-semibold">{copy.bioTitle}</h3>
              <p className="mt-2 text-[15px] text-white/75">{copy.bioText}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {biometryLines.map((line, index) => (
                  <article key={line} className="rounded-[20px] bg-white p-4 text-[#333]">
                    <p className="font-mono text-lg font-semibold tracking-wide">{line}</p>
                    <p className="mt-2 text-xs leading-relaxed text-[#999]">
                      {biometryIpa[index]}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <h3 className="mt-10 text-[20px] font-medium">{copy.bring2Title}</h3>
          <Reveal className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" flip={false}>
            {copy.bring2.map((item, index) => {
              const Icon = bring2Icons[index] ?? FileText;
              return (
                <article key={item.title} className="rounded-[24px] bg-[#F6F6F6] p-5">
                  <Icon className="size-5 text-[#00B956]" />
                  <h4 className="mt-3 font-medium">{item.title}</h4>
                  <p className="mt-2 text-[15px] text-[#999]">{item.text}</p>
                </article>
              );
            })}
          </Reveal>
        </section>

        <section id="activation" className={`${mf.card} scroll-mt-24 p-6 ring-1 ring-[#EDEDED] sm:p-10`}>
          <StepHead n={3} title={copy.step3Title} />
          <p className="mt-4 text-[#999]">{copy.step3Text}</p>
          <Reveal as="ol" className="mt-8 grid gap-4 md:grid-cols-2" flip={false}>
            {copy.step3Items.map((item, index) => (
              <li key={item.title} className="rounded-[24px] bg-[#F6F6F6] p-6">
                <StepBadge n={index + 1} />
                <h3 className="mt-4 text-[18px] font-medium">{item.title}</h3>
                <p className="mt-2 text-[15px] text-[#999]">{item.text}</p>
                {item.note ? (
                  <p className="mt-3 text-xs leading-relaxed text-[#731982]">{item.note}</p>
                ) : null}
              </li>
            ))}
          </Reveal>
        </section>

        <section id="payment" className={`${mf.card} scroll-mt-24 p-6 ring-1 ring-[#EDEDED] sm:p-10`}>
          <StepHead n={4} title={copy.step4Title} />
          <Reveal className="mt-8 grid gap-4 lg:grid-cols-3" flip={false}>
            {copy.step4Items.map((item, index) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[24px] bg-[#F6F6F6] p-6"
              >
                <h3 className="text-[20px] font-medium">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] text-[#999]">{item.text}</p>
                {index === 0 ? (
                  <Button onClick={() => openLead()} className={`mt-6 ${mf.btnGreen}`}>
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
                    className={`mt-6 ${mf.btnOutline}`}
                  >
                    {item.btn}
                  </Button>
                )}
              </article>
            ))}
          </Reveal>
        </section>

        <section id="faq" className={`${mf.card} p-6 ring-1 ring-[#EDEDED] sm:p-10`}>
          <h2 className={mf.h2}>{copy.faqTitle}</h2>
          <Accordion className="mt-6">
            {copy.faq.map((item, index) => (
              <AccordionItem key={item.q} value={`a-${index}`}>
                <AccordionTrigger className="py-4 text-[16px] hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#999]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <button
            type="button"
            onClick={() => void share()}
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#00B956]"
          >
            <Share2 className="size-4" />
            {shared ? "Ссылка скопирована" : copy.share}
          </button>
        </section>

        <section id="lead" className={`${mf.card} p-6 ring-1 ring-[#EDEDED] sm:p-10`}>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h2 className={mf.h2}>{copy.leadTitle}</h2>
                <p className="mt-3 text-[15px] leading-6 text-[#999]">{copy.leadText}</p>
                <ul className="mt-6 space-y-2 text-[15px] text-[#999]">
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
          </Reveal>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 bg-white p-3 shadow-[0_-8px_24px_rgba(51,51,51,0.08)] sm:hidden">
        <Button onClick={() => openLead()} className={`w-full ${mf.btnGreen}`}>
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
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00B956] text-lg font-medium text-white">
        {String(n).padStart(2, "0")}
      </span>
      <h2 className={mf.h2}>{title}</h2>
    </div>
  );
}
