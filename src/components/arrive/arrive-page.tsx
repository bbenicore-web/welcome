"use client";

import { useMemo, useState } from "react";
import { Check, Fingerprint, Share2, Smartphone, UserRound } from "lucide-react";
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
import { MegaHero, ProfileCard } from "@/components/landings/mega-art";
import { mf } from "@/components/landings/mf";
import { Reveal } from "@/components/motion/reveal";
import { withBase } from "@/lib/base-path";
import { instructionCopy, type InstructionCopy, biometryIpa, biometryLines } from "@/lib/instruction-copy";
import { useLanguage } from "@/lib/language-context";
import { catalogTariffs, formTariffs } from "@/lib/products";

export function ArrivePage() {
  const { locale } = useLanguage();
  const copy = instructionCopy[locale];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tariff, setTariff] = useState("family");
  const [shared, setShared] = useState(false);
  const [faqOpen, setFaqOpen] = useState<string[]>([]);

  function openLead(id = "family") {
    setTariff(id);
    setDialogOpen(true);
  }

  function openFaqById(id: string) {
    const index = copy.faq.findIndex((item) => item.id === id);
    if (index >= 0) setFaqOpen([`a-${index}`]);
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
    } catch {
      /* fall through to clipboard */
    }
    await navigator.clipboard.writeText(url);
    setShared(true);
    window.setTimeout(() => setShared(false), 2000);
  }

  return (
    <LandingChrome current="arrive">
      <main className={`${mf.wrap} space-y-10 py-4 lg:py-6`}>
        <MegaHero
          kicker={`МегаФон → ${copy.productKicker}`}
          title={copy.hero}
          subtitle={copy.gainSub}
          actions={
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button render={<a href="#howto" />} className={mf.btnDark}>
                {copy.download}
              </Button>
              <Button
                onClick={() => openLead()}
                variant="outline"
                className={mf.btnLine}
              >
                {copy.apply}
              </Button>
            </div>
          }
        />

        <ActivationSteps copy={copy} onFaq={openFaqById} />

        <section id="tariffs" className="scroll-mt-24">
          <h2 className={`${mf.h2} text-center`}>
            Несколько тарифов
            <br className="hidden sm:block" /> под разные задачи
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
            {copy.productKicker}. Базовый — «Минимум +». Максимальный — «Семейный +».
          </p>

          <Reveal className="mt-10 space-y-4">
            {catalogTariffs.map((item) => {
              const popular = "popular" in item && item.popular;
              return (
                <ProfileCard
                  key={item.id}
                  title={item.name}
                  subtitle={item.extra}
                  tag={item.level}
                  badges={[item.minutes, item.data, ...item.points.slice(0, 2)]}
                  price={item.price}
                  cta={copy.productCta}
                  onCta={() => openLead(item.id)}
                  art={popular ? "promo" : "base"}
                />
              );
            })}
          </Reveal>

          <Reveal className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" flip={false}>
            {copy.benefits.map((item) => (
              <article key={item.title} className={`${mf.sky} p-5`}>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[#333]/80">{item.text}</p>
              </article>
            ))}
          </Reveal>
        </section>

        <section id="payment" className="scroll-mt-24">
          <h2 className={mf.h2}>{copy.step4Title}</h2>
          <Reveal className="mt-8 grid gap-4 lg:grid-cols-3" flip={false}>
            {copy.step4Items.map((item, index) => (
              <article
                key={item.title}
                className={`flex flex-col ${mf.sky} p-6`}
              >
                <h3 className="text-[20px] font-medium">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] text-[#333]/80">{item.text}</p>
                {index === 0 ? (
                  <Button onClick={() => openLead()} className={`mt-6 ${mf.btnDark}`}>
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
                    className={`mt-6 ${mf.btnLine}`}
                  >
                    {item.btn}
                  </Button>
                )}
              </article>
            ))}
          </Reveal>
        </section>

        <section id="faq">
          <h2 className={`${mf.h2} text-center`}>Остались вопросы?</h2>
          <Accordion className="mt-8" value={faqOpen} onValueChange={setFaqOpen}>
            {copy.faq.map((item, index) => (
              <AccordionItem
                key={item.q}
                id={item.id}
                value={`a-${index}`}
                className="scroll-mt-24 border-b border-[#EDEDED]"
              >
                <AccordionTrigger className="py-5 text-[16px] font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#333]/80">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <button
            type="button"
            onClick={() => void share()}
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#333]"
          >
            <Share2 className="size-4" />
            {shared ? "Ссылка скопирована" : copy.share}
          </button>
        </section>

        <section id="lead" className={`${mf.sky} p-6 sm:p-10`}>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h2 className={mf.h2}>{copy.leadTitle}</h2>
                <p className="mt-3 text-[15px] leading-6 text-[#333]/80">{copy.leadText}</p>
                <ul className="mt-6 space-y-2 text-[15px] text-[#333]/80">
                  {copy.leadPoints.map((point, index) => {
                    const Icon = [Smartphone, UserRound, Fingerprint][index] ?? Check;
                    return (
                      <li key={point} className="flex gap-2">
                        <Icon className="mt-0.5 size-4 shrink-0 text-[#00B956]" />
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="rounded-[20px] bg-white p-6">
                <CallbackForm
                  defaultTariff={tariff}
                  idPrefix="arrive-lead"
                  tariffChoices={formTariffs}
                />
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 bg-white p-3 shadow-[0_-8px_24px_rgba(51,51,51,0.08)] sm:hidden">
        <Button onClick={() => openLead()} className={`w-full ${mf.btnDark}`}>
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

const stepLinkClass =
  "text-[15px] font-medium text-[#00B956] hover:underline";

function ActivationSteps({
  copy,
  onFaq,
}: {
  copy: InstructionCopy;
  onFaq: (id: string) => void;
}) {
  const imeiAnswer = copy.faq.find((item) => item.id === "faq-imei")?.a;

  return (
    <section id="howto" className="scroll-mt-24">
      <h2 className={`${mf.h2} text-center`}>{copy.howTitle}</h2>
      <Reveal className="mt-8 space-y-4" flip={false}>
        {copy.activationSteps.map((step, index) => (
          <div key={step.id} className="space-y-4">
            <article
              id={step.id}
              className="scroll-mt-24 rounded-[24px] bg-white p-6 shadow-[0_12px_32px_rgba(51,51,51,0.08)] ring-1 ring-[#EDEDED] sm:p-8"
            >
              <h3 className="text-[20px] font-semibold leading-7 tracking-[0.2px] sm:text-[22px]">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-[#333]/80">{step.text}</p>
              {step.needs?.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-[15px] leading-6 text-[#333]/80">
                  {step.needs.map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
              ) : null}
              {step.links?.length ? (
                <div className="mt-4 flex flex-col items-start gap-2">
                  {step.links.map((link) => {
                    if (link.href === "#faq-imei") {
                      return (
                        <details key={link.label} className="w-full">
                          <summary className={`${stepLinkClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                            {link.label}
                          </summary>
                          {imeiAnswer ? (
                            <p className="mt-2 text-[15px] leading-6 text-[#333]/80">
                              {imeiAnswer}
                            </p>
                          ) : null}
                        </details>
                      );
                    }
                    const external = link.href.startsWith("http");
                    return (
                      <a
                        key={`${link.href}-${link.label}`}
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        onClick={() => {
                          if (link.href.startsWith("#")) onFaq(link.href.slice(1));
                        }}
                        className={stepLinkClass}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </article>
            {step.id === "biometry" ? (
              <div id="biometry-how" className={`scroll-mt-24 ${mf.sky} p-6 sm:p-8`}>
                <h3 className="text-[22px] font-semibold">{copy.bioTitle}</h3>
                <p className="mt-2 text-[15px] text-[#333]/80">{copy.bioText}</p>
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {biometryLines.map((line, index) => (
                    <article key={line} className="rounded-[20px] bg-white p-4">
                      <p className="font-mono text-lg font-semibold tracking-wide">{line}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[#8F96A4]">
                        {biometryIpa[index]}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </Reveal>
    </section>
  );
}
