"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconWell } from "@/components/landings/mega-art";
import { mf } from "@/components/landings/mf";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/language-context";
import { withBase } from "@/lib/base-path";
import {
  MEGASILA_HUB,
  TARIFF_PAGES,
  autoMigrantProducts,
  meaningTariffs,
  megaSilaHow,
  megaSilas,
  offerUi,
  optInMigrantProducts,
} from "@/lib/offer-next";

export function PreviousBanner({
  current,
}: {
  current: "arrive" | "here";
}) {
  const { locale } = useLanguage();
  const liveHref = current === "arrive" ? "/arrive" : "/here";
  return (
    <div className="bg-[#07150d] text-white">
      <div className={`${mf.wrap} flex flex-wrap items-center justify-between gap-2 py-2.5 text-sm`}>
        <p>
          <span className="font-medium text-[#9dffc2]">{offerUi.previousKicker[locale]}</span>
          <span className="text-white/70"> · </span>
          <span className="text-white/80">
            {current === "arrive" ? "Только приехал" : "Уже живу в России"}
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={withBase("/draft")} className="text-[#9dffc2] hover:underline">
            Все варианты
          </a>
          <a href={withBase(liveHref)} className="text-white hover:underline">
            {offerUi.previousLive[locale]}
          </a>
        </div>
      </div>
    </div>
  );
}

export function MeaningTariffs({
  selectedId,
  onSelect,
  ctaLabel,
  onCta,
}: {
  selectedId?: string;
  onSelect?: (id: "minimum" | "family") => void;
  ctaLabel: string;
  onCta: (id: "minimum" | "family") => void;
}) {
  const { locale } = useLanguage();
  return (
    <section id="tariffs" className="scroll-mt-24">
      <h2 className={`${mf.h2} text-center`}>{offerUi.meaningTitle[locale]}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
        {offerUi.meaningLead[locale]}
      </p>
      <Reveal className="mt-10 grid gap-4 lg:grid-cols-2">
        {meaningTariffs.map((item) => {
          const active = selectedId !== undefined && selectedId === item.id;
          return (
            <article
              key={item.id}
              className={`${mf.sky} p-6 ${onSelect ? "cursor-pointer" : ""} ${
                active ? "ring-2 ring-[#333]" : ""
              }`}
              onClick={onSelect ? () => onSelect(item.id) : undefined}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-medium uppercase tracking-wide text-[#616C82]">
                  {item.level[locale]}
                </p>
              </div>
              <h3 className="mt-1 text-[26px] font-semibold">{item.name}</h3>
              <p className="mt-2 text-[15px] leading-6 text-[#333]/80">{item.purpose[locale]}</p>
              <p className="mt-4 text-[32px] font-bold">{item.price}</p>
              <p className="mt-1 text-[15px] text-[#616C82]">{item.minutes}</p>
              <div className="mt-5 space-y-4">
                {item.groups.map((group) => (
                  <div key={group.title.ru}>
                    <p className="text-sm font-semibold text-[#00B956]">{group.title[locale]}</p>
                    <ul className="mt-2 space-y-1.5 text-[15px]">
                      {group.items[locale].map((line) => (
                        <li key={line} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-[#00B956]" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  onCta(item.id);
                }}
                className={`mt-6 w-full ${mf.btnLine}`}
              >
                {ctaLabel}
              </Button>
            </article>
          );
        })}
      </Reveal>
    </section>
  );
}

export function MigrantProducts() {
  const { locale } = useLanguage();
  return (
    <section id="migrants" className="scroll-mt-24">
      <h2 className={`${mf.h2} text-center`}>{offerUi.autoTitle[locale]}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
        {offerUi.autoLead[locale]}
      </p>
      <Reveal className="mt-8 grid gap-4 md:grid-cols-3" flip={false}>
        {autoMigrantProducts.map((item) => (
          <article key={item.id} className={`${mf.sky} p-5`}>
            <span className="inline-flex rounded-full bg-[#00B956] px-2.5 py-0.5 text-[12px] font-medium text-white">
              {offerUi.autoBadge[locale]}
            </span>
            <h3 className="mt-3 font-medium">{item.name[locale]}</h3>
            <p className="mt-2 text-[15px] leading-6 text-[#333]/80">{item.text[locale]}</p>
          </article>
        ))}
      </Reveal>

      <h3 className={`${mf.h3} mt-12 text-center`}>{offerUi.optInTitle[locale]}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
        {offerUi.optInLead[locale]}
      </p>
      <Reveal className="mt-8 grid gap-4 md:grid-cols-2" flip={false}>
        {optInMigrantProducts.map((item) => (
          <article key={item.id} className="rounded-[20px] bg-white p-5 ring-1 ring-[#EDEDED]">
            <span className="inline-flex rounded-full bg-[#F2F4F7] px-2.5 py-0.5 text-[12px] font-medium text-[#333]">
              {offerUi.optInBadge[locale]}
            </span>
            <h3 className="mt-3 font-medium">{item.name[locale]}</h3>
            <p className="mt-2 text-[15px] leading-6 text-[#333]/80">{item.how[locale]}</p>
            <a
              href={item.ruHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[15px] font-medium text-[#00B956] hover:underline"
            >
              {offerUi.ruDetail[locale]}
            </a>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

export function MegaSilaBlock() {
  const { locale } = useLanguage();
  return (
    <section id="megasila" className="scroll-mt-24">
      <h2 className={`${mf.h2} text-center`}>{offerUi.silaTitle[locale]}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
        {offerUi.silaLead[locale]}
      </p>
      <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" flip={false}>
        {megaSilas.map((item) => (
          <article key={item.name} className={`${mf.sky} p-5`}>
            <IconWell>
              <span className="text-xs font-bold">3.0</span>
            </IconWell>
            <h3 className="mt-3 font-medium">{item.name}</h3>
            <p className="mt-2 text-[15px] leading-6 text-[#333]/80">{item.text[locale]}</p>
          </article>
        ))}
      </Reveal>

      <div className={`${mf.sky} mt-8 p-6 sm:p-8`}>
        <h3 className="text-[22px] font-semibold">{megaSilaHow.title[locale]}</h3>
        <ol className="mt-5 space-y-3 text-[15px] leading-6">
          {megaSilaHow.steps[locale].map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#00B956] text-sm font-medium text-white">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-5 text-[15px] text-[#333]/80">{megaSilaHow.note[locale]}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<a href={TARIFF_PAGES.minimum} target="_blank" rel="noreferrer" />}
            className={mf.btnDark}
          >
            {offerUi.silaMinimum[locale]}
          </Button>
          <Button
            render={<a href={TARIFF_PAGES.family} target="_blank" rel="noreferrer" />}
            variant="outline"
            className={mf.btnLine}
          >
            {offerUi.silaFamily[locale]}
          </Button>
          <a
            href={MEGASILA_HUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center text-[15px] font-medium text-[#00B956] hover:underline"
          >
            {offerUi.ruDetail[locale]}
          </a>
        </div>
      </div>
    </section>
  );
}
