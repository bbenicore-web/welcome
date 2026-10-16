import type { Metadata } from "next";
import { MigrantsLanding } from "@/components/migrants/migrants-landing";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "На связи с близкими — МегаФон для иностранных граждан",
  description:
    "Тарифы для гостей, интернет, звонки домой и полезные сервисы. Как оформить SIM или eSIM онлайн и в салоне.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <MigrantsLanding />
    </LanguageProvider>
  );
}
