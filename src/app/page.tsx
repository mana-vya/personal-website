import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
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
      <section className="animate-in mb-10">
        <p style={{ marginBottom: "0.75em" }}>
          I&apos;m Manav Yadav, a Bengaluru-based{" "}
          <em>software engineer</em>,{" "}
          <em>writer</em>, and{" "}
          <em>careful observer of cities</em>.
        </p>
        <p style={{ marginBottom: 0 }}>
          I like my code thoughtful, my essays long, and my coffee strong.
        </p>
      </section>

      {/* ── I'M WRITING ── */}
      <section className="animate-in delay-1 mb-3 mt-12">
        <p className="section-label mb-4">I&apos;m Writing</p>

        <p style={{ marginBottom: "1em" }}>
          I run a newsletter on technology, cities, and what it means to pay
          attention in a world designed to fragment it.
        </p>
        <p>
          New essays, occasionally. No schedule, no noise.
        </p>
      </section>

      {/* ── Post table ── */}
      <div className="animate-in delay-2 mt-8 mb-12">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="post-row"
            style={{ textDecoration: "none" }}
          >
            <span>
              <span className="row-org">{shortDate(post.dateISO)}</span>
              <span style={{ color: "#999", margin: "0 0.35em" }}>/</span>
              <span className="row-title">{post.title}</span>
            </span>
            <span className="row-meta">{post.readingTime}</span>
          </Link>
        ))}
      </div>

      {/* ── I'M SUBSCRIBABLE ── */}
      <section className="animate-in delay-3 mt-12 mb-16">
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
