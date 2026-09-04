"use client";

import { useState } from "react";
import {
  Briefcase,
  Building2,
  CircleAlert,
  Home,
  Plane,
  Smartphone,
  Store,
  Truck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MegafonMark } from "@/components/landing/logo";
import {
  jobMix,
  journeys,
  painMatrix,
  segments,
  type JourneyId,
} from "@/lib/cjm-data";

const segmentIcons = {
  build: Building2,
  warehouse: Truck,
  market: Store,
  service: UtensilsCrossed,
  settled: Users,
} as const;

export function CjmPage() {
  const [journeyId, setJourneyId] = useState<JourneyId>("patent");
  const journey = journeys.find((item) => item.id === journeyId) ?? journeys[0];

  return (
    <div className="min-h-full bg-[#f3faf5] text-foreground">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="/" className="inline-flex items-center gap-2 font-semibold">
            <MegafonMark className="size-8 text-[#00B956]" />
            <span className="flex flex-col leading-none">
              <span className="text-[15px] tracking-tight">МегаФон</span>
              <span className="text-[11px] font-medium text-[#00B956]">
                Сегменты и CJM
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium sm:flex">
            <a href="#segments" className="text-foreground/70 hover:text-foreground">
              Сегменты
            </a>
            <a href="#jobs" className="text-foreground/70 hover:text-foreground">
              Работы
            </a>
            <a href="#pains" className="text-foreground/70 hover:text-foreground">
              Боли
            </a>
            <a href="#cjm" className="text-foreground/70 hover:text-foreground">
              Пути
            </a>
          </nav>
          <Button
            render={<a href="/migranty-cjm.pdf" download />}
            className="h-10 rounded-full bg-[#00B956] px-4 font-semibold text-white hover:bg-[#00a34c]"
          >
            Скачать PDF
          </Button>
        </div>
      </header>

      <main>
        <section className="bg-[#07150d] text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-[#9dffc2]">
              По исследованиям · Узбекистан, Таджикистан, Кыргызстан
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              От дома до смены в России:{" "}
              <span className="text-[#00B956]">кто едет и где ломается путь</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              82% рабочих въездов дают три страны. Дальше люди делятся не по
              флагу, а по работе, сроку пребывания и юридической развилке:
              патент или ЕАЭС. Ниже — сегменты, боли и три CJM от сборов дома
              до ассимиляции и возврата.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="/migranty-cjm.pdf" download />}
                className="h-12 rounded-full bg-[#00B956] px-6 text-base font-semibold text-white hover:bg-[#00a34c]"
              >
                Скачать PDF
              </Button>
              <Button
                render={<a href="/cjm/print" />}
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                Полный документ
              </Button>
            </div>
          </div>
        </section>

        <section id="segments" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Пять сегментов
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Страна задаёт правила въезда. Работа задаёт, что болит в первый
            месяц. Срок пребывания — вернётся ли человек за тем же номером.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {segments.map((segment) => {
              const Icon =
                segmentIcons[segment.id as keyof typeof segmentIcons] ?? Briefcase;
              return (
                <article
                  key={segment.id}
                  className="rounded-3xl bg-white p-6 ring-1 ring-black/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-2xl bg-[#e5f7ec] text-[#00B956]">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">{segment.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {segment.countries}
                        </p>
                      </div>
                    </div>
                    <Badge className="border-transparent bg-[#07150d] text-white">
                      {segment.tag}
                    </Badge>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {segment.share}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {segment.jobs.map((job) => (
                      <li
                        key={job}
                        className="rounded-full bg-[#f3faf5] px-3 py-1 text-xs font-medium"
                      >
                        {job}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium">{segment.legal}</p>
                  <ul className="mt-3 space-y-2">
                    {segment.pains.map((pain) => (
                      <li
                        key={pain}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CircleAlert className="mt-0.5 size-4 shrink-0 text-[#00B956]" />
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Где искать: {segment.where}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="jobs" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Работа: одна Москва, три профиля
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Опрос 2 774 работающих мигрантов, Москва, осень 2023. Узбекистан и
              Таджикистан — стройка. Кыргызстан — торговля и логистика.
            </p>
            <div className="mt-8 overflow-x-auto rounded-3xl ring-1 ring-black/5">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead className="bg-[#07150d] text-white">
                  <tr>
                    <th className="px-5 py-3 font-medium">Отрасль</th>
                    <th className="px-5 py-3 font-medium">Узбекистан</th>
                    <th className="px-5 py-3 font-medium">Таджикистан</th>
                    <th className="px-5 py-3 font-medium">Кыргызстан</th>
                  </tr>
                </thead>
                <tbody>
                  {jobMix.map((row) => (
                    <tr key={row.job} className="border-t border-black/5">
                      <td className="px-5 py-3 font-medium">{row.job}</td>
                      <td className="px-5 py-3">{row.uz}</td>
                      <td className="px-5 py-3">{row.tj}</td>
                      <td className="px-5 py-3">{row.kg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="pains" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Боли по этапам приезда и ассимиляции
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Общие для всех трёх стран. Юридическая развилка (патент / ЕАЭС)
            меняет сроки, но не отменяет СНИЛС, Госуслуги и биометрию.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {painMatrix.map((block) => (
              <article
                key={block.stage}
                className="rounded-3xl bg-white p-6 ring-1 ring-black/5"
              >
                <h3 className="text-lg font-semibold">{block.stage}</h3>
                <ul className="mt-3 space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="cjm" className="bg-[#07150d] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Три CJM: от своей страны до России
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Патентный путь, путь ЕАЭС и повторный въезд. Каждый шаг — что
              человек делает, где болит и где оператор может встретить его.
            </p>
            <div
              role="tablist"
              aria-label="Путь мигранта"
              className="mt-8 flex flex-col gap-2 sm:flex-row"
            >
              {journeys.map((item) => {
                const active = item.id === journeyId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setJourneyId(item.id)}
                    className={`rounded-2xl px-4 py-3 text-left transition-colors ${
                      active
                        ? "bg-[#00B956] text-white"
                        : "bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <span className="block text-sm font-semibold">{item.title}</span>
                    <span className="mt-1 block text-xs opacity-80">
                      {item.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-[#9dffc2]">{journey.segments}</p>
            <ol className="mt-8 space-y-4">
              {journey.steps.map((step, index) => (
                <li
                  key={`${journey.id}-${step.stage}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-[#9dffc2]">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                      {step.stage}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    <CjmBlock
                      icon={Home}
                      label="Что делает"
                      text={step.doing}
                    />
                    <CjmBlock
                      icon={CircleAlert}
                      label="Где болит"
                      text={step.pain}
                    />
                    <CjmBlock
                      icon={Smartphone}
                      label="Связь и касание"
                      text={step.sim}
                    />
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/55">
              <Plane className="size-4" aria-hidden />
              Больше 65% едут самолётом. Билет берут за 2–3 недели до вылета.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <p>
            Сводка по папке «исследования»: маршруты трудовых мигрантов,
            стратегия «Мигранты v2», опыт нерезидентов МТС, ФГД и пенетрация
            МегаФон Таджикистан. Не официальная позиция оператора.
          </p>
          <p className="mt-3">
            <a href="/" className="font-medium text-[#00B956] hover:underline">
              Вернуться к лендингу «Тёплый приём»
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function CjmBlock({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Home;
  label: string;
  text: string;
}) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#9dffc2]">
        <Icon className="size-3.5" aria-hidden />
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/75">{text}</p>
    </div>
  );
}
