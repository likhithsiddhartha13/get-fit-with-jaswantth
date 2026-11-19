import { nav, siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/header";
import {
  ApplyLink,
  PhotoPlaceholder,
  SectionHeading,
  primaryCtaClass,
} from "@/components/ui";

const testimonials = [
  { quote: "Testimonial — placeholder", detail: "Detail — placeholder" },
  { quote: "Testimonial — placeholder", detail: "Detail — placeholder" },
  { quote: "Testimonial — placeholder", detail: "Detail — placeholder" },
  { quote: "Testimonial — placeholder", detail: "Detail — placeholder" },
  { quote: "Testimonial — placeholder", detail: "Detail — placeholder" },
];

const wins = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/5]",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-[4/5]",
];

const steps = [
  {
    n: "01",
    when: "Training",
    title: "Built around a 9-to-6",
    body: "Custom training that fits the job. A few hours a week, not a second life in the gym.",
  },
  {
    n: "02",
    when: "Food",
    title: "Indian food stays",
    body: "Nutrition that works with Indian food.",
  },
  {
    n: "03",
    when: "Every week",
    title: "Check-ins and accountability",
    body: "A weekly check-in so a long week at work doesn't wipe the plan.",
  },
  {
    n: "04",
    when: "Day 90",
    title: "Look and feel different",
    body: "Look, feel, and carry yourself like a different person.",
  },
];

const forYou = [
  "Working professionals who've made it in their career",
  "Men who tried the gym and didn't stick",
  "People who want to get fit without quitting their job",
  "Anyone who can give a few hours a week",
];

