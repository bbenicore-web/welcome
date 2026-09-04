"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { MegafonMark } from "@/components/landing/logo";
import { mf } from "@/components/landings/mf";
import { withBase } from "@/lib/base-path";
import { locales } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";

export function LandingChrome({
  current,
  children,
}: {
  current: "home" | "arrive" | "here";
  children: ReactNode;
}) {
  return (
    <div className={mf.page}>
      <header className="sticky top-0 z-40 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
        <div className={`${mf.wrap} flex h-[72px] items-center justify-between gap-3`}>
          <a href={withBase("/")} className="inline-flex items-center gap-2 font-semibold">
            <MegafonMark className="size-8 text-[#00B956]" />
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-medium tracking-tight">МегаФон</span>
              <span className="text-[11px] font-medium text-[#8F96A4]">
                Для гостей из СНГ
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-[15px] font-medium lg:flex">
            <NavLink href="/arrive" active={current === "arrive"}>
              Только приехал
            </NavLink>
            <NavLink href="/here" active={current === "here"}>
              Уже живу в России
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <LanguagePills />
            <Button
              render={
                <a
                  href={withBase(current === "here" ? "/here#lead" : "/arrive#lead")}
                />
              }
              className={`hidden sm:inline-flex ${mf.btnGreen}`}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>
      {children}
      <footer className="mt-16 border-t border-[#EDEDED] bg-white">
        <div className={`${mf.wrap} flex flex-col gap-3 py-10 text-sm text-[#8F96A4]`}>
          <p className="font-medium text-[#333]">МегаФон · связь для гостей из СНГ</p>
          <p>
            Цены ориентировочные, по Москве, с НДС. Точные условия — в салоне и
            на megafon.ru. Не официальный сайт ПАО «МегаФон».
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={withBase("/arrive")} className="text-[#333] hover:underline">
              Первая SIM
            </a>
            <a href={withBase("/here")} className="text-[#333] hover:underline">
              Переход со своим номером
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={withBase(href)}
      className={active ? "text-[#333]" : "text-[#8F96A4] hover:text-[#333]"}
    >
      {children}
    </a>
  );
}

export function LanguagePills() {
  const { locale, setLocale, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.lang}
      className="inline-flex rounded-full bg-[#F2F4F7] p-0.5"
    >
      {locales.map((item) => {
        const active = item.id === locale;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(item.id)}
            className={`h-9 min-w-9 rounded-full px-2.5 text-xs font-medium transition-colors ${
              active
                ? "bg-[#00B956] text-white"
                : "text-[#8F96A4] hover:text-[#333]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
