"use client";

import { useMemo, useState } from "react";
import {
  ArrowRightLeft,
  Banknote,
  RefreshCcw,
  Smartphone,
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
  StepBadge,
} from "@/components/landings/mega-art";
import {
  MeaningTariffs,
  MegaSilaBlock,
  MigrantProducts,
} from "@/components/landings/offer-next";
import { mf } from "@/components/landings/mf";
import { Reveal } from "@/components/motion/reveal";
import { catalogTariffs, formTariffs, specials } from "@/lib/products";

const transferTiers = [
  { amount: 30_000, label: "30 000 ₽", reward: "50 международных минут" },
  { amount: 50_000, label: "50 000 ₽", reward: "месяц связи бесплатно" },
  { amount: 70_000, label: "70 000 ₽", reward: "три месяца связи" },
  { amount: 100_000, label: "100 000 ₽", reward: "полгода связи" },
] as const;

const steps = [
  {
    title: "Оставьте номер",
    text: "Имя, телефон, город. Займёт пару минут — с телефона.",
  },
  {
    title: "Проверьте биометрию",
    text: "Если российская SIM уже есть, СНИЛС и биометрия обычно уже в системе. Статус — на Госуслугах. Заново сдавать не нужно.",
  },
  {
    title: "Приходите в салон со своим номером",
    text: "Паспорт и текущая SIM. IMEI телефона. Не больше 10 номеров. Перенос делают в салоне, не в приложении.",
  },
  {
    title: "Включаем тариф",
    text: "«Минимум +» или «Семейный +». «Тёплый приём» сам. Международные минуты — если нужно.",
  },
];

const faq = [
  {
    q: "Нужно ли заново делать СНИЛС и Госуслуги?",
    a: "Нет, если российская SIM уже была. Повторно — только если сменился паспорт или биометрию не приняли.",
  },
  {
    q: "Можно ли оставить свой номер?",
    a: "Да. Перенос делают в салоне МегаФона. Срок скажут на месте.",
  },
  {
    q: "Что входит в «Минимум +»?",
    a: "От 850 ₽ за 30 дней (Москва, с НДС): 400 минут по России и интернет на смену. Когда минуты кончились — на МегаФон России можно звонить дальше. «Тёплый приём» сам, если вы не гражданин России. +10 ГБ за оплату вовремя — МегаСила, её включают в приложении.",
  },
  {
    q: "Что входит в «Семейный +»?",
    a: "От 1 140 ₽ за 30 дней: 1 500 минут, безлимитный интернет, МегаСемья до 5 человек. Хватает на такси, карты, видео и сайты своей страны. Родные — в мессенджерах, которые работают в России.",
  },
  {
    q: "Как работают бонусы за переводы?",
    a: "Только если переводите деньги в салоне МегаФона, не в приложении. От 30 000 ₽ — 50 международных минут. От 50 000 ₽ — месяц связи. От 70 000 ₽ — три месяца. От 100 000 ₽ — полгода.",
  },
  {
    q: "Что будет, если уеду домой на зиму?",
    a: "Номер можно сохранить. Когда вернётесь и снова на тарифе — +20 ГБ до 6 месяцев.",
  },
];