const notForYou = [
  "A quick fix",
  "People who want to live in the gym",
  "Crash diets",
  "A plan with nobody checking in",
];

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Proof />
        <Results />
        <Wins />
        <Coaching />
        <Fit />
        <Qualify />
        <Apply />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 72% 28%, rgba(122,64,184,0.55), transparent 32%), radial-gradient(circle at 80% 70%, rgba(91,42,134,0.45), transparent 28%), linear-gradient(180deg, #1a0e2e 0%, #0c0814 78%)",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 640 900"
        className="absolute bottom-0 right-[-4%] hidden h-[96%] w-auto md:block"
      >
        <path
          d="M150 900C190 560 230 248 340 236c110 12 160 324 200 664H150Z"
          fill="#5b2a86"
        />
        <circle cx="340" cy="168" r="78" fill="#8b5cc4" />
      </svg>
      <p className="absolute right-6 top-24 z-10 text-[10px] font-medium uppercase tracking-[0.14em] text-accent-bright md:right-12 md:top-28">
        Coach photo — placeholder
      </p>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(12,8,20,0.92) 0%, rgba(12,8,20,0.55) 42%, rgba(12,8,20,0.28) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[34rem] w-[54rem] rounded-full bg-accent/20 blur-[120px]"
      />
      <div className="relative z-10 w-full pb-16 pt-40 container-px md:pb-24">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.08em] text-accent-bright md:text-sm">
          1-on-1 coaching
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
          I help working professionals who&apos;ve made it in their career{" "}
          <span className="text-accent-bright">finally get fit.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted text-balance md:text-lg">
          You made it in your career. You cracked DSA, landed the job, moved
          abroad. Now it&apos;s time to fix your body.
        </p>
        <p className="mt-5 text-sm font-medium text-foreground/70">
          <span className="text-accent-bright">90 days</span>
          <span className="mx-2 text-foreground/30">·</span>
          Fits a 9-to-6
          <span className="mx-2 text-foreground/30">·</span>
          Weekly check-ins
        </p>
        <div className="mt-10">
          <ApplyLink className={`${primaryCtaClass} w-full sm:w-auto`}>
            Apply / book a call
          </ApplyLink>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section
      id="proof"
      className="scroll-mt-24 border-t border-foreground/10 py-24 container-px md:py-32"
    >
      <SectionHeading eyebrow="Proof, not promises" title="Hear it from clients" />
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-6">
        {["Client name – placeholder", "Client name – placeholder"].map(
          (name, index) => (
            <figure
              key={index}
              className="border border-foreground/15 bg-surface"
            >
              <PhotoPlaceholder
                label="Video — placeholder"
                className="aspect-video"
              />
              <figcaption className="border-t border-foreground/10 px-5 py-4 text-xs font-medium uppercase tracking-[0.08em] text-muted">
                {name}
              </figcaption>
            </figure>
          ),
        )}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section
      id="results"
      className="scroll-mt-24 border-t border-foreground/10 py-24 container-px md:py-32"
    >
      <SectionHeading eyebrow="Real clients. Real results." title="Results">
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Placeholder testimonials. Swap in real client stories later.
        </p>
      </SectionHeading>
      <ul className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {testimonials.map((item, index) => (
          <li key={index}>
            <article className="flex h-full flex-col border border-foreground/15 bg-surface">
              <PhotoPlaceholder
                label="Photo — placeholder"
                className="aspect-[4/5] w-full"
              />
              <div className="flex grow flex-col p-6 md:p-7">
                <p className="font-display text-lg font-medium leading-snug tracking-[-0.01em]">
                  {item.quote}
                </p>
                <div className="mt-6">
                  <p className="text-sm font-medium">Client name – placeholder</p>
                  <p className="mt-1 text-xs text-foreground/70">{item.detail}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Wins() {
  return (
    <section
      id="wins"
      className="scroll-mt-24 border-t border-foreground/10 py-24 container-px md:py-32"
    >
      <SectionHeading eyebrow="From the group" title="Client wins">
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Photo placeholders. Real win photos go here.
        </p>
      </SectionHeading>
      <div className="mx-auto mt-12 max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {wins.map((aspect, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <PhotoPlaceholder
              label="Photo — placeholder"
              className={`${aspect} border border-foreground/15`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Coaching() {
  return (
    <section
      id="coaching"
      className="scroll-mt-24 border-t border-foreground/10 py-24 container-px md:py-32"
    >
      <SectionHeading
        eyebrow="How coaching works"
        title="The 90-Day Total Reset"
        align="left"
      >
        <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">
          In 90 days, look, feel and carry yourself like a different person
          without quitting your job, starving yourself or living in the gym.
        </p>
      </SectionHeading>
      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-24 lg:self-start">
          <PhotoPlaceholder
            label="Training photo — placeholder"
            className="mt-8 aspect-[3/4]"
          />
          <PhotoPlaceholder
            label="Training photo — placeholder"
            className="aspect-[3/4]"
          />
        </div>
        <ol className="flex flex-col gap-5">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex gap-6 border border-foreground/10 bg-surface p-6 md:p-8"
            >
              <span className="shrink-0 font-display text-3xl font-bold text-accent-bright md:text-4xl">
                {step.n}
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-foreground/60">
                  {step.when}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.01em] md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section className="scroll-mt-24 border-t border-foreground/10 py-24 container-px md:py-32">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-foreground/10 pb-12 md:border-b-0 md:border-r md:pb-0 md:pr-12">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.08em] text-accent-bright">
            This is for
          </h2>
          <ul className="space-y-5">
            {forYou.map((item) => (
              <li
                key={item}
                className="font-display text-lg font-bold leading-snug tracking-[-0.01em] md:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-12 md:pl-12 md:pt-0">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.08em] text-foreground/55">
            This is not for
          </h2>
          <ul className="space-y-5">
            {notForYou.map((item) => (
              <li
                key={item}
                className="font-display text-lg font-bold leading-snug tracking-[-0.01em] text-foreground/55 md:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Qualify() {
  return (
    <section className="border-t border-foreground/10 py-16 container-px md:py-20">
      <div className="flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-8">
        <p className="text-lg text-muted md:text-xl">Ready to get fit?</p>
        <ApplyLink className={primaryCtaClass}>Apply / book a call</ApplyLink>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section
      id="apply"
      className="scroll-mt-24 border-t border-foreground/10 py-24 container-px md:py-32"
    >
      <SectionHeading eyebrow="Next step" title="Apply / book a call">
        <p className="mx-auto mt-6 max-w-md text-muted">
          15 minutes. We&apos;ll see if the 90-Day Total Reset fits your week.
        </p>
      </SectionHeading>
      <div className="mx-auto mt-12 max-w-2xl border border-foreground/15 bg-foreground/[0.02] p-8 text-center md:p-12">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent-bright">
          The 90-Day Total Reset
        </p>
        <ul className="mt-6 space-y-3 text-base text-foreground/80 md:text-lg">
          <li>Custom training that fits a 9-to-6</li>
          <li>Nutrition that works with Indian food</li>
          <li>Weekly check-ins and accountability</li>
        </ul>
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.08em] text-accent-bright">
          {siteConfig.priceLabel}
        </p>
        <div className="mt-8">
          <ApplyLink className={primaryCtaClass}>Apply / book a call</ApplyLink>
        </div>
        <p className="mt-6 text-xs text-foreground/55">
          Booking link — placeholder
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 container-px">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold uppercase tracking-[0.08em]">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-xs text-foreground/55">
            Online coaching from {siteConfig.location}
          </p>
        </div>
        <div className="text-center sm:text-right">
          <ul className="flex gap-6 text-xs font-medium uppercase tracking-[0.08em]">
            {siteConfig.socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-accent-bright">
                  {item.label}
                  <span className="sr-only"> — placeholder</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-foreground/40">
            Social links — placeholder
          </p>
        </div>
      </div>
      <ul className="mt-6 flex justify-center gap-6 text-xs text-foreground/40 sm:justify-end">
        {siteConfig.legal.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-foreground">
              {item.label}
              <span className="sr-only"> — placeholder</span>
            </a>
          </li>
        ))}
      </ul>
      <nav className="sr-only" aria-label="Page sections">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
