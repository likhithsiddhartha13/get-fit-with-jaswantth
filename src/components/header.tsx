"use client";

import { useEffect, useState } from "react";
import { nav, siteConfig } from "@/config/site";
import { ApplyLink, ghostCtaClass } from "@/components/ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-gradient-to-b from-background/90 via-background/55 to-transparent py-5 container-px md:py-6">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        className="group flex items-center gap-3"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex w-6 flex-col gap-[5px]">
          <span className="block h-[2px] w-full bg-foreground transition-colors group-hover:bg-accent-bright" />
          <span className="block h-[2px] w-full bg-foreground transition-colors group-hover:bg-accent-bright" />
          <span className="block h-[2px] w-4 bg-foreground transition-colors group-hover:bg-accent-bright" />
        </span>
        <span className="text-left leading-none">
          <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/70">
            Get Fit with
          </span>
          <span className="mt-1 block font-display text-sm font-bold uppercase tracking-[0.08em] md:text-base">
            Jaswantth
          </span>
        </span>
      </button>

      <ApplyLink className={`${ghostCtaClass} hidden sm:inline-flex`}>
        Apply / book a call
      </ApplyLink>

      {open ? (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-background container-px"
        >
          <div className="flex items-center justify-between py-5">
            <p className="font-display text-sm font-bold uppercase tracking-[0.08em]">
              {siteConfig.name}
            </p>
            <button
              type="button"
              className="text-xs font-semibold uppercase tracking-[0.08em]"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-6" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-4xl font-bold tracking-[-0.03em] hover:text-accent-bright"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pb-10">
            <ApplyLink
              className={`${primaryCtaOnDark} w-full`}
              onClick={() => setOpen(false)}
            >
              Apply / book a call
            </ApplyLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

const primaryCtaOnDark =
  "inline-flex items-center justify-center bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-foreground";
