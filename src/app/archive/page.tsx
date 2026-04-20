import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive — Manav Yadav",
  description: "All essays and notes by Manav Yadav.",
};

export default function ArchivePage() {
  const posts = getAllPosts();

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
            All
          </span>
          <span
            className="block"
            style={{ fontSize: "4.75rem", fontWeight: 700, color: "#1C1510", letterSpacing: "-0.025em" }}
          >
            writing
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
          {posts.length} essays, newest first.
        </p>
      </section>

      <div className="mb-16 animate-fade-up delay-1" style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }} />

      {/* 01 — list */}
      <section className="animate-fade-up delay-2 pb-24">
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

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group flex items-start justify-between gap-8 py-5"
              style={{ borderTop: "1px solid rgba(160,140,110,0.25)" }}
            >
              <div className="min-w-0 flex-1">
                <span
                  className="block mb-1 group-hover:opacity-55 transition-opacity duration-200 leading-snug"
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

    </SiteLayout>
  );
}
