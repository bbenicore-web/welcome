export function MegafonMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      <path
        d="M7.4 22.2V9.8l8.6 9.1 8.6-9.1v12.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MegafonWordmark({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold ${className ?? ""}`}>
      <MegafonMark className="size-8 text-[#00B956]" />
      <span className="tracking-tight">{label}</span>
    </span>
  );
}
