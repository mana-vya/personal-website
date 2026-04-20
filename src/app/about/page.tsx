import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Manav Yadav",
  description:
    "About Manav Yadav and the newsletter.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mb-14 animate-fade-up">
        <h1 className="text-[3.25rem] leading-[1.08] tracking-[-0.03em] mb-8">
          <span className="block font-light text-foreground">About</span>
          <span className="block font-semibold text-foreground">this newsletter</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[380px]">
          Who writes it and why.
        </p>
      </section>

      <hr className="border-border mb-12 animate-fade-up delay-1" />

      {/* Who — 01 */}
      <section className="mb-12 animate-fade-up delay-2">
        <p className="text-xs text-muted-foreground mb-6 tabular-nums">01</p>

        <div className="prose-clean">
          <p>
            I&apos;m Manav — a software engineer and occasional writer based in
            Bengaluru. I think a lot about how technology changes the texture of
            everyday life, about cities as systems of memory and desire, and
            about what it means to pay attention in a world designed to fragment
            it.
          </p>
          <p>
            By day I build software. This newsletter is the other side of that
            — slower, less optimized, more willing to sit with a question rather
            than answer it quickly.
          </p>
        </div>
      </section>

      <hr className="border-border mb-12" />

      {/* What — 02 */}
      <section className="mb-12 animate-fade-up delay-3">
        <p className="text-xs text-muted-foreground mb-6 tabular-nums">02</p>

        <h2 className="text-[0.9375rem] font-medium text-foreground mb-4">
          What this newsletter is
        </h2>

        <div className="prose-clean">
          <p>
            Short essays, usually 1,000–2,500 words. Personal in perspective
            but not confessional in form. I write about ideas — technology,
            urbanism, attention, language, work — through the lens of lived
            experience.
          </p>
          <p>
            I publish irregularly, when I have something worth saying. No
            schedule. No hot takes. No roundups. Just writing that holds up on
            re-reading a year later.
          </p>
        </div>
      </section>

      <hr className="border-border mb-12" />

      {/* Subscribe — 03 */}
      <section className="animate-fade-up delay-4">
        <p className="text-xs text-muted-foreground mb-7 tabular-nums">03</p>
        <SubscribeForm />
      </section>
    </SiteLayout>
  );
}
