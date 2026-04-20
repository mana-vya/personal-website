import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import { getFeaturedPost, getRecentPosts } from "@/lib/posts";

export default function Home() {
  const featured = getFeaturedPost();
  const recent = getRecentPosts();

  return (
    <SiteLayout>

      {/* ── Hero ── */}
      <section className="mb-16 animate-fade-up">
        <h1
          className="mb-7 leading-[1.05]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span
            className="block"
            style={{ fontSize: "4.75rem", fontWeight: 300, fontStyle: "italic", color: "#1C1510" }}
          >
            Essays &amp;
          </span>
          <span
            className="block"
            style={{ fontSize: "4.75rem", fontWeight: 300, fontStyle: "italic", color: "#1C1510" }}
          >
            notes on
          </span>
          <span
            className="block"
            style={{ fontSize: "4.75rem", fontWeight: 700, fontStyle: "normal", color: "#1C1510", letterSpacing: "-0.025em" }}
          >
            modern life
          </span>
        </h1>
        <p
          className="leading-relaxed"
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "0.875rem",
            color: "#9A8B78",
            maxWidth: "340px",
            fontStyle: "italic",
          }}
        >
          A newsletter on technology, cities, and what it means to pay
          attention in a world designed to fragment it.
        </p>
      </section>

      {/* ── Separator ── */}
      <div className="mb-16 animate-fade-up delay-1" style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }} />

      {/* ── 01 — Featured ── */}
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

        <Link href={`/${featured.slug}`} className="group block mb-4">
          <h2
            className="mb-3 group-hover:opacity-60 transition-opacity duration-200 leading-[1.1]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "2.1rem",
              fontWeight: 600,
              color: "#1C1510",
              letterSpacing: "-0.01em",
            }}
          >
            {featured.title}
          </h2>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.875rem",
              color: "#7D6E5C",
              lineHeight: "1.8",
            }}
          >
            {featured.excerpt}
          </p>
        </Link>

        <div className="flex items-center gap-4 mt-5">
          <Link
            href={`/${featured.slug}`}
            className="hover:opacity-60 transition-opacity duration-200"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.05rem",
              fontStyle: "italic",
              color: "#8B1C2B",
            }}
          >
            Read →
          </Link>
          <span
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.75rem",
              color: "#9A8B78",
            }}
          >
            {featured.readingTime} · {featured.date}
          </span>
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="mb-16" style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }} />

      {/* ── 02 — Recent ── */}
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

        <div>
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group flex items-start justify-between gap-8 py-5"
              style={{ borderTop: "1px solid rgba(160,140,110,0.25)" }}
            >
              <div className="min-w-0 flex-1">
                <span
                  className="block mb-1 group-hover:opacity-60 transition-opacity duration-200 leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "#1C1510",
                  }}
                >
                  {post.title}
                </span>
                <span
                  className="block leading-snug"
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "0.8125rem",
                    color: "#9A8B78",
                    fontStyle: "italic",
                  }}
                >
                  {post.subtitle}
                </span>
              </div>
              <time
                dateTime={post.dateISO}
                className="flex-shrink-0 pt-[2px]"
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "0.75rem",
                  color: "#9A8B78",
                }}
              >
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="mb-16" style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }} />

      {/* ── 03 — Subscribe ── */}
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
