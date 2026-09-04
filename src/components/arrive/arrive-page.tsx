"use client";

import { useState } from "react";
import {
  Building2,
  Check,
  FileText,
  Fingerprint,
  Mail,
  ShieldCheck,
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
import { ProductTariffs, SpecialProducts } from "@/components/landings/products";
import { formTariffs } from "@/lib/products";

const docs = [
  {
    icon: FileText,
    title: "Паспорт и перевод",
    text: "Оригинал паспорта и нотариально заверенный перевод на русский.",
  },
  {
    icon: Mail,
    title: "Электронная почта",
    text: "Нужна для Госуслуг и уведомления об активации SIM.",
  },
  {
    icon: Building2,
    title: "Документ о пребывании",
    text: "Миграционная карта, виза, регистрация или ВНЖ — что уже есть.",
  },
];

const steps = [
  {
    title: "Подготовьте документы",
    text: "Паспорт с переводом, почта и документ о пребывании. Без перевода салон и МФЦ вас развернут.",
  },
  {
    title: "Получите СНИЛС",
    text: "СФР, МФЦ или работодатель. Это не миграционная процедура: можно сделать параллельно с учётом и патентом. Обычно в тот же день, редко до 5 дней.",
  },
  {
    title: "Подтвердите Госуслуги",
    text: "В МФЦ или банке. Нужны паспорт с переводом, СНИЛС и почта. Учётную запись подтверждают в день визита.",
  },
  {
    title: "Сдайте биометрию",
    text: "Лицо и голос в уполномоченном банке или в салоне, где есть терминал. Статус появится на Госуслугах.",
  },
  {
    title: "Оформите SIM в салоне МегаФон",
    text: "Очно, с IMEI телефона. На одного человека — не больше 10 номеров у всех операторов. «Тёплый приём» включится сам.",
  },
];

const why = [
  {
    title: "Честная инструкция, не «паспорт и 15 минут»",
    text: "У Сбера и МТС цепочка уже на сайте. Мы показываем те же шаги и не обещаем невозможное.",
  },
  {
    title: "«Тёплый приём» сам",
    text: "Выгодные звонки в СНГ и Китай подключаются всем нерезидентам. Не надо искать скрытую опцию.",
  },
  {
    title: "Без скрытых подписок",
    text: "В исследованиях скрытые списания называют обманом. Подтверждение платной услуги — обязательно.",
  },
  {
    title: "Языки, на которых вы говорите",
    text: "Русский, таджикский, узбекский, киргизский — не прячем инструкцию в «поддержке».",
  },
];

const faq = [
  {
    q: "Можно ли всё за одно посещение, как у СберМобайла?",
    a: "Да, если идёте в точку, где делают СНИЛС, Госуслуги и биометрию вместе — часто это банк. Потом салон МегаФон с уже готовой цепочкой. В части салонов биометрию снимают на месте.",
  },
  {
    q: "Я из Кыргызстана. Патент тоже нужен?",
    a: "Нет. По ЕАЭС работаете по договору. Но СНИЛС, Госуслуги, биометрия и IMEI для российской SIM всё равно обязательны.",
  },
  {
    q: "Сколько SIM можно оформить?",
    a: "Не больше 10 номеров на человека у всех операторов суммарно.",
  },
];

export function ArrivePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tariff, setTariff] = useState("family");

  function openLead(id = "family") {
    setTariff(id);
    setDialogOpen(true);
  }

  return (
    <LandingChrome current="arrive">
      <main>
        <section className="bg-[#07150d] text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-[#9dffc2]">
              Только приехали · первая SIM в России
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Сначала легализация.{" "}
              <span className="text-[#00B956]">Потом связь МегаФон.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              С 2025 года иностранцу нельзя купить SIM только по паспорту. Как у
              СберМобайла: СНИЛС, Госуслуги, биометрия — и только потом договор.
              Когда документы готовы, МегаФон даёт минуты домой, интернет на
              работу и перевод без лишней кассы.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#legal" />}
                className="h-12 rounded-full bg-[#00B956] px-6 text-base font-semibold text-white hover:bg-[#00a34c]"
              >
                Как оформить документы
              </Button>
              <Button
                render={<a href="#why" />}
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                Почему МегаФон
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Что взять с собой
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Тот же набор, что просят Сбер и Госуслуги. Без этого салон МегаФон
            договор не подпишет.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {docs.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 ring-1 ring-black/5"
              >
                <item.icon className="size-6 text-[#00B956]" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="legal" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Как легализоваться и получить SIM
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Пять шагов. Можно начать в МФЦ или банке, закончить в салоне.
              Узбекистан и Таджикистан параллельно делают патент. Кыргызстан —
              договор без патента, но SIM-цепочка та же.
            </p>
            <ol className="mt-10 space-y-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 rounded-3xl bg-[#f3faf5] p-5 ring-1 ring-black/5 sm:grid-cols-[auto_1fr] sm:p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[#07150d] text-lg font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-[#d7eadc] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#00B956]">
                  Узбекистан · Таджикистан
                </p>
                <h3 className="mt-2 text-lg font-semibold">Патентный путь</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  15 дней на учёт, 30 на патент, ММЦ Сахарово. SIM можно вести
                  параллельно: СНИЛС не зависит от патента.
                </p>
              </article>
              <article className="rounded-3xl border border-[#d7eadc] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#00B956]">
                  Кыргызстан · ЕАЭС
                </p>
                <h3 className="mt-2 text-lg font-semibold">Договор без патента</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  30 суток на учёт. Не откладывайте СНИЛС: без него салон всё
                  равно откажет.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Когда документы готовы — почему МегаФон
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

        <ProductTariffs onPick={openLead} />
        <SpecialProducts />

        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Частые вопросы
          </h2>
          <Accordion className="mt-6 rounded-3xl bg-white px-5 ring-1 ring-black/5">
            {faq.map((item, index) => (
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
        </section>

        <LeadBlock
          title="Подскажем, куда идти за СНИЛС и в какой салон"
          lead="Оставьте номер. Перезвоним, скажем, что взять и где сдать биометрию рядом с вами."
          tariff={tariff}
        />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/5 bg-white p-3 sm:hidden">
        <Button
          onClick={() => openLead()}
          className="h-12 w-full rounded-full bg-[#00B956] text-base font-semibold text-white hover:bg-[#00a34c]"
        >
          Оставить заявку
        </Button>
      </div>

      <LeadDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        tariff={tariff}
        title="Заявка на первую SIM"
        lead="Подготовим визит: документы и ближайший салон."
      />
    </LandingChrome>
  );
}

function LeadBlock({
  title,
  lead,
  tariff,
}: {
  title: string;
  lead: string;
  tariff: string;
}) {
  return (
    <section id="lead" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-6 ring-1 ring-black/5 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {lead}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <UserRound className="mt-0.5 size-4 text-[#00B956]" />
              Помогаем с маршрутом МФЦ / банк / салон
            </li>
            <li className="flex gap-2">
              <Fingerprint className="mt-0.5 size-4 text-[#00B956]" />
              Не обещаем SIM без биометрии
            </li>
            <li className="flex gap-2">
              <Smartphone className="mt-0.5 size-4 text-[#00B956]" />
              «Тёплый приём» включится сам
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 text-[#00B956]" />
              Демозаявка, консультант в этой среде не звонит
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
  );
}

function LeadDialog({
  open,
  onOpenChange,
  tariff,
  title,
  lead,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tariff: string;
  title: string;
  lead: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription>{lead}</DialogDescription>
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
  );
}
