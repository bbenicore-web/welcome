"use client";

import { ArrowRight, Luggage, MapPinned } from "lucide-react";
import { LandingChrome } from "@/components/landings/chrome";
import { IconWell, MegaGlow } from "@/components/landings/mega-art";
import { mf } from "@/components/landings/mf";
import { Reveal } from "@/components/motion/reveal";
import { withBase } from "@/lib/base-path";

export function HomeChooser() {
  return (
    <LandingChrome current="home">
      <main className={`${mf.wrap} py-4 lg:py-6`}>
        <section className={`${mf.hero} px-6 py-12 sm:px-10 lg:px-16 lg:py-16`}>
          <MegaGlow />
          <div className="relative z-10 max-w-2xl">
            <p className={mf.kicker}>МегаФон · связь для гостей из СНГ</p>
            <h1 className={`${mf.h1} mt-4`}>
              Вы только приехали{" "}
              <span className="text-[#00B956]">или уже живёте в России?</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-white/80">
              Выберите свой случай. Если оформляете первую SIM — покажем, какие
              документы нужны. Если хотите перейти на МегаФон — поможем сохранить
              номер и звонить домой дешевле.
            </p>
          </div>
        </section>

        <Reveal className="mt-4 grid gap-4 lg:grid-cols-2">
          <a
            href={withBase("/arrive")}
            className={`${mf.card} group flex flex-col p-7 shadow-[0_8px_32px_rgba(51,51,51,0.06)] ring-1 ring-[#EDEDED] transition-shadow hover:shadow-[0_12px_40px_rgba(51,51,51,0.1)]`}
          >
            <IconWell>
              <Luggage className="size-7" />
            </IconWell>
            <h2 className="mt-6 text-[22px] font-semibold leading-7">Только приехал</h2>
            <p className="mt-3 flex-1 text-[15px] leading-6 text-[#999]">
              Пошагово: как оформить сим-карту и документы за один визит.
              Тарифы «Минимум +» и «Семейный +».
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#00B956]">
              Как легализоваться
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </p>
          </a>
          <a
            href={withBase("/here")}
            className="group flex flex-col rounded-[24px] bg-[#731982] p-7 text-white transition-transform hover:brightness-110"
          >
            <IconWell tone="purple">
              <MapPinned className="size-7" />
            </IconWell>
            <h2 className="mt-6 text-[22px] font-semibold leading-7">Уже живу в России</h2>
            <p className="mt-3 flex-1 text-[15px] leading-6 text-white/75">
              Перейдите на МегаФон со своим номером. Тарифы «Минимум +» и
              «Семейный +», бонусы за переводы домой.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#00B956]">
              Почему МегаФон
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </p>
          </a>
        </Reveal>
      </main>
    </LandingChrome>
  );
}
