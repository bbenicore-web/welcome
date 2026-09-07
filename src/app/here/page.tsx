import type { Metadata } from "next";
import { HerePageNext } from "@/components/here/here-page-next";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Свой номер в МегаФон — без новой биометрии",
  description:
    "Перенос в салоне. Минимум + от 850 ₽ и Семейный + от 1 140 ₽. «Тёплый приём» сам. Бонусы за переводы домой в салоне.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <HerePageNext />
    </LanguageProvider>
  );
}
