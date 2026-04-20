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
      <div className="mb-10 animate-fade-up">
        <Link
          href="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
        >
          ← All writing
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10 animate-fade-up delay-1">
        <div className="flex items-center gap-3 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-muted-foreground uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-[2.4rem] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground mb-3">
          {post.title}
        </h1>

        <p className="text-base text-muted-foreground mb-5 leading-relaxed">
          {post.subtitle}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.dateISO}>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime} read</span>
        </div>
      </header>

      <hr className="border-border mb-10 animate-fade-up delay-2" />

      {/* Content */}
      <article
        className="prose-clean animate-fade-up delay-3"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <hr className="border-border mt-14 mb-10" />

      {/* Subscribe */}
      <section className="mb-10">
        <SubscribeForm />
      </section>

      <Link
        href="/"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
      >
        ← Back to all writing
      </Link>
    </SiteLayout>
  );
}
