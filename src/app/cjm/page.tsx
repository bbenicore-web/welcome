import type { Metadata } from "next";
import { CjmPage } from "@/components/cjm/cjm-page";

export const metadata: Metadata = {
  title: "Сегменты и CJM мигрантов — Тёплый приём",
  description:
    "Пять сегментов трудовых мигрантов по работам и болям. Три пути: патент, ЕАЭС и повторный въезд — от сборов дома до жизни в России.",
};

export default function Page() {
  return <CjmPage />;
}
