import type { Metadata } from "next";
import { ArrivePageNext } from "@/components/arrive/arrive-page-next";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Добро пожаловать в Россию — сим-карта МегаФон",
  description:
    "Подключайте сим-карту МегаФон и будьте на связи с родными. СНИЛС, Госуслуги, биометрия, тарифы Минимум + и Семейный +, МегаСилы.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <ArrivePageNext />
    </LanguageProvider>
  );
}
