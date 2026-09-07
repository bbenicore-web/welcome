import type { Metadata } from "next";
import { DraftHub } from "@/components/home/draft-hub";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Сравнение версий лендингов",
  description:
    "Текущие страницы /arrive и /here рядом с предыдущими версиями.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <DraftHub />
    </LanguageProvider>
  );
}
