import type { Metadata } from "next";
import { HomeChooser } from "@/components/home/home-chooser";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "МегаФон для гостей из СНГ — выберите свой сценарий",
  description:
    "Два лендинга: первая SIM и легализация для тех, кто только приехал, и переход в МегаФон для тех, кто уже живёт в России.",
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomeChooser />
    </LanguageProvider>
  );
}
