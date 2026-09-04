"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "megafon-landing-locale";
const listeners = new Set<() => void>();

function isLocale(value: string | null): value is Locale {
  return value === "ru" || value === "uz" || value === "tg" || value === "ky";
}

function getStoredLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(saved) ? saved : "ru";
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function htmlLang(locale: Locale) {
  if (locale === "uz") return "uz";
  if (locale === "tg") return "tg";
  if (locale === "ky") return "ky";
  return "ru";
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof dictionaries)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<Locale>(
    subscribe,
    getStoredLocale,
    () => "ru",
  );

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    listeners.forEach((listener) => listener());
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
