# Get Fit with Jaswantth

Marketing site for Jaswantth, an online fitness coach based in Hyderabad. Dark purple layout, built with Next.js, TypeScript, and Tailwind.

The page is for working professionals who did well in their career and want to get fit around a real job. The offer on the page is **The 90-Day Total Reset**. Testimonials, photos, the price, and the booking link are placeholders.

## Preview

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Deploy

The app is a standard Next.js project.

- **Vercel:** import the repo and deploy. No extra config.
- **Any Node host:** `npm run build` then `npm start` (port 43123).

## What to replace before launch

| Placeholder | Where |
| --- | --- |
| Booking / Calendly link | `bookingUrl` in `src/config/site.ts` (currently `#apply`) |
| Price | `priceLabel` in `src/config/site.ts` |
| Coach photo | Hero label “Coach photo — placeholder” |
| Client videos | Proof section, “Video — placeholder” |
| Testimonials | Results cards: “Client name – placeholder” |
| Win photos | “Photo — placeholder” grid |
| Training photos | Coaching section |
| Instagram, YouTube, WhatsApp | `socials` in `src/config/site.ts` |
| Privacy and Terms pages | `legal` in `src/config/site.ts` |

## Sections

1. Header
2. Hero
3. Proof (client videos)
4. Results (testimonials)
5. Client wins
6. The 90-Day Total Reset
7. This is for / This is not for
8. Mid-page call to action
9. Apply / book a call
10. Footer
