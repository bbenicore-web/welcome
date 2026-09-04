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
import { Reveal } from "@/components/motion/reveal";
import { catalogTariffs, formTariffs, specials } from "@/lib/products";

const transferTiers = [
  { amount: 30_000, label: "30 000 ₽", reward: "50 международных минут" },
  { amount: 50_000, label: "50 000 ₽", reward: "месяц связи бесплатно" },
  { amount: 70_000, label: "70 000 ₽", reward: "три месяца связи" },
  { amount: 100_000, label: "100 000 ₽", reward: "полгода связи" },
] as const;

const perks = [
  {
    icon: Gift,
    ...specials.calls[0],
  },
  {
    icon: PhoneCall,
    ...specials.calls[1],
  },
  {
    icon: Globe2,
    ...specials.calls[2],
  },
  {
    icon: Banknote,
    ...specials.money[0],
  },
  {
    icon: Wallet,
    ...specials.money[1],
  },
  {
    icon: Wifi,
    ...specials.data[0],
  },
  {
    icon: RefreshCcw,
    ...specials.data[1],
  },
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
      <main>
        <section className="bg-[#111] text-white">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-[#00B956] px-3 py-1 text-sm font-semibold text-white">
                Уже в России · свой номер
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Переходите на МегаФон.{" "}
                <span className="text-[#9dffc2]">Номер остаётся вашим.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Оставьте заявку — перезвоним и поможем перенести номер.
                Биометрию заново сдавать не надо. Тарифы «Минимум +» и
                «Семейный +», бонусы за переводы домой.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-3 text-center sm:text-left">
                <div className="rounded-2xl bg-white/5 p-3">
                  <dt className="text-xs text-white/55">Базовый</dt>
                  <dd className="mt-1 text-xl font-semibold">от 850 ₽</dd>
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <dt className="text-xs text-white/55">Максимальный</dt>
                  <dd className="mt-1 text-xl font-semibold">от 1 140 ₽</dd>
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <dt className="text-xs text-white/55">Перенос</dt>
                  <dd className="mt-1 text-xl font-semibold">свой номер</dd>
                </div>
              </dl>
            </div>
            <div
              id="lead"
              className="rounded-[1.75rem] bg-white p-5 text-foreground shadow-xl sm:p-7"
            >
              <p className="text-xl font-semibold">Оставьте заявку</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Перезвоним и скажем, можно ли перенести номер в вашем салоне.
              </p>
              <div className="mt-5">
                <CallbackForm
                  hero
                  defaultTariff={tariffId}
                  idPrefix="here-hero"
                  tariffChoices={formTariffs}
                  submitLabel="Оставить заявку"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Перезвоним в рабочие часы. Звонок бесплатный.
              </p>
            </div>
          </div>
        </section>

        <section id="formats" className="bg-[#f6f7f2] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Выберите формат связи
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Два тарифа на выбор. Базовый — «Минимум +». Максимальный —
              «Семейный +».
            </p>
            <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
              {catalogTariffs.map((item) => {
                const active = item.id === tariffId;
                const popular = "popular" in item && item.popular;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTariffId(item.id)}
                    className={`rounded-[1.75rem] p-6 text-left ring-2 transition ${
                      active
                        ? "bg-[#111] text-white ring-[#00B956]"
                        : "bg-white text-foreground ring-transparent hover:ring-[#00B956]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          active ? "text-[#9dffc2]" : "text-[#00B956]"
                        }`}
                      >
                        {item.level}
                      </p>
                      {popular ? (
                        <span className="rounded-full bg-[#00B956] px-2 py-0.5 text-xs font-semibold text-white">
                          Чаще берут
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-2xl font-semibold">{item.name}</p>
                    <p className="mt-3 text-4xl font-semibold">
                      {item.price}
                      <span
                        className={`ml-2 text-base font-normal ${
                          active ? "text-white/55" : "text-muted-foreground"
                        }`}
                      >
                        / 30 дней
                      </span>
                    </p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {[item.minutes, item.data, item.extra].map((line) => (
                        <li key={line} className="flex gap-2">
                          <Check
                            className={`mt-0.5 size-4 shrink-0 ${
                              active ? "text-[#9dffc2]" : "text-[#00B956]"
                            }`}
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </Reveal>

            <Reveal className="mt-8">
            <div className="overflow-hidden rounded-[1.75rem] bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#00B956]">
                Калькулятор тарифа
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">
                {tariff.price} · {monthlyLine}
              </p>
              <p className="mt-2 text-muted-foreground">
                Интернет: {extraGb}. Дополнительные опции ниже подключаются
                отдельно.
              </p>
              <p className="mt-6 text-sm font-medium">
                Если переведёте домой в салоне МегаФона (не в приложении)
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {transferTiers.map((item, index) => (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => setTier(index)}
                    className={`rounded-2xl px-3 py-3 text-sm font-semibold ring-1 ${
                      index === tier
                        ? "bg-[#00B956] text-white ring-[#00B956]"
                        : "bg-[#f6f7f2] ring-black/5 hover:ring-[#00B956]/40"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="mt-5 text-2xl font-semibold">
                Бонус: {bonus.reward}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {specials.money[0].text}
              </p>
              <Button
                onClick={() => setDialogOpen(true)}
                className="mt-6 h-12 rounded-full bg-[#00B956] px-6 font-semibold text-white hover:bg-[#00a34c]"
              >
                Хочу {tariff.name}
              </Button>
            </div>
            </Reveal>
          </div>
        </section>

        <section id="perks" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Это вам понравится
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Дополнительные опции к тарифу. Где написано «сам» — подключается
              автоматически, без акций и заявок.
            </p>
            <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" flip={false}>
              {perks.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.5rem] bg-[#f6f7f2] p-5"
                >
                  <item.icon className="size-6 text-[#00B956]" />
                  <h3 className="mt-4 font-semibold">{item.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#00B956]">
                    {item.how}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="tariffs" className="bg-[#f6f7f2] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Что входит в тарифы
            </h2>
            <Reveal className="mt-8 grid gap-5 lg:grid-cols-2">
              {catalogTariffs.map((item) => {
                const popular = "popular" in item && item.popular;
                return (
                  <article
                    key={item.id}
                    className="rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#00B956]">
                      {item.level}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold">{item.name}</h3>
                    <p className="mt-4 text-3xl font-semibold">{item.price}</p>
                    <ul className="mt-5 space-y-2 text-sm">
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
                      <p className="mt-4 text-sm text-muted-foreground">
                        Под работу: Яндекс Go, навигация, склады. Под семью:
                        видео, мессенджеры, национальные приложения.
                      </p>
                    ) : null}
                    <Button
                      onClick={() => {
                        setTariffId(item.id);
                        setDialogOpen(true);
                      }}
                      className="mt-6 h-11 w-full rounded-full bg-[#111] font-semibold text-white hover:bg-black"
                    >
                      Оставить заявку
                    </Button>
                  </article>
                );
              })}
            </Reveal>
          </div>
        </section>

        <section id="how" className="bg-[#111] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Как перейти
            </h2>
            <p className="mt-3 max-w-2xl text-white/65">
              Всего четыре шага — быстрее, чем оформление первой SIM.
            </p>
            <Reveal as="ol" className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" flip={false}>
              {steps.map((step, index) => (
                <li key={step.title} className="rounded-[1.5rem] bg-white/5 p-5">
                  <span className="text-sm font-semibold text-[#9dffc2]">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.text}
                  </p>
                </li>
              ))}
            </Reveal>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/55">
              <ArrowRightLeft className="size-4" />
              Перенос номера и бонусы за переводы — в салоне МегаФона.
            </p>
          </div>
        </section>

        <section id="who" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Кому это нужно
          </h2>
          <Reveal className="mt-8 grid gap-4 md:grid-cols-3" flip={false}>
            <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5">
              <Smartphone className="size-6 text-[#00B956]" />
              <h3 className="mt-4 font-semibold">Уже есть российская SIM</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                СНИЛС и биометрия сданы. Нужен свой номер, дешевле звонить домой
                и не ловить скрытые списания.
              </p>
            </article>
            <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5">
              <Banknote className="size-6 text-[#00B956]" />
              <h3 className="mt-4 font-semibold">Переводите деньги семье</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Перевод в салоне МегаФона даёт минуты или месяцы связи. В
                приложении этот бонус не копится.
              </p>
            </article>
            <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5">
              <RefreshCcw className="size-6 text-[#00B956]" />
              <h3 className="mt-4 font-semibold">Уезжаете на сезон</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Номер сохраняете. Когда вернётесь на тариф — +20 ГБ до 6 месяцев.
              </p>
            </article>
          </Reveal>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Частые вопросы
          </h2>
          <Accordion className="mt-6 rounded-3xl bg-white px-5 ring-1 ring-black/5">
            {faq.map((item, index) => (
              <AccordionItem key={item.q} value={`h-${index}`}>
                <AccordionTrigger className="py-4 text-base hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/5 bg-[#111] p-3 sm:hidden">
        <Button
          render={<a href="#lead" />}
          className="h-12 w-full rounded-full bg-[#00B956] text-base font-semibold text-white hover:bg-[#00a34c]"
        >
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
