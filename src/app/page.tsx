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
      <section className="mb-14 animate-fade-up">
        <h1 className="text-[3.25rem] leading-[1.08] tracking-[-0.03em] mb-8">
          <span className="block font-light text-foreground">Essays &amp;</span>
          <span className="block font-light text-foreground">notes on</span>
          <span className="block font-semibold text-foreground">modern life</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[380px]">
          A newsletter on technology, cities, and what it means to pay
          attention in a world designed to fragment it.
        </p>
      </section>

      <hr className="border-border mb-12 animate-fade-up delay-1" />

      {/* Featured post — 01 */}
      <section className="mb-12 animate-fade-up delay-2">
        <p className="text-xs text-muted-foreground mb-6 tabular-nums">01</p>
        <Link href={`/${featured.slug}`} className="group block">
          <h2 className="text-[1.55rem] font-medium leading-snug tracking-tight text-foreground group-hover:opacity-60 transition-opacity duration-200 mb-2.5">
            {featured.title}
          </h2>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[460px]">
          {featured.excerpt}
        </p>
        <Link
          href={`/${featured.slug}`}
          className="text-xs text-foreground hover:opacity-60 transition-opacity duration-200"
        >
          Read →
        </Link>
      </section>

      <hr className="border-border mb-12" />

      {/* Recent — 02 */}
      <section className="mb-12 animate-fade-up delay-3">
        <p className="text-xs text-muted-foreground mb-7 tabular-nums">02</p>
        <div>
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group flex items-baseline justify-between gap-6 py-4 border-b border-border last:border-0"
            >
              <div className="min-w-0">
                <span className="block text-[0.9375rem] font-normal text-foreground group-hover:opacity-60 transition-opacity duration-200 leading-snug truncate">
                  {post.title}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 truncate">
                  {post.subtitle}
                </span>
              </div>
              <time
                dateTime={post.dateISO}
                className="text-xs text-muted-foreground flex-shrink-0"
              >
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-border mb-12" />

      {/* Subscribe — 03 */}
      <section className="animate-fade-up delay-4">
        <p className="text-xs text-muted-foreground mb-7 tabular-nums">03</p>
        <SubscribeForm />
      </section>
    </SiteLayout>
  );
}
