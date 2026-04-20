import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import { getFeaturedPost, getRecentPosts } from "@/lib/posts";

export default function Home() {
  const featured = getFeaturedPost();
  const recent = getRecentPosts();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mb-16 animate-fade-up">
        <h1 className="text-[3.5rem] leading-[1.06] tracking-[-0.035em] mb-9">
          <span className="block font-extralight text-foreground">Essays &amp;</span>
          <span className="block font-extralight text-foreground">notes on</span>
          <span className="block font-semibold text-foreground">modern life</span>
        </h1>
        <p className="text-[0.8125rem] text-muted-foreground leading-relaxed max-w-[340px]">
          A newsletter on technology, cities, and what it means to pay
          attention in a world designed to fragment it.
        </p>
      </section>

      <hr className="border-border mb-16 animate-fade-up delay-1" />

      {/* Featured post — 01 */}
      <section className="mb-16 animate-fade-up delay-2">
        <p className="text-[11px] text-muted-foreground mb-8 tabular-nums tracking-wider">01</p>

        <Link href={`/${featured.slug}`} className="group block mb-4">
          <h2 className="text-[1.75rem] font-medium leading-[1.2] tracking-[-0.02em] text-foreground group-hover:opacity-55 transition-opacity duration-200 mb-3">
            {featured.title}
          </h2>
          <p className="text-[0.8125rem] text-muted-foreground leading-[1.7]">
            {featured.excerpt}
          </p>
        </Link>

        <div className="flex items-center gap-4 mt-5">
          <Link
            href={`/${featured.slug}`}
            className="text-[0.8125rem] text-foreground hover:opacity-55 transition-opacity duration-200"
          >
            Read →
          </Link>
          <span className="text-[0.8125rem] text-muted-foreground">
            {featured.readingTime} · {featured.date}
          </span>
        </div>
      </section>

      <hr className="border-border mb-16" />

      {/* Recent — 02 */}
      <section className="mb-16 animate-fade-up delay-3">
        <p className="text-[11px] text-muted-foreground mb-8 tabular-nums tracking-wider">02</p>

        <div>
          {recent.map((post) => (
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
                className="text-[0.8125rem] text-muted-foreground flex-shrink-0 pt-[1px]"
              >
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-border mb-16" />

      {/* Subscribe — 03 */}
      <section className="animate-fade-up delay-4 pb-20">
        <p className="text-[11px] text-muted-foreground mb-8 tabular-nums tracking-wider">03</p>
        <SubscribeForm />
      </section>
    </SiteLayout>
  );
}
