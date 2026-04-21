import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Manav Yadav",
  description: "About Manav Yadav.",
};

export default function AboutPage() {
  return (
    <SiteLayout crumbs={[{ label: "HOME", href: "/" }, { label: "ABOUT", href: "/about" }]}>

      <section className="animate-in">
        <p style={{ marginBottom: "0.75em" }}>
          I&apos;m Manav Yadav, a Bengaluru-based{" "}
          <em>software engineer</em>,{" "}
          <em>writer</em>, and{" "}
          <em>careful observer of cities</em>.
        </p>
        <p style={{ marginBottom: "0.75em" }}>
          I like my code thoughtful, my essays long, and my coffee strong.
        </p>
      </section>

      {/* I'M WRITING */}
      <section className="animate-in delay-1 mt-12">
        <p className="section-label mb-4">I&apos;m Writing</p>

        <p style={{ marginBottom: "0.75em" }}>
          This newsletter is where I think slowly in public. Essays on
          technology, cities, attention, language — through the lens of
          lived experience.
        </p>
        <p style={{ marginBottom: "0.75em" }}>
          I work in software by day and find that it shapes how I see
          everything else: cities as systems, attention as a resource,
          language as interface.
        </p>
        <p>
          I publish when I have something worth saying. No schedule,
          no hot takes, no weekly roundups. Just writing that holds up on
          re-reading a year later.
        </p>
      </section>

      {/* I'M SUBSCRIBABLE */}
      <section className="animate-in delay-2 mt-12 mb-16">
        <p className="section-label mb-4">I&apos;m Subscribable</p>
        <p style={{ marginBottom: "1em" }}>
          Get new essays in your inbox — occasionally, never on a schedule.
        </p>
        <div className="mt-5">
          <SubscribeForm />
        </div>
      </section>

    </SiteLayout>
  );
}
