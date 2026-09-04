"use client";

import { useMemo, useState } from "react";
import {
  ArrowRightLeft,
  Banknote,
  Check,
  Gift,
  Globe2,
  PhoneCall,
  RefreshCcw,
  Smartphone,
  Users,
  Wallet,
  Wifi,
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
import { catalogTariffs, formTariffs, specials } from "@/lib/products";

const transferTiers = [
  { amount: 30_000, label: "30 000 ₽", reward: "50 международных минут" },
  { amount: 50_000, label: "50 000 ₽", reward: "месяц связи бесплатно" },
  { amount: 70_000, label: "70 000 ₽", reward: "три месяца связи" },
  { amount: 100_000, label: "100 000 ₽", reward: "полгода связи" },
] as const;

const perks = [
  { icon: Gift, ...specials.calls[0] },
  { icon: PhoneCall, ...specials.calls[1] },
  { icon: Globe2, ...specials.calls[2] },
  { icon: Banknote, ...specials.money[0] },
  { icon: Wallet, ...specials.money[1] },
  { icon: Wifi, ...specials.data[0] },
  { icon: RefreshCcw, ...specials.data[1] },
  {
    icon: Users,
    name: "МегаСемья",
    how: "На тарифе «Семейный +»",
    text: "Делить тариф до 5 человек. Видеосервисы, ТВ, соцсети и сайты страны, откуда вы приехали — без страха, что пакет кончится.",
  },
];

const steps = [
  {
    title: "Оставьте заявку",
    text: "Имя, телефон, город. Займёт пару минут — заполнить можно с телефона.",
  },
  {
    title: "Проверьте биометрию",
    text: "Если российская SIM уже есть, СНИЛС и ЕБС обычно уже в системе. Статус — на Госуслугах. Повторно сдавать не нужно.",
  },
  {
    title: "Приходите в салон со своим номером",
    text: "Паспорт и текущая SIM. IMEI телефона. Общий лимит — 10 номеров. Перенос делают в салоне, не в приложении.",
  },
  {
    title: "Включаем тариф и опции",
    text: "«Минимум +» или «Семейный +». «Тёплый приём» сам. 100 международных минут и «Звони во все страны» — по желанию.",
  },
];

const faq = [
  {
    q: "Нужно ли заново делать СНИЛС и Госуслуги?",
    a: "Нет, если вы уже оформляли российскую SIM. Повторно — только если сменился паспорт или биометрию не приняли.",
  },
  {
    q: "Можно ли оставить свой номер?",
    a: "Да. Переходите на МегаФон со своим номером — срок переноса скажут в салоне.",
  },
  {
    q: "Что входит в «Минимум +»?",
    a: "Базовый тариф: от 850 ₽ за 30 дней (Москва, с НДС), 400 минут по России, интернет в пакете на карты, такси и мессенджеры, безлимит на МегаФон России когда минуты закончились. Автоматически +10 ГБ, если платите вовремя. «Тёплый приём» для нерезидентов подключается сам. 100 международных минут можно докупить.",
  },
  {
    q: "Что входит в «Семейный +»?",
    a: "Максимальный тариф: от 1 140 ₽ за 30 дней, 1 500 минут по России, безлимитный интернет, МегаСемья до 5 человек. Хватает на Яндекс Go, навигацию, склады, видеосервисы, ТВ, соцсети и национальные сайты страны, откуда вы приехали. Общение с близкими в доступных в РФ мессенджерах.",
  },
  {
    q: "Как работают бонусы за переводы?",
    a: "Только при переводе в салоне МегаФона, не в приложении. От 30 000 ₽ — 50 международных минут. От 50 000 ₽ — месяц связи. От 70 000 ₽ — три месяца. От 100 000 ₽ — полгода.",
  },
  {
    q: "Что будет, если уеду домой на зиму?",
    a: "Номер можно сохранить. Когда вернётесь и снова пользуетесь тарифом, капает +20 ГБ до 6 месяцев в день списания платы.",
  },
];

export function HerePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tariffId, setTariffId] = useState<(typeof catalogTariffs)[number]["id"]>(
    "family",
  );
  const [tier, setTier] = useState(1);

  const tariff = catalogTariffs.find((item) => item.id === tariffId) ?? catalogTariffs[1];
  const bonus = transferTiers[tier];
  const extraGb = tariffId === "minimum" ? "+10 ГБ" : "безлимит";

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
              Переходите на МегаФон.{" "}
              <span className="font-bold">Номер остаётся вашим.</span>
            </>
          }
          subtitle="Биометрию заново сдавать не надо. Тарифы «Минимум +» и «Семейный +», бонусы за переводы домой. Перенос номера — в салоне."
          art="promo"
          actions={
            <Button onClick={() => setDialogOpen(true)} className={mf.btnDark}>
              Оставить заявку
            </Button>
          }
        />

        <section id="lead" className="scroll-mt-24">
          <h2 className={`${mf.h2} text-center`}>Выберите формат связи</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
            Два тарифа на выбор. Базовый — «Минимум +». Максимальный — «Семейный +».
          </p>
          <Reveal className="mt-10 space-y-4">
            {catalogTariffs.map((item) => {
              const popular = "popular" in item && item.popular;
              const active = item.id === tariffId;
              return (
                <div
                  key={item.id}
                  className={active ? "rounded-[22px] ring-2 ring-[#333]" : ""}
                >
                  <ProfileCard
                    title={item.name}
                    subtitle={item.extra}
                    tag={item.level}
                    badges={[item.minutes, item.data]}
                    price={item.price}
                    cta={active ? "Оставить заявку" : "Выбрать"}
                    onCta={() => {
                      setTariffId(item.id);
                      setDialogOpen(true);
                    }}
                    art={popular ? "promo" : "base"}
                  />
                </div>
              );
            })}
          </Reveal>

          <Reveal className="mt-4">
            <div className={`${mf.sky} p-6 sm:p-8`}>
              <p className="text-sm font-medium text-[#616C82]">Калькулятор тарифа</p>
              <p className="mt-2 text-[28px] font-semibold tracking-tight">
                {tariff.price} · {monthlyLine}
              </p>
              <p className="mt-2 text-[15px] text-[#8F96A4]">
                Интернет: {extraGb}. Дополнительные опции ниже подключаются
                отдельно.
              </p>
              <p className="mt-6 text-[15px] font-medium">
                Если переведёте домой в салоне МегаФона (не в приложении)
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
                  label={`Хочу ${tariff.name}`}
                  onClick={() => setDialogOpen(true)}
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section id="perks">
          <h2 className={`${mf.h2} text-center`}>Это вам понравится</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
            Дополнительные опции к тарифу. Где написано «сам» — подключается
            автоматически, без акций и заявок.
          </p>
          <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" flip={false}>
            {perks.map((item) => (
              <article key={item.name} className={`${mf.sky} p-5`}>
                <IconWell>
                  <item.icon className="size-5" />
                </IconWell>
                <h3 className="mt-4 font-medium">{item.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#616C82]">
                  {item.how}
                </p>
                <p className="mt-2 text-[15px] leading-6 text-[#333]/80">{item.text}</p>
              </article>
            ))}
          </Reveal>
        </section>

        <section id="tariffs">
          <h2 className={`${mf.h2} text-center`}>Что входит в тарифы</h2>
          <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
            {catalogTariffs.map((item) => {
              const popular = "popular" in item && item.popular;
              return (
                <article key={item.id} className={`${mf.sky} p-6`}>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#616C82]">
                    {item.level}
                  </p>
                  <h3 className="mt-1 text-[22px] font-semibold">{item.name}</h3>
                  <p className="mt-4 text-[32px] font-bold">{item.price}</p>
                  <ul className="mt-5 space-y-2 text-[15px]">
                    {[item.minutes, item.data, item.extra, ...item.points].map(
                      (line) => (
                        <li key={line} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-[#00B956]" />
                          {line}
                        </li>
                      ),
                    )}
                  </ul>
                  {popular ? (
                    <p className="mt-4 text-[15px] text-[#333]/80">
                      Под работу: Яндекс Go, навигация, склады. Под семью:
                      видео, мессенджеры, национальные приложения.
                    </p>
                  ) : null}
                  <Button
                    onClick={() => {
                      setTariffId(item.id);
                      setDialogOpen(true);
                    }}
                    className={`mt-6 w-full ${mf.btnLine}`}
                  >
                    Оставить заявку
                  </Button>
                </article>
              );
            })}
          </Reveal>
        </section>

        <section id="how">
          <h2 className={`${mf.h2} text-center`}>Как подключить</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[#8F96A4]">
            Всего четыре шага — быстрее, чем оформление первой SIM.
          </p>
          <Reveal className="mt-10 flex overflow-hidden rounded-[20px] bg-white ring-1 ring-[#EDEDED] max-lg:flex-col">
            <MegaArt art="internet" className="h-[240px] lg:min-h-[380px] lg:w-[45%]" />
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
              <h3 className="text-[22px] font-semibold leading-7">
                Перенесите номер или закажите новую сим-карту
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
                  label="Оставить заявку"
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
          <h2 className={`${mf.h2} text-center`}>Кому это нужно</h2>
          <Reveal className="mt-8 grid gap-4 md:grid-cols-3" flip={false}>
            <article className={`${mf.sky} p-6`}>
              <IconWell>
                <Smartphone className="size-5" />
              </IconWell>
              <h3 className="mt-4 font-medium">Уже есть российская SIM</h3>
              <p className="mt-2 text-[15px] text-[#333]/80">
                СНИЛС и биометрия сданы. Нужен свой номер, дешевле звонить домой
                и не ловить скрытые списания.
              </p>
            </article>
            <article className={`${mf.sky} p-6`}>
              <IconWell>
                <Banknote className="size-5" />
              </IconWell>
              <h3 className="mt-4 font-medium">Переводите деньги семье</h3>
              <p className="mt-2 text-[15px] text-[#333]/80">
                Перевод в салоне МегаФона даёт минуты или месяцы связи. В
                приложении этот бонус не копится.
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
          <h2 className={`${mf.h2} text-center`}>Остались вопросы?</h2>
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
          Оставить заявку
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Переход в МегаФон</DialogTitle>
            <DialogDescription>
              Свой номер, готовая биометрия, тариф на выбор.
            </DialogDescription>
          </DialogHeader>
          <CallbackForm
            key={tariffId}
            compact
            defaultTariff={tariffId}
            idPrefix="here-dialog"
            tariffChoices={formTariffs}
            submitLabel="Оставить заявку"
          />
        </DialogContent>
      </Dialog>
    </LandingChrome>
  );
}
