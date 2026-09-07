"use client";

import { LandingChrome } from "@/components/landings/chrome";
import { MegaHero, RtbCard } from "@/components/landings/mega-art";
import { mf } from "@/components/landings/mf";
import { Reveal } from "@/components/motion/reveal";
import { withBase } from "@/lib/base-path";

export function DraftHub() {
  return (
    <LandingChrome current="home">
      <main className={`${mf.wrap} py-4 lg:py-6`}>
        <MegaHero
          kicker="Сравнить две версии"
          title={
            <>
              Сначала черновик,{" "}
              <span className="whitespace-nowrap">потом решим.</span>
            </>
          }
          subtitle="Страницы «Только приехал» и «Уже в России» на сайте пока старые. Здесь новые тексты про тарифы, что включается само и МегаСилы."
        />

        <Reveal className="mt-10">
          <h2 className={`${mf.h2} text-center`}>Только приехал</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/arrive")}
            art="internet"
            title="Как сейчас"
            text="Карточки тарифов и общий список плюшек — то, что уже на сайте."
            cta="Открыть"
          />
          <RtbCard
            href={withBase("/arrive-next")}
            art="promo"
            title="Черновик"
            text="Минимум + для связи и работы. Семейный + для безлимита. Что само, что вручную, где МегаСилы."
            cta="Открыть"
          />
        </Reveal>

        <Reveal className="mt-12">
          <h2 className={`${mf.h2} text-center`}>Уже живу в России</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/here")}
            art="base"
            title="Как сейчас"
            text="Карточки, калькулятор и блок «это вам понравится»."
            cta="Открыть"
          />
          <RtbCard
            href={withBase("/here-next")}
            art="promo"
            title="Черновик"
            text="Тот же безлимит и калькулятор, плюс понятнее про опции для СНГ и МегаСилы."
            cta="Открыть"
          />
        </Reveal>
      </main>
    </LandingChrome>
  );
}
