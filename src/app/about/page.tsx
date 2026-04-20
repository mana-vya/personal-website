import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Manav Yadav",
  description: "About Manav Yadav and the newsletter.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mb-16 animate-fade-up">
        <h1 className="text-[3.5rem] leading-[1.06] tracking-[-0.035em] mb-9">
          <span className="block font-extralight text-foreground">About</span>
          <span className="block font-semibold text-foreground">this newsletter</span>
        </h1>
        <p className="text-[0.8125rem] text-muted-foreground leading-relaxed max-w-[340px]">
          Who writes it and why.
        </p>
      </section>

      <hr className="border-border mb-16 animate-fade-up delay-1" />

      {/* 01 — Who */}
      <section className="mb-16 animate-fade-up delay-2">
        <p className="text-[11px] text-muted-foreground mb-8 tabular-nums tracking-wider">01</p>

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

      <hr className="border-border mb-16" />

      {/* 02 — What */}
      <section className="mb-16 animate-fade-up delay-3">
        <p className="text-[11px] text-muted-foreground mb-8 tabular-nums tracking-wider">02</p>

        <h2 className="text-[0.9375rem] font-medium text-foreground mb-4 tracking-tight">
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

      <hr className="border-border mb-16" />

      {/* 03 — Subscribe */}
      <section className="animate-fade-up delay-4 pb-20">
        <p className="text-[11px] text-muted-foreground mb-8 tabular-nums tracking-wider">03</p>
        <SubscribeForm />
      </section>
    </SiteLayout>
  );
}
