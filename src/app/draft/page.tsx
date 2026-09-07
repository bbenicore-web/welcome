import type { Metadata } from "next";
import { DraftHub } from "@/components/home/draft-hub";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Черновики лендингов — сравнение с текущими",
  description:
    "Новые версии /arrive и /here рядом с текущими страницами. Старые маршруты не менялись.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <DraftHub />
    </LanguageProvider>
  );
}
