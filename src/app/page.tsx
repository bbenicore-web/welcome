import type { Metadata } from "next";
import { HomeChooser } from "@/components/home/home-chooser";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "МегаФон для гостей из СНГ — первая SIM или свой номер",
  description:
    "Первая SIM с документами или переход со своим номером без новой биометрии. Тарифы от 850 ₽.",
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomeChooser />
    </LanguageProvider>
  );
}
