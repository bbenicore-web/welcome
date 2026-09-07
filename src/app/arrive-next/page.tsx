import type { Metadata } from "next";
import { ArrivePageNext } from "@/components/arrive/arrive-page-next";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Черновик: Добро пожаловать в Россию — новая версия",
  description:
    "Новая группировка тарифов Минимум + и Семейный +, авто-продукты для СНГ и МегаСилы. Для сравнения со текущей страницей.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <ArrivePageNext />
    </LanguageProvider>
  );
}
