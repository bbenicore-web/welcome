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
              Сейчас на сайте новая версия.{" "}
              <span className="whitespace-nowrap">Старая рядом.</span>
            </>
          }
          subtitle="На основных страницах — тарифы по смыслу, что включается само и МегаСилы. Предыдущие тексты оставлены, чтобы сравнить."
        />

        <Reveal className="mt-10">
          <h2 className={`${mf.h2} text-center`}>Только приехал</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/arrive")}
            art="promo"
            title="Сейчас на сайте"
            text="Минимум + для связи и работы. Семейный + для безлимита. Что само, что вручную, где МегаСилы."
            cta="Открыть"
          />
          <RtbCard
            href={withBase("/arrive-old")}
            art="internet"
            title="Предыдущая версия"
            text="Карточки тарифов и общий список плюшек — как было раньше."
            cta="Открыть"
          />
        </Reveal>

        <Reveal className="mt-12">
          <h2 className={`${mf.h2} text-center`}>Уже живу в России</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/here")}
            art="promo"
            title="Сейчас на сайте"
            text="Тот же безлимит и калькулятор, плюс понятнее про опции для СНГ и МегаСилы."
            cta="Открыть"
          />
          <RtbCard
            href={withBase("/here-old")}
            art="base"
            title="Предыдущая версия"
            text="Карточки, калькулятор и блок «это вам понравится»."
            cta="Открыть"
          />
        </Reveal>
      </main>
    </LandingChrome>
  );
}
