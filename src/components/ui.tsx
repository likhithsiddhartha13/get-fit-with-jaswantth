import { isExternalUrl, siteConfig } from "@/config/site";

const ctaBase =
  "relative items-center justify-center text-center font-sans font-semibold uppercase tracking-[0.08em] transition-[background-color,color,border-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright";

export const primaryCtaClass = `${ctaBase} inline-flex bg-accent px-9 py-4 text-sm text-foreground shadow-[0_0_36px_-8px_rgba(91,42,134,0.8)] hover:bg-foreground hover:text-background md:px-10 md:py-5 md:text-base`;

export const ghostCtaClass = `${ctaBase} border border-foreground/40 px-6 py-3 text-xs text-foreground hover:border-foreground hover:bg-foreground/5`;

export function ApplyLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const external = isExternalUrl(siteConfig.bookingUrl);

  return (
    <a
      href={siteConfig.bookingUrl}
      className={className}
      onClick={onClick}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="relative">{children}</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  children,
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  children?: React.ReactNode;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.08em] text-accent-bright md:text-sm">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground md:text-5xl">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden bg-surface ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 28%, rgba(122,64,184,0.5), transparent 46%), linear-gradient(165deg, #2a1848 0%, #120a1c 74%)",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 200 240"
        className="absolute left-1/2 top-[12%] h-[62%] w-auto -translate-x-1/2 opacity-80"
      >
        <circle cx="100" cy="46" r="26" fill="#c9a6f5" />
        <path d="M52 230c8-62 24-96 48-96s40 34 48 96" fill="#6b3aa3" />
      </svg>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0814] to-transparent"
      />
      <span className="absolute inset-x-3 bottom-3 z-10 text-[10px] font-medium uppercase tracking-[0.14em] text-accent-bright">
        {label}
      </span>
    </div>
  );
}
