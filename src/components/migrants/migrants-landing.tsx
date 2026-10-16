"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { migrantCopy } from "@/components/migrants/copy";
import { withBase } from "@/lib/base-path";
import { cities, locales, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";

const heroSrc = withBase("/migrants/hero.webp");
const deviceSrc = withBase("/migrants/device.webp");
const heroAlt = "Две чашки чая, выпечка и зелёный смартфон на светлом столе";
const frame = "mx-auto w-full max-w-[1440px] px-4 md:px-12 lg:px-16 xl:px-20";
const greenBtn =
  "inline-flex h-[52px] items-center justify-center rounded-full bg-[#00b956] px-8 text-center text-[15px] font-medium leading-6 text-white hover:bg-[#10e272]";
const blackBtn =
  "inline-flex h-[52px] items-center justify-center rounded-full bg-[#333] px-8 text-center text-[15px] font-medium leading-6 text-white";
const softBtn =
  "inline-flex h-[52px] items-center justify-center rounded-full bg-white px-8 text-center text-[15px] font-medium leading-6 text-[#333]";
const sectionTitle =
  "text-center text-[22px] font-semibold leading-7 text-[#333] md:text-[32px] md:leading-10";

export function MigrantsLanding() {
  const { locale, setLocale, t: dict } = useLanguage();
  const t = migrantCopy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [tab, setTab] = useState<"online" | "salon">("online");
  const [leadOpen, setLeadOpen] = useState(false);
  const [tariffId, setTariffId] = useState<string>("work");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointer(event: PointerEvent) {
      if (!langRef.current?.contains(event.target as Node)) setLangOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, []);

  function openLead(id = "work") {
    setTariffId(id);
    setLeadOpen(true);
    setMenuOpen(false);
  }

  const currentLang = locales.find((item) => item.id === locale) ?? locales[0];

  return (
    <div className="min-h-full bg-white text-[#333]">
      <div className="w-full">
        <header className="sticky top-0 z-40 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
          <div className={`${frame} flex h-14 items-center justify-between`}>
          <a href="#top" className="inline-flex items-center" aria-label="МегаФон">
            <img
              src={withBase("/migrants/logo-mark.svg")}
              alt=""
              width={24}
              height={24}
              className="h-[23.5px] w-[23.5px]"
            />
            <img
              src={withBase("/migrants/logo-word.svg")}
              alt="МегаФон"
              width={103}
              height={14}
              className="ml-[6px] h-[14px] w-[103px]"
            />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://lk.megafon.ru/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-6 items-center rounded-full bg-[#00B956] px-4 text-[12px] font-medium leading-none text-white"
            >
              {t.login}
            </a>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <button
                type="button"
                className="grid size-8 place-items-center"
                aria-label={t.openMenu}
                onClick={() => setMenuOpen(true)}
              >
                <img src={withBase("/migrants/burger.svg")} alt="" width={32} height={32} />
              </button>
              <SheetContent side="right" className="w-[min(100%,320px)] bg-white p-0">
                <SheetHeader className="border-b border-black/5">
                  <SheetTitle className="text-[#333]">{t.breadcrumbCurrent}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-3">
                  {t.menu.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={
                        <a
                          href={item.href}
                          className="rounded-xl px-3 py-3 text-[16px] font-medium text-[#333] hover:bg-[#f2f4f7]"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                  <button
                    type="button"
                    onClick={() => openLead()}
                    className={`mt-3 ${greenBtn}`}
                  >
                    {t.cta}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          </div>
        </header>

        <main id="top">
          <section
            className="overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(278.83deg, rgba(143, 168, 216, 0.3) 0.27%, rgba(255, 255, 255, 0.3) 99.56%), linear-gradient(0deg, #f2f4f7, #f2f4f7)",
            }}
          >
            <div className={`${frame} flex min-h-[520px] flex-col pb-12 pt-6 lg:flex-row lg:items-center lg:pt-10`}>
            <div className="relative z-[1] max-w-[640px]">
            <nav aria-label="breadcrumb" className="mb-6 flex items-center gap-1 text-[15px] leading-6">
              <a href={withBase("/")} className="text-[#333]">
                {t.breadcrumbHome}
              </a>
              <span aria-hidden className="px-1 text-[#333]">
                →
              </span>
              <span className="truncate text-[#333]/55">{t.breadcrumbCurrent}</span>
            </nav>
              <h1 className="text-[44px] font-bold leading-[48px] text-[#333] md:text-[64px] md:leading-[56px] lg:text-[80px] lg:leading-[63px]">
                {t.heroTitleA}
                <br />
                {t.heroTitleB}
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-medium leading-6 text-[#333] md:text-[20px] md:leading-7">
                {t.heroLead}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <a href="#connect" className={greenBtn}>
                  {t.cta}
                </a>
                <div ref={langRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={langOpen}
                    aria-haspopup="listbox"
                    aria-label={t.langLabel}
                    onClick={() => setLangOpen((open) => !open)}
                    className={`${softBtn} gap-2`}
                  >
                    <Flag locale={locale} />
                    <span>{currentLang.native}</span>
                    <img
                      src={withBase("/migrants/chevron.svg")}
                      alt=""
                      width={20}
                      height={20}
                      className={`size-5 transition-transform ${langOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {langOpen ? (
                    <ul
                      role="listbox"
                      aria-label={t.langLabel}
                      className="absolute right-0 z-30 mt-2 w-full min-w-[180px] overflow-hidden rounded-xl bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    >
                      {locales.map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={item.id === locale}
                            onClick={() => {
                              setLocale(item.id);
                              setLangOpen(false);
                            }}
                            className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-[15px] font-medium hover:bg-[#f2f4f7]"
                          >
                            <Flag locale={item.id} />
                            {item.native}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="relative mt-4 h-[280px] w-full lg:mt-0 lg:h-[420px] lg:flex-1">
              <img
                src={heroSrc}
                alt={heroAlt}
                className="absolute inset-0 h-full w-full object-contain object-center lg:object-right"
              />
            </div>
            </div>
          </section>

          <section id="benefits" className={`${frame} py-12 md:py-16`}>
            <h2 className={sectionTitle}>{t.benefitsTitle}</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
              {t.benefitCards.map((card) => (
                <article
                  key={card.title}
                  className="relative min-h-[162px] overflow-hidden rounded-xl bg-[#ededed] p-4 md:min-h-[220px] md:rounded-3xl md:p-8"
                >
                  <div className="relative z-[1] max-w-[calc(100%-112px)] md:max-w-[calc(100%-180px)]">
                    <h3 className="text-[20px] font-semibold leading-7 md:text-[26px] md:leading-8">{card.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[#333]">{card.text}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 h-full w-32 md:w-44">
                    <img src={deviceSrc} alt="" className="h-full w-full object-contain object-right-bottom" />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 md:p-8">
              <h3 className="mb-6 max-w-[80%] text-[22px] font-semibold leading-7 md:text-[28px] md:leading-9">{t.moreTitle}</h3>
              <TileScroller tiles={t.tiles} />
            </div>
          </section>

          <section id="tariffs" className="bg-[#ededed] py-12 md:py-16">
            <div className={frame}>
            <h2 className={sectionTitle}>{t.tariffsTitle}</h2>
            <div className="mt-8 grid gap-4">
              {t.tariffs.map((tariff) => {
                const dark = tariff.id === "family";
                return (
                <article key={tariff.id} className={`flex flex-col-reverse overflow-hidden rounded-2xl lg:flex-row ${dark ? "bg-[#333] text-white" : "bg-white text-[#333]"}`}>
                  <div className={`relative z-[1] -mt-8 flex flex-1 flex-col gap-4 rounded-2xl px-4 pb-4 pt-5 lg:mt-0 lg:rounded-r-none lg:px-8 lg:py-8 ${dark ? "bg-[#333]" : "bg-white"}`}>
                    <h3 className="text-[26px] font-semibold leading-8 md:text-[32px] md:leading-10 lg:text-[40px] lg:leading-[44px]">{tariff.title}</h3>
                    <p className={`max-w-[370px] text-[15px] leading-6 ${dark ? "text-white/80" : "text-[#333]"}`}>{tariff.text}</p>
                    <ul className="flex max-w-[370px] flex-wrap gap-1">
                      {tariff.tags.map((tag) => (
                        <li
                          key={tag}
                          className={`rounded-lg px-2 py-0.5 text-[12px] leading-[18px] ${dark ? "bg-[#3d3d3d] text-white/80" : "bg-[#f2f4f7] text-[#999]"}`}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2">
                      <button type="button" onClick={() => openLead(tariff.id)} className={dark ? softBtn : blackBtn}>
                        {t.details}
                      </button>
                      <button
                        type="button"
                        aria-label={t.details}
                        onClick={() => openLead(tariff.id)}
                        className={`grid size-[52px] place-items-center rounded-full ${dark ? "bg-white" : "bg-[#ededed]"}`}
                      >
                        <InfoIcon />
                      </button>
                    </div>
                  </div>
                  <TariffArt id={tariff.id} />
                </article>
              );})}
            </div>
            </div>
          </section>

          <section id="connect" className={`${frame} py-12 md:py-16`}>
            <h2 className={sectionTitle}>{t.connectTitle}</h2>
            <div
              role="tablist"
              aria-label={t.connectTitle}
              className="mx-auto mt-6 grid h-11 w-[286px] max-w-full grid-cols-2 rounded-full bg-[#f2f4f7] p-1"
            >
              {(["online", "salon"] as const).map((id) => {
                const selected = tab === id;
                const label = id === "online" ? t.tabOnline : t.tabSalon;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setTab(id)}
                    className={`rounded-full text-[15px] font-medium ${
                      selected ? "bg-[#333] text-white" : "text-[#333]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <article className="mx-auto mt-8 flex max-w-[920px] flex-col-reverse overflow-hidden rounded-2xl bg-white lg:flex-row">
              <div className="relative z-[1] -mt-8 flex-1 rounded-2xl bg-white px-4 pb-4 pt-5 lg:mt-0 lg:px-8 lg:py-8">
                <h3 className="text-[26px] font-semibold leading-8">
                  {tab === "online" ? t.onlineTitle : t.salonTitle}
                </h3>
                <ol className="mt-4 grid gap-3">
                  {(tab === "online" ? t.onlineSteps : t.salonSteps).map((step, index) => (
                    <li key={step} className="flex gap-2.5">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#00B956] text-[13px] font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-[15px] leading-[18px]">{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tab === "online" ? (
                    <>
                      <button type="button" onClick={() => openLead(tariffId)} className={greenBtn}>
                        {t.cta}
                      </button>
                      <button type="button" onClick={() => setTab("salon")} className={`${softBtn} bg-[#ededed]`}>
                        {t.prepare}
                      </button>
                    </>
                  ) : (
                    <a href="#salons" className={greenBtn}>
                      {t.findSalon}
                    </a>
                  )}
                </div>
              </div>
              <div
                className="h-[184px] w-full overflow-hidden rounded-2xl lg:h-auto lg:w-[420px]"
                style={{
                  background:
                    "linear-gradient(278.83deg, rgba(143, 168, 216, 0.3) 0.27%, rgba(255, 255, 255, 0.3) 99.56%), #e9ebf0",
                }}
              >
                <img src={deviceSrc} alt="" className="h-full w-full object-contain" />
              </div>
            </article>
          </section>

          <section id="salons" className="bg-[#ededed] py-12 md:py-16">
            <div className={frame}>
            <h2 className={sectionTitle}>{t.mapTitle}</h2>
            <p className="mx-auto mt-4 max-w-[640px] text-center text-[15px] leading-6 text-[#333]">{t.mapLead}</p>
            <SalonMap title={t.mapSalon} subtitle={t.mapDistance} />
            </div>
          </section>

          <section id="faq" className={`${frame} py-12 md:py-16`}>
            <h2 className={sectionTitle}>{t.faqTitle}</h2>
            <div className="mx-auto max-w-[760px]">
              <FaqList items={t.faq} />
            </div>
          </section>

          <footer className="bg-[#ededed] pb-10 pt-8">
            <div className={frame}>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {t.footerGroups.map((group) => (
                <details key={group.title} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-[16px] font-medium [&::-webkit-details-marker]:hidden">
                    {group.title}
                    <img
                      src={withBase("/migrants/chevron.svg")}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="grid gap-2 pb-3">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-[15px] text-[#333]/75 hover:text-[#333]">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>

            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[16px] font-medium">{t.appTitle}</p>
                <p className="mt-1 max-w-[200px] text-[13px] leading-5 text-[#333]/70">{t.appText}</p>
                <div className="mt-4 flex gap-2">
                  <Social href="https://vk.com/megafon" label="VK">
                    VK
                  </Social>
                  <Social href="https://t.me/megafon" label="Telegram">
                    TG
                  </Social>
                  <Social href="https://ok.ru/megafon" label="OK">
                    OK
                  </Social>
                </div>
              </div>
              <img
                src={withBase("/migrants/qr.svg")}
                alt={t.appTitle}
                width={88}
                height={88}
                className="size-[88px] rounded-lg bg-white p-1"
              />
            </div>

            <a href="tel:88005500500" className="mt-6 block">
              <span className="text-[20px] font-bold tracking-tight">8 800 550-05-00</span>
              <span className="mt-0.5 block text-[13px] text-[#333]/60">{t.phoneLabel}</span>
            </a>

            <p className="mt-6 flex items-start gap-2 text-[13px] leading-5 text-[#333]/70">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#00B956] text-[10px] text-white">
                ✓
              </span>
              <span>{t.legal}</span>
            </p>
            <p className="mt-3 text-[12px] leading-4 text-[#333]/50">{t.disclaimer}</p>
            <p className="mt-4 text-[12px] text-[#333]/40">© {new Date().getFullYear()} {dict.brand}</p>
            </div>
          </footer>
        </main>
      </div>

      <Dialog open={leadOpen} onOpenChange={setLeadOpen}>
        <DialogContent className="bg-white sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-[20px] font-bold text-[#333]">{t.formTitle}</DialogTitle>
            <DialogDescription className="text-[14px] leading-5 text-[#333]/70">
              {t.formLead}
            </DialogDescription>
          </DialogHeader>
          <LeadForm
            key={`${tariffId}-${locale}`}
            copy={t}
            cityNames={dict.cityNames}
            tariffName={t.tariffs.find((item) => item.id === tariffId)?.title ?? t.tariffs[0].title}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Flag({ locale }: { locale: Locale }) {
  const clipId = useId().replace(/:/g, "");
  if (locale === "ru") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="shrink-0">
        <clipPath id={clipId}>
          <circle cx="8" cy="8" r="8" />
        </clipPath>
        <g clipPath={`url(#${clipId})`}>
          <rect width="16" height="16" fill="#fff" />
          <rect y="5.333" width="16" height="10.667" fill="#0039A6" />
          <rect y="10.667" width="16" height="5.333" fill="#D52B1E" />
        </g>
        <circle cx="8" cy="8" r="7.6" fill="none" stroke="#D3D5D6" strokeOpacity="0.8" />
      </svg>
    );
  }
  const emoji = locale === "uz" ? "🇺🇿" : locale === "tg" ? "🇹🇯" : "🇰🇬";
  return (
    <span aria-hidden className="text-[14px] leading-none">
      {emoji}
    </span>
  );
}

function TileScroller({ tiles }: { tiles: { title: string; text: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {tiles.map((tile, index) => (
          <article
            key={tile.title}
            className="flex min-h-[160px] flex-col rounded-2xl bg-[#f6f6f6] p-4"
          >
            <TileIcon index={index} />
            <h4 className="mt-3 text-[15px] font-medium leading-5">{tile.title}</h4>
            <p className="mt-1 text-[12px] leading-4 text-[#333]/70">{tile.text}</p>
          </article>
        ))}
    </div>
  );
}

function TileIcon({ index }: { index: number }) {
  const paths = [
    "M4 6.5h12v7.2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.5Zm2.2-2.2h7.6L12.2 6.5H7.8L6.2 4.3Z",
    "M10 3.2 3.8 6.2v4.2c0 3.2 2.6 5.4 6.2 6.4 3.6-1 6.2-3.2 6.2-6.4V6.2L10 3.2Z",
    "M10 3.4a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 1.6c1.2 1.5 1.9 3.3 2 5H8c.1-1.7.8-3.5 2-5Zm-2 6.4h4c-.1 1.7-.8 3.5-2 5-1.2-1.5-1.9-3.3-2-5Z",
    "M5 8.2 8.2 11.4 15 4.8",
  ];
  return (
    <span className="grid size-8 place-items-center rounded-full bg-[#00B956] text-white">
      <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d={paths[index] ?? paths[0]} strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function TariffArt({ id }: { id: "work" | "study" | "family" }) {
  const background =
    id === "family"
      ? "linear-gradient(124.37deg, #1a1a1a 0%, #595959 100%)"
      : "linear-gradient(278.83deg, rgba(143, 168, 216, 0.3) 0.27%, rgba(255, 255, 255, 0.3) 99.56%), linear-gradient(0deg, #e9ebf0, #e9ebf0)";
  return (
    <div
      className="h-[184px] w-full shrink-0 overflow-hidden rounded-2xl lg:h-auto lg:min-h-[280px] lg:w-[min(532px,46%)]"
      style={{ background }}
    >
      <img
        src={id === "work" ? heroSrc : deviceSrc}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function SalonMap({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative mt-5 h-[365px] overflow-hidden rounded-[20px] bg-[#d7e3d4]">
      <svg viewBox="0 0 328 365" className="absolute inset-0 h-full w-full" aria-hidden>
        <rect width="328" height="365" fill="#e7efe4" />
        <path d="M-10 80 C40 70 80 120 140 90 C190 66 230 40 340 78" stroke="#fff" strokeWidth="14" fill="none" />
        <path d="M20 200 H310" stroke="#fff" strokeWidth="10" />
        <path d="M70 -10 V380" stroke="#fff" strokeWidth="8" />
        <path d="M180 0 V365" stroke="#f3f7f1" strokeWidth="18" />
        <path d="M0 280 C80 250 120 310 200 270 C250 246 280 300 340 260" stroke="#c5d7c0" strokeWidth="16" fill="none" />
        <path d="M40 40 H120 V110 H40 Z" fill="#d5e6cf" />
        <path d="M210 150 H290 V230 H210 Z" fill="#d5e6cf" />
        <path d="M90 220 H170 V300 H90 Z" fill="#cfe3c8" />
      </svg>
      <Pin className="left-[28%] top-[34%]" />
      <Pin className="left-[58%] top-[48%]" active />
      <Pin className="left-[42%] top-[62%]" />
      <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <p className="text-[12px] font-medium text-[#00B956]">{subtitle}</p>
        <p className="mt-0.5 text-[16px] font-medium">{title}</p>
      </div>
    </div>
  );
}

function Pin({ className, active = false }: { className: string; active?: boolean }) {
  return (
    <span className={`absolute -translate-x-1/2 -translate-y-full ${className}`}>
      <svg width={active ? 36 : 28} height={active ? 44 : 34} viewBox="0 0 28 34" aria-hidden>
        <path d="M14 0C6.3 0 0 6.2 0 13.8 0 23.2 14 34 14 34s14-10.8 14-20.2C28 6.2 21.7 0 14 0Z" fill="#00B956" />
        <circle cx="14" cy="13.5" r="5" fill="#fff" />
      </svg>
    </span>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-4 divide-y divide-black/10 border-y border-black/10">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
              className="flex w-full items-start justify-between gap-3 py-4 text-left text-[16px] font-medium leading-6"
            >
              <span>{item.q}</span>
              <img
                src={withBase("/migrants/chevron.svg")}
                alt=""
                width={20}
                height={20}
                className={`mt-0.5 size-5 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
            {expanded ? (
              <p className="pb-4 text-[15px] leading-6 text-[#333]/75">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full bg-white text-[11px] font-bold text-[#333] ring-1 ring-black/10"
    >
      {children}
    </a>
  );
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden fill="none">
      <circle cx="10" cy="10" r="7.25" stroke="#333" strokeWidth="1.5" />
      <path d="M10 9.1V14" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6.4" r="0.9" fill="#333" />
    </svg>
  );
}

function LeadForm({
  copy,
  cityNames,
  tariffName,
}: {
  copy: (typeof migrantCopy)["ru"];
  cityNames: Record<string, string>;
  tariffName: string;
}) {
  const nameId = useId();
  const phoneId = useId();
  const cityId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState<string>(cities[0]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2 || digits.length < 10) {
      setError(copy.formError);
      return;
    }
    setError("");
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSending(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-[#e9f9f0] p-4">
        <CheckCircle2 className="size-7 text-[#00B956]" aria-hidden />
        <p className="mt-2 text-[16px] font-medium">{copy.formSuccessTitle}</p>
        <p className="mt-1 text-[14px] leading-5 text-[#333]/75">{copy.formSuccessText}</p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setName("");
            setPhone("");
          }}
          className="mt-3 text-[14px] font-medium text-[#00B956]"
        >
          {copy.formAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" noValidate>
      <p className="text-[13px] font-medium text-[#00B956]">{tariffName}</p>
      <label className="grid gap-1 text-[13px] font-medium" htmlFor={nameId}>
        {copy.formName}
        <input
          id={nameId}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-11 rounded-xl border border-black/10 px-3 text-[16px] font-normal outline-none focus:border-[#00B956]"
          required
        />
      </label>
      <label className="grid gap-1 text-[13px] font-medium" htmlFor={phoneId}>
        {copy.formPhone}
        <input
          id={phoneId}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+7"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="h-11 rounded-xl border border-black/10 px-3 text-[16px] font-normal outline-none focus:border-[#00B956]"
          required
        />
      </label>
      <label className="grid gap-1 text-[13px] font-medium" htmlFor={cityId}>
        {copy.formCity}
        <select
          id={cityId}
          name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          className="h-11 rounded-xl border border-black/10 bg-white px-3 text-[16px] font-normal outline-none focus:border-[#00B956]"
        >
          {cities.map((id) => (
            <option key={id} value={id}>
              {cityNames[id] ?? id}
            </option>
          ))}
        </select>
      </label>
      {error ? <p className="text-[13px] text-[#c62828]">{error}</p> : null}
      <button
        type="submit"
        disabled={sending}
        className="h-[52px] rounded-xl bg-[#00B956] text-[15px] font-medium text-white disabled:opacity-70"
      >
        {sending ? copy.formSending : copy.formSubmit}
      </button>
    </form>
  );
}
