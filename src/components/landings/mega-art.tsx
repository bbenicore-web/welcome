import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { mf } from "@/components/landings/mf";
import { cn } from "@/lib/utils";
import { withBase } from "@/lib/base-path";

export type MegaArtId = "promo" | "internet" | "base";

export const megaArts: Record<MegaArtId, string> = {
  promo: "/mega-5g/promo.webp",
  internet: "/mega-5g/internet.webp",
  base: "/mega-5g/base5g.webp",
};

/** Chrome 3D render on a light Mega 5G well. Black in the PNG drops out via screen blend. */
export function MegaArt({
  art,
  className,
  imgClassName,
}: {
  art: MegaArtId;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn(mf.well, className)}>
      <img
        src={withBase(megaArts[art])}
        alt=""
        className={cn(
          "pointer-events-none absolute inset-0 size-full object-cover object-center mix-blend-screen",
          imgClassName,
        )}
      />
    </div>
  );
}

export function MegaHero({
  kicker,
  title,
  subtitle,
  actions,
  art = "promo",
}: {
  kicker?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  art?: MegaArtId;
}) {
  return (
    <section className={`${mf.hero} px-6 py-10 sm:px-10 lg:min-h-[480px] lg:px-16 lg:py-0`}>
      <div className="relative z-10 flex min-h-[280px] flex-col justify-center gap-12 lg:min-h-[480px] lg:max-w-[380px]">
        <div className="flex flex-col gap-6">
          {kicker ? <p className={mf.kicker}>{kicker}</p> : null}
          <h1 className={mf.h1}>{title}</h1>
          {subtitle ? (
            <p className="text-[18px] font-medium leading-7 tracking-[0.5px] text-[#333] sm:text-[20px] sm:leading-7">
              {subtitle}
            </p>
          ) : null}
        </div>
        {actions}
      </div>
      <MegaArt
        art={art}
        className="relative mt-8 h-[220px] rounded-[24px] sm:h-[280px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[50%] lg:rounded-none"
      />
    </section>
  );
}

export function RtbCard({
  href,
  title,
  text,
  cta,
  art,
}: {
  href: string;
  title: string;
  text: string;
  cta: string;
  art: MegaArtId;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-[220px] overflow-hidden rounded-[24px] bg-[#F2F4F7] transition hover:brightness-[0.98]"
    >
      <div className="flex w-[58%] flex-col gap-3 py-6 pl-6 pr-2">
        <h2 className="text-[20px] font-medium leading-7 tracking-[0.5px]">{title}</h2>
        <p className="flex-1 text-[15px] leading-6 text-[#333]/80">{text}</p>
        <p className="text-[15px] font-medium text-[#333]">{cta} →</p>
      </div>
      <MegaArt art={art} className="relative w-[42%] self-stretch" />
    </a>
  );
}

export function SpeedTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#00B956] py-[3px] pl-2 pr-1 text-[12px] font-medium leading-[14px] text-white">
      {label}
      <img
        src={withBase("/mega-5g/tag-speed.svg")}
        alt=""
        className="size-[20px] w-[22px] overflow-clip"
      />
    </span>
  );
}

export function CtaRow({
  label,
  onClick,
  href,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const button = href ? (
    <Button render={<a href={href} />} className={mf.btnLine}>
      {label}
    </Button>
  ) : (
    <Button onClick={onClick} className={mf.btnLine}>
      {label}
    </Button>
  );
  const arrow = href ? (
    <Button render={<a href={href} />} className={mf.btnArrow} aria-label={label}>
      <img src={withBase("/mega-5g/arrow.svg")} alt="" className="size-5" />
    </Button>
  ) : (
    <Button onClick={onClick} className={mf.btnArrow} aria-label={label}>
      <img src={withBase("/mega-5g/arrow.svg")} alt="" className="size-5" />
    </Button>
  );
  return (
    <div className="flex items-start gap-3">
      {button}
      {arrow}
    </div>
  );
}

export function ProfileCard({
  title,
  subtitle,
  tag,
  badges,
  price,
  period = "за 30 дней",
  cta,
  onCta,
  art,
}: {
  title: string;
  subtitle: string;
  tag?: string;
  badges?: string[];
  price: string;
  period?: string;
  cta: string;
  onCta: () => void;
  art: MegaArtId;
}) {
  return (
    <article className="flex overflow-hidden rounded-[20px] bg-white ring-1 ring-[#EDEDED] max-lg:flex-col">
      <div className="flex flex-1 flex-col justify-between gap-8 p-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[28px] font-semibold leading-10 tracking-[0.5px] sm:text-[32px]">
              {title}
            </h3>
            {tag ? <SpeedTag label={tag} /> : null}
          </div>
          <p className="max-w-[370px] text-[18px] leading-6">{subtitle}</p>
          {badges?.length ? (
            <div className="flex max-w-[370px] flex-wrap gap-1">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg bg-[#F2F4F7] px-2 py-0.5 text-[12px] leading-[18px] text-[#616C82]"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-6">
          <p className="flex flex-wrap items-baseline gap-1 text-[18px] font-medium">
            <span>{price}</span>
            <span className="text-[#8F96A4]">{period}</span>
          </p>
          <CtaRow label={cta} onClick={onCta} />
        </div>
      </div>
      <MegaArt
        art={art}
        className="h-[220px] w-full lg:h-auto lg:min-h-[420px] lg:w-1/2 lg:rounded-[24px]"
      />
    </article>
  );
}

export function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#00B956] text-sm font-medium text-white">
      {n}
    </span>
  );
}

export function IconWell({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "purple";
}) {
  return (
    <span
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-[8px]",
        tone === "green" ? "bg-[#DDFFEC] text-[#00B956]" : "bg-[#F2F4F7] text-[#333]",
      )}
    >
      {children}
    </span>
  );
}
