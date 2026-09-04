import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "МегаФон для мигрантов — тарифы «Тёплый приём»",
  description:
    "Связь в России и звонки домой без переплат. SIM за 15 минут, мессенджеры даже при нулевом балансе, выгодные минуты в Узбекистан, Таджикистан и Киргизию.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
