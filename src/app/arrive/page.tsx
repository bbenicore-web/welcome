import type { Metadata } from "next";
import { ArrivePage } from "@/components/arrive/arrive-page";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Только приехали — как легально получить SIM МегаФон",
  description:
    "СНИЛС, Госуслуги, биометрия и договор в салоне. Затем тарифы Минимум + и Семейный + с опцией «Тёплый приём».",
};

export default function Page() {
  return (
    <LanguageProvider>
      <ArrivePage />
    </LanguageProvider>
  );
}
