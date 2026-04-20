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
      <section className="mb-14 animate-fade-up">
        <h1 className="text-[3.25rem] leading-[1.08] tracking-[-0.03em] mb-8">
          <span className="block font-light text-foreground">All</span>
          <span className="block font-semibold text-foreground">writing</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {posts.length} essays, newest first.
        </p>
      </section>

      <hr className="border-border mb-12 animate-fade-up delay-1" />

      {/* Post list — 01 */}
      <section className="animate-fade-up delay-2">
        <p className="text-xs text-muted-foreground mb-7 tabular-nums">01</p>

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group flex items-baseline justify-between gap-6 py-4 border-b border-border last:border-0"
            >
              <div className="min-w-0">
                <span className="block text-[0.9375rem] font-normal text-foreground group-hover:opacity-60 transition-opacity duration-200 leading-snug">
                  {post.title}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 truncate">
                  {post.subtitle}
                </span>
              </div>
              <time
                dateTime={post.dateISO}
                className="text-xs text-muted-foreground flex-shrink-0 tabular-nums"
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
