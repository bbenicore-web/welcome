import { LandingPage } from "@/components/landing/landing-page";
import { LanguageProvider } from "@/lib/language-context";

export default function Page() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
