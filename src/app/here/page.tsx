import type { Metadata } from "next";
import { HerePage } from "@/components/here/here-page";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Уже в России — переходите на МегаФон со своим номером",
  description:
    "Заявка сразу. Минимум + от 850 ₽ и Семейный + от 1 140 ₽, «Тёплый приём», бонусы за переводы в салоне, свой номер.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <HerePage />
    </LanguageProvider>
  );
}
