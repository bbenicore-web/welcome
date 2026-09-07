import type { Metadata } from "next";
import { withBase } from "@/lib/base-path";
import { jobMix, journeys, painMatrix, segments } from "@/lib/cjm-data";

export const metadata: Metadata = {
  title: "Сегменты и CJM мигрантов — документ",
  description:
    "Пять сегментов по работам и болям. Три пути: патент, ЕАЭС и повторный въезд.",
};

export default function CjmPrintPage() {
  return (
    <div className="min-h-full bg-white px-6 py-10 text-[#111] sm:px-10">
      <header className="mx-auto max-w-3xl border-b border-[#d7eadc] pb-6">
        <p className="text-sm font-semibold text-[#00B956]">Мигранты · Сегменты и CJM</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Сегменты мигрантов и CJM: от своей страны до России
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#4d6356]">
          Сводка по папке «исследования». 82% рабочих въездов — Узбекистан,
          Таджикистан, Кыргызстан. Сегменты делятся по работе, сроку пребывания
          и юридической развилке: патент или ЕАЭС.
        </p>
        <p className="mt-2 text-sm">
          <a href={withBase("/migranty-cjm.pdf")} className="font-semibold text-[#00B956]">
            Скачать PDF
          </a>
          {" · "}
          <a href={withBase("/cjm")} className="font-semibold text-[#00B956]">
            Интерактивная страница
          </a>
          {" · "}
          <a href={withBase("/")} className="font-semibold text-[#00B956]">
            Лендинг
          </a>
        </p>
      </header>

      <section className="mx-auto mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold">Пять сегментов</h2>
        <div className="mt-6 space-y-6">
          {segments.map((segment) => (
            <article key={segment.id} className="rounded-2xl border border-[#d7eadc] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#00B956]">
                {segment.tag}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{segment.name}</h3>
              <p className="text-sm text-[#4d6356]">{segment.countries}</p>
              <p className="mt-2 text-sm">{segment.share}</p>
              <p className="mt-1 text-sm font-medium">{segment.jobs.join(" · ")}</p>
              <p className="mt-2 text-sm">{segment.legal}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {segment.pains.map((pain) => (
                  <li key={pain}>{pain}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-[#4d6356]">Где искать: {segment.where}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold">Работа по странам</h2>
        <p className="mt-2 text-sm text-[#4d6356]">
          Москва, опрос 2 774 работающих мигрантов, осень 2023.
        </p>
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#d7eadc]">
              <th className="py-2 pr-3">Отрасль</th>
              <th className="py-2 pr-3">Узбекистан</th>
              <th className="py-2 pr-3">Таджикистан</th>
              <th className="py-2">Кыргызстан</th>
            </tr>
          </thead>
          <tbody>
            {jobMix.map((row) => (
              <tr key={row.job} className="border-b border-[#d7eadc]">
                <td className="py-2 pr-3 font-medium">{row.job}</td>
                <td className="py-2 pr-3">{row.uz}</td>
                <td className="py-2 pr-3">{row.tj}</td>
                <td className="py-2">{row.kg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mx-auto mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold">Боли по этапам</h2>
        <div className="mt-4 space-y-4">
          {painMatrix.map((block) => (
            <article key={block.stage}>
              <h3 className="font-semibold">{block.stage}</h3>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {journeys.map((journey) => (
        <section
          key={journey.id}
          className="mx-auto mt-12 max-w-3xl break-before-page"
        >
          <h2 className="text-2xl font-semibold">{journey.title}</h2>
          <p className="mt-1 text-sm text-[#4d6356]">{journey.subtitle}</p>
          <p className="mt-1 text-sm">{journey.segments}</p>
          <ol className="mt-6 space-y-6">
            {journey.steps.map((step, index) => (
              <li key={`${journey.id}-${step.stage}`} className="border-t border-[#d7eadc] pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#00B956]">
                  {String(index + 1).padStart(2, "0")} · {step.stage}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-xs font-semibold uppercase text-[#4d6356]">
                  Что делает
                </p>
                <p className="mt-1 text-sm leading-relaxed">{step.doing}</p>
                <p className="mt-3 text-xs font-semibold uppercase text-[#4d6356]">
                  Где болит
                </p>
                <p className="mt-1 text-sm leading-relaxed">{step.pain}</p>
                <p className="mt-3 text-xs font-semibold uppercase text-[#4d6356]">
                  Связь и касание
                </p>
                <p className="mt-1 text-sm leading-relaxed">{step.sim}</p>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <footer className="mx-auto mt-12 max-w-3xl border-t border-[#d7eadc] pt-4 text-xs text-[#4d6356]">
        Демонстрационный документ. Не является официальной позицией ПАО «МегаФон».
      </footer>
    </div>
  );
}
