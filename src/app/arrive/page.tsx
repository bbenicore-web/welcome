import type { Metadata } from "next";
import { ArrivePage } from "@/components/arrive/arrive-page";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Добро пожаловать в Россию — сим-карта МегаФон",
  description:
    "Подключайте сим-карту МегаФон и будьте на связи с родными. СНИЛС, Госуслуги, биометрия, тарифы Минимум + и Семейный +.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <ArrivePage />
    </LanguageProvider>
  );
}
