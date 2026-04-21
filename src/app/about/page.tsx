import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import { CompanyBadge } from "@/components/company-badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Manav Yadav",
  description:
    "India-based designer, vibe coder, and serial builder. Senior Product Designer at Tessell. IIT Guwahati '23.",
};

export default function AboutPage() {
  return (
    <SiteLayout
      crumbs={[
        { label: "HOME", href: "/" },
        { label: "ABOUT", href: "/about" },
      ]}
    >
      <section className="animate-in mb-2">
        <p style={{ marginBottom: "0.75em" }}>
          I&apos;m Manav, India-based{" "}
          <em>designer</em>,{" "}
          <em>vibe coder</em>, and{" "}
          <em>serial builder</em>.
        </p>
        <p>
          I like my coffee cold and strong, my side projects unfinished,
          and my photos sharp.
        </p>
      </section>

      <section className="animate-in delay-1 mt-12">
        <p className="section-label mb-5">I&apos;m Employed</p>

        <p style={{ marginBottom: "0.9em" }}>
          I work at{" "}
          <CompanyBadge icon="🗜️" name="Tessell" />{" "}
          as a Senior Product Designer building a stealth AI dev tool.
        </p>

        <p style={{ marginBottom: "0.9em" }}>
          I used to work at{" "}
          <CompanyBadge icon="🏠" name="NoBroker" />{" "}
          where I worked on making it profitable. I shipped some big hits
          like VIP, Builder Projects, and a Social Media CRM tool.
        </p>

        <p>
          I also worked at{" "}
          <CompanyBadge icon="🔵" name="Samsung" />{" "}
          where I experimented with MMI.
        </p>
      </section>

      <section className="animate-in delay-2 mt-12">
        <p className="section-label mb-5">I&apos;m Building</p>

        <p>
          I&apos;m starting{" "}
          <CompanyBadge icon="😈" name="Satan Works" />{" "}
          — designing and selling niche-themed journals, handling everything
          from design and marketing to, well, everything.
        </p>
      </section>

      <section className="animate-in delay-2 mt-12">
        <p className="section-label mb-5">I&apos;m Educated</p>

        <p>
          I graduated from{" "}
          <CompanyBadge icon="🎓" name="IIT Guwahati" />{" "}
          in &apos;23 with a Bachelor&apos;s in Design. I worked with
          Abhishek Shrivastava on underwater ROV controls.
        </p>
      </section>

      <section className="animate-in delay-3 mt-12 mb-20">
        <p className="section-label mb-5">I&apos;m Subscribable</p>
        <p style={{ marginBottom: "1em" }}>
          Get my writing in your inbox — occasionally, never on a schedule.
        </p>
        <div className="mt-5">
          <SubscribeForm />
        </div>
      </section>
    </SiteLayout>
  );
}
