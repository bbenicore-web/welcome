"use client";

import { LandingChrome } from "@/components/landings/chrome";
import { MegaHero, RtbCard } from "@/components/landings/mega-art";
import { mf } from "@/components/landings/mf";
import { Reveal } from "@/components/motion/reveal";
import { withBase } from "@/lib/base-path";

export function HomeChooser() {
  return (
    <LandingChrome current="home">
      <main className={`${mf.wrap} py-4 lg:py-6`}>
        <MegaHero
          kicker="МегаФон → Услуги и опции"
          title={
            <>
              Вы только приехали{" "}
              <span className="whitespace-nowrap">или уже живёте</span> в России?
            </>
          }
          subtitle="Выберите свой случай. Если оформляете первую SIM — покажем, какие документы нужны. Если хотите перейти на МегаФон — поможем сохранить номер и звонить домой дешевле."
        />

        <Reveal className="mt-10">
          <h2 className={`${mf.h2} text-center`}>Как начать</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/arrive")}
            art="internet"
            title="Только приехал"
            text="Пошагово: как оформить сим-карту и документы за один визит. Тарифы «Минимум +» и «Семейный +»."
            cta="Как легализоваться"
          />
          <RtbCard
            href={withBase("/here")}
            art="base"
            title="Уже живу в России"
            text="Перейдите на МегаФон со своим номером. Тарифы «Минимум +» и «Семейный +», бонусы за переводы домой."
            cta="Почему МегаФон"
          />
        </Reveal>
      </main>
    </LandingChrome>
  );
}
