import type { Metadata } from "next";
import { HerePage } from "@/components/here/here-page";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Предыдущая версия: уже в России",
  description:
    "Предыдущая версия страницы «Уже живу в России» — для сравнения с текущей.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <HerePage />
    </LanguageProvider>
  );
}
