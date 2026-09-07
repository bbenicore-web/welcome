import type { Metadata } from "next";
import { ArrivePageNext } from "@/components/arrive/arrive-page-next";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Первая SIM МегаФон — документы и активация",
  description:
    "Пять шагов: сим-карта, СНИЛС, Госуслуги, биометрия, активация. Тарифы Минимум + от 850 ₽ и Семейный + от 1 140 ₽.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <ArrivePageNext />
    </LanguageProvider>
  );
}
