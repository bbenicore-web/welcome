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
import {
  CtaRow,
  IconWell,
  MegaArt,
  MegaHero,
  ProfileCard,
  StepBadge,
} from "@/components/landings/mega-art";
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
              <Button render={<a href="#snils" />} className={mf.btnDark}>
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

        <nav className={`${mf.sky}`}>
          <div className="grid gap-1 p-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.widgets.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-[16px] px-3 py-3 text-[15px] font-medium hover:bg-white"
              >
                <StepBadge n={index + 1} />
                {item.label}
              </a>
            ))}
          </div>
        </nav>

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

        <section className="pt-2">
          <h2 className={`${mf.h2} text-center`}>{copy.howTitle}</h2>
        </section>

        <section id="snils" className="scroll-mt-24">
          <StepHead n={1} title={copy.step1Title} />
          <p className="mt-4 max-w-3xl text-[15px] leading-6 text-[#333]/80">{copy.step1Text}</p>
          <Reveal className="mt-8">
            <article className="flex overflow-hidden rounded-[20px] bg-white ring-1 ring-[#EDEDED] max-lg:flex-col">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <MapPinned className="size-8 text-[#00B956]" />
                  <h3 className="mt-4 text-[22px] font-semibold">{copy.placeTitle}</h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-6 text-[#333]/80">
                    {copy.placeText}
                  </p>
                </div>
                <div className="mt-6">
                  <CtaRow label={copy.placeBtn} onClick={() => openLead()} />
                </div>
              </div>
              <MegaArt art="internet" className="h-[220px] lg:min-h-[320px] lg:w-1/2" />
            </article>
          </Reveal>
          <h3 className="mt-10 text-[20px] font-medium">{copy.bringTitle}</h3>
          <Reveal className="mt-5 grid gap-4 md:grid-cols-3" flip={false}>
            {copy.bring.map((item, index) => {
              const Icon = bringIcons[index] ?? FileText;
              return (
                <article key={item.title} className={`${mf.sky} p-5`}>
                  <IconWell>
                    <Icon className="size-5" />
                  </IconWell>
                  <h4 className="mt-4 font-medium">{item.title}</h4>
                  <p className="mt-2 text-[15px] text-[#333]/80">{item.text}</p>
                  {index === 1 ? (
                    <a
                      href="https://2gis.ru/moscow/search/%D0%B1%D1%8E%D1%80%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-[15px] font-medium text-[#333] hover:underline"
                    >
                      {copy.translateBtn}
                    </a>
                  ) : null}
                </article>
              );
            })}
          </Reveal>
        </section>

        <section id="getsim" className="scroll-mt-24">
          <StepHead n={2} title={copy.step2Title} />
          <Reveal as="ol" className="mt-8 grid gap-4 lg:grid-cols-2" flip={false}>
            {copy.step2Items.map((item, index) => (
              <li key={item.title} className={`${mf.sky} p-6`}>
                <StepBadge n={index + 1} />
                <h3 className="mt-3 text-[18px] font-medium">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[#333]/80">{item.text}</p>
              </li>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <div className={`${mf.sky} p-6 sm:p-8`}>
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
          </Reveal>

          <h3 className="mt-10 text-[20px] font-medium">{copy.bring2Title}</h3>
          <Reveal className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" flip={false}>
            {copy.bring2.map((item, index) => {
              const Icon = bring2Icons[index] ?? FileText;
              return (
                <article key={item.title} className={`${mf.sky} p-5`}>
                  <Icon className="size-5 text-[#00B956]" />
                  <h4 className="mt-3 font-medium">{item.title}</h4>
                  <p className="mt-2 text-[15px] text-[#333]/80">{item.text}</p>
                </article>
              );
            })}
          </Reveal>
        </section>

        <section id="activation" className="scroll-mt-24">
          <StepHead n={3} title={copy.step3Title} />
          <p className="mt-4 text-[#333]/80">{copy.step3Text}</p>
          <Reveal as="ol" className="mt-8 grid gap-4 md:grid-cols-2" flip={false}>
            {copy.step3Items.map((item, index) => (
              <li key={item.title} className={`${mf.sky} p-6`}>
                <StepBadge n={index + 1} />
                <h3 className="mt-4 text-[18px] font-medium">{item.title}</h3>
                <p className="mt-2 text-[15px] text-[#333]/80">{item.text}</p>
                {item.note ? (
                  <p className="mt-3 text-xs leading-relaxed text-[#616C82]">{item.note}</p>
                ) : null}
              </li>
            ))}
          </Reveal>
        </section>

        <section id="payment" className="scroll-mt-24">
          <StepHead n={4} title={copy.step4Title} />
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
          <Accordion className="mt-8">
            {copy.faq.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`a-${index}`}
                className="border-b border-[#EDEDED]"
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
