import type { Metadata } from "next";
import { HerePage } from "@/components/here/here-page";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Уже в России — переход в МегаФон со своим номером",
  description:
    "Почему МегаФон лучше текущего оператора и какие продукты закрывают звонки домой, переводы, семью и сезонный отъезд.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <HerePage />
    </LanguageProvider>
  );
}
