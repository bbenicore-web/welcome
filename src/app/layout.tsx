import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const megafon = localFont({
  variable: "--font-megafon",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/MegaFonGraphikLC-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MegaFonGraphikLC-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MegaFonGraphikLC-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/MegaFonGraphikLC-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "МегаФон для мигрантов — тарифы «Тёплый приём»",
  description:
    "Связь в России и звонки домой без переплат. WhatsApp, Telegram и IMO при любом балансе. SIM очно: паспорт, СНИЛС, Госуслуги и биометрия.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${megafon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
