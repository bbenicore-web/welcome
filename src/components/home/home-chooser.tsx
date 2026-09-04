"use client";

import { ArrowRight, Luggage, MapPinned } from "lucide-react";
import { LandingChrome } from "@/components/landings/chrome";
import { withBase } from "@/lib/base-path";

export function HomeChooser() {
  return (
    <LandingChrome current="home">
      <main>
        <section className="bg-[#07150d] text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-[#9dffc2]">
              МегаФон · связь для гостей из СНГ
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Вы только приехали{" "}
              <span className="text-[#00B956]">или уже живёте в России?</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Выберите свой случай. Если оформляете первую SIM — покажем, какие
              документы нужны. Если хотите перейти на МегаФон — поможем сохранить
              номер и звонить домой дешевле.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <a
              href={withBase("/arrive")}
              className="group flex flex-col rounded-[2rem] bg-white p-8 ring-1 ring-black/5 transition-shadow hover:shadow-lg"
            >
              <Luggage className="size-8 text-[#00B956]" />
              <h2 className="mt-6 text-2xl font-semibold">Только приехал</h2>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                Пошагово: как оформить сим-карту и документы за один визит.
                Тарифы «Минимум +» и «Семейный +».
              </p>
              <p className="mt-6 inline-flex items-center gap-2 font-semibold text-[#00B956]">
                Как легализоваться
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </p>
            </a>
            <a
              href={withBase("/here")}
              className="group flex flex-col rounded-[2rem] bg-[#07150d] p-8 text-white ring-1 ring-[#00B956] transition-shadow hover:shadow-lg"
            >
              <MapPinned className="size-8 text-[#00B956]" />
              <h2 className="mt-6 text-2xl font-semibold">Уже живу в России</h2>
              <p className="mt-3 flex-1 text-base leading-relaxed text-white/70">
                Перейдите на МегаФон со своим номером. Тарифы «Минимум +» и
                «Семейный +», бонусы за переводы домой.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 font-semibold text-[#9dffc2]">
                Почему МегаФон
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </p>
            </a>
          </div>
        </section>
      </main>
    </LandingChrome>
  );
}
