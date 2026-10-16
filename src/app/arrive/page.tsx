import type { Metadata } from "next";
import { ArrivePage } from "@/components/arrive/arrive-page";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Сим-карта и документы за один визит — МегаФон",
  description:
    "Как оформить документы и получить сим-карту МегаФон: СНИЛС, Госуслуги, биометрия, тарифы Минимум + и Семейный +.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <ArrivePage />
    </LanguageProvider>
  );
}
