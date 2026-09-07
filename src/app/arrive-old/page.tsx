import type { Metadata } from "next";
import { ArrivePage } from "@/components/arrive/arrive-page";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Предыдущая версия: Добро пожаловать в Россию",
  description:
    "Предыдущая версия страницы «Только приехал» — для сравнения с текущей.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <ArrivePage />
    </LanguageProvider>
  );
}
