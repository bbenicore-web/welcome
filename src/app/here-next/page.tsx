import type { Metadata } from "next";
import { HerePageNext } from "@/components/here/here-page-next";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Уже в России — переходите на МегаФон со своим номером",
  description:
    "Минимум + от 850 ₽ и Семейный + от 1 140 ₽, «Тёплый приём», бонусы за переводы в салоне, МегаСилы, свой номер.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <HerePageNext />
    </LanguageProvider>
  );
}
