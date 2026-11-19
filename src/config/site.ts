/**
 * Site-wide settings.
 * Point CTAs at a real booking page later by replacing `bookingUrl`
 * (for example a Calendly link). "#apply" scrolls to the on-page section.
 */
export const siteConfig = {
  name: "Get Fit with Jaswantth",
  title: "Get Fit with Jaswantth",
  description:
    "I help working professionals who've made it in their career finally get fit. The 90-Day Total Reset — training that fits a 9-to-6, nutrition that works with Indian food, and weekly check-ins.",
  location: "Hyderabad, India",
  bookingUrl: "#apply",
  /** Shown until a real fee is ready. Leave as a placeholder. */
  priceLabel: "Price — placeholder",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
} as const;

export const nav = [
  { href: "#results", label: "Results" },
  { href: "#coaching", label: "Coaching" },
  { href: "#apply", label: "Apply" },
] as const;

export function isExternalUrl(url: string) {
  return /^https?:\/\//.test(url);
}
