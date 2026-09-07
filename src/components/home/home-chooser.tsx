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
          kicker="МегаФон → Для гостей из СНГ"
          title={
            <>
              Вы только приехали{" "}
              <span className="whitespace-nowrap">или уже живёте</span> в России?
            </>
          }
          subtitle="Первая SIM — с документами. Свой номер — без новой биометрии. Звонки домой дешевле."
        />

        <Reveal className="mt-10">
          <h2 className={`${mf.h2} text-center`}>Выберите свой случай</h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
          <RtbCard
            href={withBase("/arrive")}
            art="internet"
            title="Только приехал"
            text="Пять шагов: сим-карта, СНИЛС, Госуслуги, биометрия, активация. Тарифы от 850 ₽."
            cta="Оформить SIM"
          />
          <RtbCard
            href={withBase("/here")}
            art="base"
            title="Уже живу в России"
            text="Перенос номера в салоне. Бонусы, если переводите деньги домой там же."
            cta="Перейти со своим номером"
          />
        </Reveal>

        <p className="mt-10 text-center text-[15px] text-[#8F96A4]">
          <a href={withBase("/draft")} className="font-medium text-[#00B956] hover:underline">
            Сравнить с предыдущей версией
          </a>
        </p>
      </main>
    </LandingChrome>
  );
}