export function HerePageNext() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tariffId, setTariffId] = useState<(typeof catalogTariffs)[number]["id"]>(
    "family",
  );
  const [tier, setTier] = useState(1);

  const tariff = catalogTariffs.find((item) => item.id === tariffId) ?? catalogTariffs[1];
  const bonus = transferTiers[tier];

  const monthlyLine = useMemo(() => {
    if (tariffId === "minimum") return "400 мин + пакет интернета + «Тёплый приём»";
    return "1 500 мин + безлимит + МегаСемья до 5";
  }, [tariffId]);

  return (
    <LandingChrome current="here">
      <main className={`${mf.wrap} space-y-10 py-4 lg:py-6`}>
        <MegaHero
          kicker="МегаФон → Уже в России"
          title={
            <>
              Свой номер. МегаФон.{" "}
              <span className="font-bold">Без новой биометрии.</span>
            </>
          }
          subtitle="Перенос — в салоне. «Тёплый приём» для звонков домой включается сам. Тарифы от 850 ₽."
          art="promo"
          actions={
            <Button onClick={() => setDialogOpen(true)} className={mf.btnDark}>
              Подключить номер
            </Button>
          }
        />

        <section id="lead" className="scroll-mt-24">
          <MeaningTariffs
            selectedId={tariffId}
            onSelect={(id) => setTariffId(id)}
            ctaLabel="Подключить номер"
            onCta={(id) => {
              setTariffId(id);
              setDialogOpen(true);
            }}
          />

          <Reveal className="mt-4">
            <div className={`${mf.sky} p-6 sm:p-8`}>
              <p className="text-sm font-medium text-[#616C82]">Сколько выйдет в месяц</p>
              <div
                role="radiogroup"
                aria-label="Тариф"
                className="mt-4 grid grid-cols-2 gap-1.5 rounded-[16px] bg-white p-1.5 ring-2 ring-[#333]"
              >
                {catalogTariffs.map((item) => {
                  const active = item.id === tariffId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setTariffId(item.id)}
                      className={`min-h-[64px] rounded-[12px] px-3 py-3 text-left transition ${
                        active
                          ? "bg-[#00B956] text-white shadow-[0_6px_16px_rgba(0,185,86,0.35)]"
                          : "bg-[#F2F4F7] text-[#333] hover:bg-[#E4E7EE]"
                      }`}
                    >
                      <span className="block text-[16px] font-semibold leading-5 sm:text-[18px]">
                        {item.name}
                      </span>
                      <span
                        className={`mt-1 block text-[13px] font-medium ${
                          active ? "text-white/90" : "text-[#616C82]"
                        }`}
                      >
                        {item.price}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-5 text-[28px] font-semibold tracking-tight">
                {tariff.price} · {monthlyLine}
              </p>
              <p className="mt-2 text-[15px] text-[#8F96A4]">
                {tariffId === "minimum"
                  ? "Звонки и интернет на смену. Что включается само — ниже."
                  : "Безлимит и до пяти человек. Опции — ниже."}
              </p>
              <p className="mt-6 text-[15px] font-medium">
                Если переведёте деньги домой в салоне МегаФона, не в приложении
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {transferTiers.map((item, index) => (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => setTier(index)}
                    className={`rounded-[12px] px-3 py-3 text-sm font-medium ${
                      index === tier
                        ? "bg-[#333] text-white"
                        : "bg-white text-[#333] hover:bg-[#E9EBF0]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="mt-5 text-[22px] font-semibold">Бонус: {bonus.reward}</p>
              <p className="mt-2 text-[15px] text-[#8F96A4]">{specials.money[0].text}</p>
              <div className="mt-6">
                <CtaRow
                  label={`Подключить ${tariff.name}`}
                  onClick={() => setDialogOpen(true)}
                />
              </div>
            </div>
          </Reveal>
        </section>

        <MigrantProducts />

        <MegaSilaBlock />

        <section id="how">
          <h2 className={`${mf.h2} text-center`}>Как перейти</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
            Четыре шага. Новую биометрию сдавать не нужно, если российская SIM уже была.
          </p>
          <Reveal className="mt-10 flex overflow-hidden rounded-[20px] bg-white ring-1 ring-[#EDEDED] max-lg:flex-col">
            <MegaArt art="internet" className="h-[240px] lg:min-h-[380px] lg:w-[45%]" />
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
              <h3 className="text-[22px] font-semibold leading-7">
                Приходите со своим номером или возьмите новую SIM
              </h3>
              <ol className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <StepBadge n={index + 1} />
                    <div>
                      <p className="text-[15px] font-medium">{step.title}</p>
                      <p className="mt-1 text-[15px] leading-6 text-[#333]/80">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <CtaRow
                  label="Подключить номер"
                  onClick={() => setDialogOpen(true)}
                />
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-[15px] text-[#8F96A4]">
                <ArrowRightLeft className="size-4" />
                Перенос номера и бонусы за переводы — в салоне МегаФона.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="who">
          <h2 className={`${mf.h2} text-center`}>Если российская SIM уже есть</h2>
          <Reveal className="mt-8 grid gap-4 md:grid-cols-3" flip={false}>
            <article className={`${mf.sky} p-6`}>
              <IconWell>
                <Smartphone className="size-5" />
              </IconWell>
              <h3 className="mt-4 font-medium">Уже сдавали биометрию</h3>
              <p className="mt-2 text-[15px] text-[#333]/80">
                СНИЛС и Госуслуги обычно уже есть. Нужен свой номер и дешевле звонить домой.
              </p>
            </article>
            <article className={`${mf.sky} p-6`}>
              <IconWell>
                <Banknote className="size-5" />
              </IconWell>
              <h3 className="mt-4 font-medium">Переводите деньги семье</h3>
              <p className="mt-2 text-[15px] text-[#333]/80">
                Перевод в салоне МегаФона даёт минуты или месяцы связи. В приложении этот бонус не копится.
              </p>
            </article>
            <article className={`${mf.sky} p-6`}>
              <IconWell>
                <RefreshCcw className="size-5" />
              </IconWell>
              <h3 className="mt-4 font-medium">Уезжаете на сезон</h3>
              <p className="mt-2 text-[15px] text-[#333]/80">
                Номер сохраняете. Когда вернётесь на тариф — +20 ГБ до 6 месяцев.
              </p>
            </article>
          </Reveal>
        </section>

        <section id="faq">
          <h2 className={`${mf.h2} text-center`}>Частые вопросы</h2>
          <Accordion className="mt-8">
            {faq.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`h-${index}`}
                className="border-b border-[#EDEDED]"
              >
                <AccordionTrigger className="py-5 text-[16px] font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#333]/80">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 bg-white p-3 shadow-[0_-8px_24px_rgba(51,51,51,0.08)] sm:hidden">
        <Button onClick={() => setDialogOpen(true)} className={`w-full ${mf.btnDark}`}>
          Подключить номер
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Подключить номер</DialogTitle>
            <DialogDescription>
              Перезвоним: как перенести номер в салоне и какой тариф взять.
            </DialogDescription>
          </DialogHeader>
          <CallbackForm
            key={tariffId}
            compact
            defaultTariff={tariffId}
            idPrefix="here-next-dialog"
            tariffChoices={formTariffs}
            submitLabel="Подключить номер"
          />
        </DialogContent>
      </Dialog>
    </LandingChrome>
  );
}
