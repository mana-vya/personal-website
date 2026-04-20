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
        <h1 className="text-[3.5rem] leading-[1.06] tracking-[-0.035em] mb-9">
          <span className="block font-extralight text-foreground">All</span>
          <span className="block font-semibold text-foreground">writing</span>
        </h1>
        <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">
          {posts.length} essays, newest first.
        </p>
      </section>

      <hr className="border-border mb-16 animate-fade-up delay-1" />

      {/* 01 — list */}
      <section className="animate-fade-up delay-2 pb-20">
        <p className="text-[11px] text-muted-foreground mb-8 tabular-nums tracking-wider">01</p>

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group flex items-start justify-between gap-8 py-5 border-b border-border first:border-t last:border-b-0"
            >
              <div className="min-w-0 flex-1">
                <span className="block text-[0.9375rem] font-normal text-foreground group-hover:opacity-55 transition-opacity duration-200 leading-snug mb-1">
                  {post.title}
                </span>
                <span className="block text-[0.8125rem] text-muted-foreground leading-snug">
                  {post.subtitle}
                </span>
              </div>
              <time
                dateTime={post.dateISO}
                className="text-[0.8125rem] text-muted-foreground flex-shrink-0 tabular-nums pt-[1px]"
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
