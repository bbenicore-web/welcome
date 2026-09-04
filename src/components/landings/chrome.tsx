"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { MegafonMark } from "@/components/landing/logo";
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
    <div className="min-h-full bg-[#f3faf5] pb-20 text-foreground sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href={withBase("/")} className="inline-flex items-center gap-2 font-semibold">
            <MegafonMark className="size-8 text-[#00B956]" />
            <span className="flex flex-col leading-none">
              <span className="text-[15px] tracking-tight">МегаФон</span>
              <span className="text-[11px] font-medium text-[#00B956]">
                Для гостей из СНГ
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
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
              className="hidden h-10 rounded-full bg-[#00B956] px-4 font-semibold text-white hover:bg-[#00a34c] sm:inline-flex"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <p className="font-semibold text-foreground">
            МегаФон · связь для гостей из СНГ
          </p>
          <p>
            Цены ориентировочные, по Москве, с НДС. Точные условия — в салоне и
            на megafon.ru. Не официальный сайт ПАО «МегаФон».
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={withBase("/arrive")} className="text-[#00B956] hover:underline">
              Первая SIM
            </a>
            <a href={withBase("/here")} className="text-[#00B956] hover:underline">
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
      className={active ? "text-foreground" : "text-foreground/70 hover:text-foreground"}
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
      className="inline-flex rounded-full border border-input bg-white p-0.5"
    >
      {locales.map((item) => {
        const active = item.id === locale;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(item.id)}
            className={`h-9 min-w-9 rounded-full px-2.5 text-xs font-semibold transition-colors ${
              active
                ? "bg-[#00B956] text-white"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
