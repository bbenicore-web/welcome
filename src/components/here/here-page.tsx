"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  Ban,
  PhoneCall,
  RefreshCcw,
  ShieldCheck,
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
import { ProductTariffs, SpecialProducts } from "@/components/landings/products";
import { formTariffs } from "@/lib/products";

const barriers = [
  {
    icon: PhoneCall,
    pain: "Дорогие звонки домой",
    product: "«Тёплый приём» сам + пакет 100 международных минут",
  },
  {
    icon: Wifi,
    pain: "Видео и мессенджеры едят пакет, привычный Telegram режут",
    product: "Семейный +: безлимит на работу, видео и доступные в РФ мессенджеры",
  },
  {
    icon: Wallet,
    pain: "Комиссия за перевод и «пустой» месяц после него",
    product: "Бонусы за переводы в салоне: минуты или месяцы связи бесплатно",
  },
  {
    icon: Ban,
    pain: "Скрытые списания и навязанные услуги",
    product: "Подтверждение любой платной услуги. Без сюрпризов на балансе",
  },
  {
    icon: RefreshCcw,
    pain: "Номер сгорает, если уехать на сезон",
    product: "+20 ГБ за возврат на тариф и сохранение номера до следующего круга",
  },
  {
    icon: Users,
    pain: "Семья на нескольких номерах, каждый платит своё",
    product: "МегаСемья на Семейном +: до 5 человек на одном тарифе",
  },
];

const why = [
  {
    title: "Биометрию заново сдавать не надо",
    text: "Если вы уже абонент другого оператора, СНИЛС и ЕБС у вас есть. Переход в МегаФон короче, чем первая SIM. Это прямо заложено в бизнес-требованиях.",
  },
  {
    title: "Отдельная страница, не «поддержка»",
    text: "У МТС и Сбера тариф и инструкция на одном экране. У нас тоже: языки, продукты и переход со своим номером — не на седьмом клике.",
  },
  {
    title: "Автоматические плюшки, не мелкий шрифт",
    text: "«Тёплый приём», бонусы за перевод в салоне, +10 ГБ за оплату вовремя. Не нужно охотиться за акцией.",
  },
  {
    title: "Честный разговор про барьеры",
    text: "Блокировки мессенджеров, IMEI, лимит 10 номеров — говорим как есть. Не обещаем «как дома».",
  },
];

const mnp = [
  {
    title: "Проверьте, что биометрия жива",
    text: "Статус — на Госуслугах. Если волна блокировок вас не задела, в салон идёте сразу.",
  },
  {
    title: "Приходите с паспортом и своим номером",
    text: "Перенос к МегаФону. IMEI текущего телефона. Лимит 10 номеров общий — проверим на месте.",
  },
  {
    title: "Включаем тариф и спецпродукты",
    text: "Семейный + или Минимум +. «Тёплый приём» сам. 100 международных минут — по желанию.",
  },
];

const faq = [
  {
    q: "Нужно ли заново делать СНИЛС и Госуслуги?",
    a: "Нет, если вы уже оформляли российскую SIM. Повторно — только если сменился паспорт и данные разъехались, или биометрию не приняли.",
  },
  {
    q: "Можно ли оставить свой номер?",
    a: "Да. Переход со своим номером — основной сценарий этой страницы. В салоне скажут срок переноса.",
  },
  {
    q: "Что будет, если уеду домой на зиму?",
    a: "Номер можно сохранить. Когда вернётесь, сработает +20 ГБ за повторное пользование тарифом — как раз для сезонников из Узбекистана.",
  },
];

export function HerePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tariff, setTariff] = useState("family");

  function openLead(id = "family") {
    setTariff(id);
    setDialogOpen(true);
  }

  return (
    <LandingChrome current="here">
      <main>
        <section className="bg-[#07150d] text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-[#9dffc2]">
              Уже в России · переход с другого оператора
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Вы уже здесь.{" "}
              <span className="text-[#00B956]">МегаФон закрывает барьеры, не бюрократию.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              СНИЛС и биометрия у вас есть — повторять цепочку не нужно. Ниже —
              почему уходить к МегаФону выгоднее, чем оставаться, и какие
              продукты бьют в звонки домой, переводы, семью и сезонный отъезд.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => openLead()}
                className="h-12 rounded-full bg-[#00B956] px-6 text-base font-semibold text-white hover:bg-[#00a34c]"
              >
                Перейти со своим номером
              </Button>
              <Button
                render={<a href="#barriers" />}
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                Какие барьеры закрываем
              </Button>
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Почему МегаФон, а не тот оператор, что уже в телефоне
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {why.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 ring-1 ring-black/5"
              >
                <ShieldCheck className="size-6 text-[#00B956]" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="barriers" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Барьер → продукт
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Как в исследованиях МТС: не общие «гигабайты», а закрытие конкретной
              боли оседлых и сезонников на втором круге.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {barriers.map((item) => (
                <article
                  key={item.pain}
                  className="flex gap-4 rounded-3xl bg-[#f3faf5] p-5 ring-1 ring-black/5"
                >
                  <item.icon className="mt-0.5 size-6 shrink-0 text-[#00B956]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Боль
                    </p>
                    <h3 className="mt-1 font-semibold">{item.pain}</h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#00B956]">
                      Продукт
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.product}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProductTariffs onPick={openLead} />
        <SpecialProducts />

        <section id="mnp" className="bg-[#07150d] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Как перейти, если SIM уже есть
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Короче, чем первая легализация. Не путайте с страницей «только
              приехал».
            </p>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {mnp.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-sm font-semibold text-[#9dffc2]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
              <ArrowRightLeft className="size-4" />
              Перенос номера — в салоне. Заявка ниже, чтобы подготовить визит.
            </p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
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

        <section id="lead" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-6 ring-1 ring-black/5 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Перезвоним и скажем, можно ли перенести номер завтра
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Для тех, кто уже живёт в России. Не будем гонять по МФЦ, если
                биометрия уже в системе.
              </p>
            </div>
            <CallbackForm
              defaultTariff={tariff}
              idPrefix="here-lead"
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
          Перейти со своим номером
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Переход в МегаФон</DialogTitle>
            <DialogDescription>
              Свой номер, готовая биометрия, тариф под барьеры.
            </DialogDescription>
          </DialogHeader>
          <CallbackForm
            key={tariff}
            compact
            defaultTariff={tariff}
            idPrefix="here-dialog"
            tariffChoices={formTariffs}
          />
        </DialogContent>
      </Dialog>
    </LandingChrome>
  );
}
