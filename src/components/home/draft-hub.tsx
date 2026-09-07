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
          kicker="Черновики · сравнение"
          title={
            <>
              Новые версии рядом{" "}
              <span className="whitespace-nowrap">со старыми.</span>
            </>
          }
          subtitle="Текущие /arrive и /here не менялись. Откройте черновик, сравните тарифы, авто-продукты и МегаСилы — и решите, обновлять ли боевые страницы."
        />

        <Reveal className="mt-10">
          <h2 className={`${mf.h2} text-center`}>Только приехал</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/arrive")}
            art="internet"
            title="Текущая версия"
            text="Как сейчас на сайте: карточки тарифов и общий список плюшек."
            cta="Открыть текущую"
          />
          <RtbCard
            href={withBase("/arrive-next")}
            art="promo"
            title="Новая версия"
            text="Тарифы по смыслу: базовый vs комфорт. Сразу / нужно подключить / МегаСилы."
            cta="Открыть черновик"
          />
        </Reveal>

        <Reveal className="mt-12">
          <h2 className={`${mf.h2} text-center`}>Уже живу в России</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/here")}
            art="base"
            title="Текущая версия"
            text="Как сейчас: карточки, калькулятор и общий блок «это вам понравится»."
            cta="Открыть текущую"
          />
          <RtbCard
            href={withBase("/here-next")}
            art="promo"
            title="Новая версия"
            text="Комфорт-класс, авто-продукты для СНГ и конструктор МегаСил с официальных страниц."
            cta="Открыть черновик"
          />
        </Reveal>
      </main>
    </LandingChrome>
  );
}
