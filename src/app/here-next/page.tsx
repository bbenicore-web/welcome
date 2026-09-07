import type { Metadata } from "next";
import { HerePageNext } from "@/components/here/here-page-next";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Черновик: уже в России — новая версия",
  description:
    "Новая группировка тарифов, авто-продукты для СНГ и стандартные МегаСилы. Для сравнения со текущей страницей.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <HerePageNext />
    </LanguageProvider>
  );
}
