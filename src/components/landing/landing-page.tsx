"use client";

import { useState } from "react";
import {
  Check,
  Globe2,
  MapPinned,
  Menu,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CallbackForm } from "@/components/landing/callback-form";
import { MegafonMark } from "@/components/landing/logo";
import { countries, locales, tariffs } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";

const benefitIcons = [
  MessageCircle,
  MapPinned,
  Globe2,
  Wallet,
  ShieldCheck,
  Smartphone,
];

export function LandingPage() {
  const { t, locale } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState("m");
  const [menuOpen, setMenuOpen] = useState(false);

  function openLead(tariffId = "m") {
    setSelectedTariff(tariffId);
    setDialogOpen(true);
    setMenuOpen(false);
  }

  const nav = [
    { href: "#rates", label: t.nav.rates },
    { href: "#tariffs", label: t.nav.tariffs },
    { href: "#how", label: t.nav.how },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <div className="min-h-full bg-[#f3faf5] pb-20 text-foreground sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#top" className="inline-flex items-center gap-2 font-semibold">
            <MegafonMark className="size-8 text-[#00B956]" />
            <span className="flex flex-col leading-none">
              <span className="text-[15px] tracking-tight">{t.brand}</span>
              <span className="text-[11px] font-medium text-[#00B956]">
                {t.product}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSelect />
            <Button
              render={<a href="/cjm" />}
              variant="outline"
              className="hidden h-10 rounded-full lg:inline-flex"
            >
              Сегменты и CJM
            </Button>
            <Button
              onClick={() => openLead()}
              className="hidden h-10 rounded-full bg-[#00B956] px-4 font-semibold text-white hover:bg-[#00a34c] sm:inline-flex"
            >
              {t.getSim}
            </Button>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                    aria-label={t.openMenu}
                  />
                }
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetHeader className="border-b">
                  <SheetTitle>{t.brand}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 p-4">
                  {nav.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={
                        <a
                          href={item.href}
                          className="rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                  <a
                    href="/cjm"
                    className="rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                  >
                    Сегменты и CJM
                  </a>
                  <a
                    href="/migranty-cjm.pdf"
                    className="rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                  >
                    Скачать PDF
                  </a>
                  <Button
                    onClick={() => openLead()}
                    className="mt-3 h-12 rounded-full bg-[#00B956] text-base font-semibold text-white hover:bg-[#00a34c]"
                  >
                    {t.getSim}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#07150d] text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, #00B956 0%, transparent 42%), radial-gradient(circle at 10% 80%, #145c32 0%, transparent 35%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-[#9dffc2]">
                {t.heroKicker}
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t.heroTitle}{" "}
                <span className="text-[#00B956]">{t.heroTitleAccent}</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.heroLead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => openLead()}
                  className="h-12 rounded-full bg-[#00B956] px-6 text-base font-semibold text-white hover:bg-[#00a34c]"
                >
                  {t.getSim}
                </Button>
                <Button
                  variant="outline"
                  render={<a href="#tariffs" />}
                  className="h-12 rounded-full border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
                >
                  {t.heroSecondary}
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/55">{t.heroNote}</p>
              <p className="mt-3">
                <a
                  href="/migranty-cjm.pdf"
                  className="text-sm font-semibold text-[#9dffc2] underline-offset-2 hover:underline"
                >
                  Скачать сегменты и CJM (PDF)
                </a>
              </p>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {t.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <dt className="text-2xl font-semibold text-[#9dffc2]">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-sm leading-snug text-white/70">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <PhoneCard />
          </div>
        </section>

        <section id="rates" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.ratesTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {t.ratesLead}
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <article
                key={country.id}
                className="flex items-center justify-between rounded-2xl bg-white p-5 ring-1 ring-black/5"
              >
                <div>
                  <p className="text-lg font-semibold">
                    <span className="mr-2" aria-hidden>
                      {country.flag}
                    </span>
                    {t.countryNames[country.id]}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.countryNotes[country.id]}
                  </p>
                </div>
                <p className="text-right">
                  <span className="block text-2xl font-semibold text-[#00B956]">
                    {country.rate}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.rateUnit}
                  </span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="tariffs" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.tariffsTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {t.tariffsLead}
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {tariffs.map((tariff) => {
                const popular = "popular" in tariff && tariff.popular;
                return (
                  <article
                    key={tariff.id}
                    className={`flex flex-col rounded-3xl p-6 ring-1 ${
                      popular
                        ? "bg-[#07150d] text-white ring-[#00B956]"
                        : "bg-[#f3faf5] text-foreground ring-black/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold">
                        {t.tariffNames[tariff.id]}
                      </h3>
                      {popular ? (
                        <Badge className="border-transparent bg-[#00B956] text-white">
                          {t.popular}
                        </Badge>
                      ) : null}
                    </div>
                    <p className="mt-4 flex items-end gap-1">
                      <span className="text-4xl font-semibold">{tariff.price} ₽</span>
                      <span
                        className={`pb-1 text-sm ${popular ? "text-white/60" : "text-muted-foreground"}`}
                      >
                        {t.perMonth}
                      </span>
                    </p>
                    <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
                      {[
                        `${tariff.gb} ГБ ${t.internet}`,
                        `${tariff.minutes} ${t.minutesRu}`,
                        `${tariff.homeMinutes} ${t.minutesHome}`,
                        `${tariff.sms} ${t.sms}`,
                        t.megafonUnlimited,
                        t.messengersPack,
                      ].map((line) => (
                        <li key={line} className="flex items-start gap-2">
                          <Check
                            className={`mt-0.5 size-4 shrink-0 ${popular ? "text-[#9dffc2]" : "text-[#00B956]"}`}
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => openLead(tariff.id)}
                      className={`mt-8 h-12 rounded-full text-base font-semibold ${
                        popular
                          ? "bg-[#00B956] text-white hover:bg-[#00a34c]"
                          : "bg-[#07150d] text-white hover:bg-black"
                      }`}
                    >
                      {t.chooseTariff}
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.benefitsTitle}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? PhoneCall;
              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl bg-white p-6 ring-1 ring-black/5"
                >
                  <Icon className="size-6 text-[#00B956]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="how" className="bg-[#07150d] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.stepsTitle}
              </h2>
              <p className="mt-3 text-base text-white/70">{t.stepsLead}</p>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-sm font-semibold text-[#9dffc2]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 inline-flex rounded-full bg-[#00B956] px-4 py-2 text-sm font-semibold">
              {t.ussdHint}
            </p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.faqTitle}
          </h2>
          <Accordion className="mt-6 rounded-3xl bg-white px-5 ring-1 ring-black/5">
            {t.faq.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`}>
                <AccordionTrigger className="py-4 text-base hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="lead" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-6 ring-1 ring-black/5 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                {t.formTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {t.formLead}
              </p>
            </div>
          <CallbackForm defaultTariff={selectedTariff} idPrefix="page-lead" />
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <div className="inline-flex items-center gap-2 font-semibold text-foreground">
            <MegafonMark className="size-6 text-[#00B956]" />
            {t.footerRights}
          </div>
          <p>{t.footerLegal}</p>
          <p>{t.footerNotOfficial}</p>
          <p>
            {t.lang}: {locales.find((item) => item.id === locale)?.native}
          </p>
          <p>
            <a href="/cjm" className="font-medium text-[#00B956] hover:underline">
              Сегменты и CJM: от своей страны до России
            </a>
            {" · "}
            <a href="/migranty-cjm.pdf" className="font-medium text-[#00B956] hover:underline">
              Скачать PDF
            </a>
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/5 bg-white p-3 sm:hidden">
        <Button
          onClick={() => openLead()}
          className="h-12 w-full rounded-full bg-[#00B956] text-base font-semibold text-white hover:bg-[#00a34c]"
        >
          {t.getSim}
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{t.dialogTitle}</DialogTitle>
            <DialogDescription>{t.dialogLead}</DialogDescription>
          </DialogHeader>
          <CallbackForm
            key={selectedTariff}
            compact
            defaultTariff={selectedTariff}
            idPrefix="dialog-lead"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function LanguageSelect() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.lang}
      className="inline-flex rounded-full border border-input bg-white p-0.5"
    >
      {locales.map((item) => {
        const active = item.id === locale;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(item.id)}
            className={`h-9 min-w-9 rounded-full px-2.5 text-xs font-semibold transition-colors ${
              active
                ? "bg-[#00B956] text-white"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function PhoneCard() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="rounded-[2rem] bg-white p-3 text-foreground shadow-2xl shadow-black/30">
        <div className="rounded-[1.5rem] bg-[#07150d] p-5 text-white">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>MegaFon LTE</span>
            <span>18:24</span>
          </div>
          <p className="mt-8 text-sm text-[#9dffc2]">{t.phoneFrom}</p>
          <p className="mt-1 text-2xl font-semibold">{t.phoneHome}</p>
          <p className="mt-2 text-sm text-white/70">{t.phoneRate}</p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <span className="flex size-14 items-center justify-center rounded-full bg-red-500 text-lg">
              ✕
            </span>
            <span className="flex size-16 items-center justify-center rounded-full bg-[#00B956] text-lg">
              <PhoneCall className="size-6" />
            </span>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <p className="rounded-2xl bg-[#e5f7ec] px-4 py-3 text-sm font-medium text-[#086b32]">
            {t.phoneBalance}
          </p>
          <p className="rounded-2xl bg-[#f3faf5] px-4 py-3 text-sm text-muted-foreground">
            {t.messengersOn}
          </p>
        </div>
      </div>
    </div>
  );
}
