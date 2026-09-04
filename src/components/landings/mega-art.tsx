import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Decorative Mega 5G glow — purple/green brand gradients like the 5G hero art. */
export function MegaGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block",
        className,
      )}
    >
      <div className="absolute right-6 top-1/2 size-[280px] -translate-y-1/2 rounded-full bg-[linear-gradient(45deg,#731982_40%,#AA5AFF)] opacity-90 blur-2xl" />
      <div className="absolute right-24 top-[28%] size-[160px] rounded-full bg-[linear-gradient(45deg,#00B956_45%,#1EFA64)] opacity-80 blur-xl" />
      <div className="absolute bottom-10 right-16 size-[90px] rounded-full bg-[#00D1FF]/50 blur-lg" />
    </div>
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
        "inline-flex size-14 items-center justify-center rounded-[20px]",
        tone === "green" ? "bg-[#DDFFEC] text-[#00B956]" : "bg-[#F2E5FF] text-[#731982]",
      )}
    >
      {children}
    </span>
  );
}
