import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import { CompanyBadge } from "@/components/company-badge";
import { getAllPosts } from "@/lib/posts";

function shortDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d
    .toLocaleString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();
}

export default function Home() {
  const posts = getAllPosts();

  return (
    <SiteLayout crumbs={[{ label: "HOME", href: "/" }]}>

      {/* ── Intro ── */}
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

      {/* ── I'M EMPLOYED ── */}
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
          like{" "}
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>VIP</span>,{" "}
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Builder Projects</span>,
          and a{" "}
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Social Media CRM</span>.
        </p>

        <p>
          I also worked at{" "}
          <CompanyBadge icon="🔵" name="Samsung" />{" "}
          where I experimented with MMI.
        </p>
      </section>

      {/* ── I'M BUILDING ── */}
      <section className="animate-in delay-2 mt-12">
        <p className="section-label mb-5">I&apos;m Building</p>

        <p>
          I&apos;m starting{" "}
          <CompanyBadge icon="😈" name="Satan Works" />{" "}
          — designing and selling niche-themed journals, handling everything
          from design and marketing to, well, everything.
        </p>
      </section>

      {/* ── I'M EDUCATED ── */}
      <section className="animate-in delay-2 mt-12">
        <p className="section-label mb-5">I&apos;m Educated</p>

        <p>
          I graduated from{" "}
          <CompanyBadge icon="🎓" name="IIT Guwahati" />{" "}
          in &apos;23 with a Bachelor&apos;s in Design. I worked with{" "}
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Abhishek Shrivastava</span>{" "}
          on underwater ROV controls.
        </p>
      </section>

      {/* ── I'M WRITING ── */}
      <section className="animate-in delay-3 mt-12">
        <p className="section-label mb-5">I&apos;m Writing</p>

        <p style={{ marginBottom: "1.2em" }}>
          I&apos;m writing and documenting my journey — blog posts and videos
          on design, building products, and everything I&apos;m figuring out
          along the way.
        </p>

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="post-row"
              style={{ textDecoration: "none" }}
            >
              <span>
                <span className="row-org">{shortDate(post.dateISO)}</span>
                <span style={{ color: "#bbb", margin: "0 0.35em" }}>/</span>
                <span className="row-title">{post.title}</span>
              </span>
              <span className="row-meta">{post.readingTime}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── I'M SUBSCRIBABLE ── */}
      <section className="animate-in delay-4 mt-12 mb-20">
        <p className="section-label mb-5">I&apos;m Subscribable</p>
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
