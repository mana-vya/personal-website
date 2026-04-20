import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { SubscribeForm } from "@/components/subscribe-form";
import { getPost, getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Manav Yadav`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <SiteLayout>
      {/* Back */}
      <div className="mb-12 animate-fade-up">
        <Link
          href="/"
          className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors duration-150"
        >
          ← All writing
        </Link>
      </div>

      {/* Post header */}
      <header className="mb-10 animate-fade-up delay-1">
        <div className="flex items-center gap-4 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]"
            >
              {tag}
            </span>
          ))}
          <span className="text-muted-foreground/40 text-[10px]">·</span>
          <time dateTime={post.dateISO} className="text-[10px] text-muted-foreground tracking-wide">
            {post.date}
          </time>
          <span className="text-muted-foreground/40 text-[10px]">·</span>
          <span className="text-[10px] text-muted-foreground tracking-wide">{post.readingTime}</span>
        </div>

        <h1 className="text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground mb-4">
          {post.title}
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">
          {post.subtitle}
        </p>
      </header>

      <hr className="border-border mb-10 animate-fade-up delay-2" />

      {/* Content */}
      <article
        className="prose-clean animate-fade-up delay-3"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <hr className="border-border mt-16 mb-12" />

      {/* Subscribe */}
      <section className="mb-12">
        <SubscribeForm />
      </section>

      <Link
        href="/"
        className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors duration-150 block pb-20"
      >
        ← Back to all writing
      </Link>
    </SiteLayout>
  );
}
