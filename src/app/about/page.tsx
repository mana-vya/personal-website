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
        <h1
          className="mb-7 leading-[1.05]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span
            className="block"
            style={{ fontSize: "4.75rem", fontWeight: 300, fontStyle: "italic", color: "#1C1510" }}
          >
            About
          </span>
          <span
            className="block"
            style={{ fontSize: "4.75rem", fontWeight: 700, color: "#1C1510", letterSpacing: "-0.025em" }}
          >
            this notebook
          </span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "0.875rem",
            color: "#9A8B78",
            fontStyle: "italic",
          }}
        >
          Who writes it and why.
        </p>
      </section>

      <div className="mb-16 animate-fade-up delay-1" style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }} />

      {/* 01 */}
      <section className="mb-16 animate-fade-up delay-2">
        <p
          className="mb-8"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.8125rem",
            color: "#8B1C2B",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          01
        </p>
        <div className="prose-notebook">
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

      <div className="mb-16" style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }} />

      {/* 02 */}
      <section className="mb-16 animate-fade-up delay-3">
        <p
          className="mb-8"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.8125rem",
            color: "#8B1C2B",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          02
        </p>
        <h2
          className="mb-5"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.5rem",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#1C1510",
          }}
        >
          What this newsletter is
        </h2>
        <div className="prose-notebook">
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

      <div className="mb-16" style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }} />

      {/* 03 */}
      <section className="animate-fade-up delay-4 pb-24">
        <p
          className="mb-8"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.8125rem",
            color: "#8B1C2B",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          03
        </p>
        <SubscribeForm />
      </section>

    </SiteLayout>
  );
}
