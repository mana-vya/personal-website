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
    <SiteLayout crumbs={[{ label: "HOME", href: "/" }, { label: post.title.toUpperCase(), href: `/${post.slug}` }]}>

      {/* Header */}
      <header className="animate-in mb-8">
        <h1
          style={{
            fontFamily: "var(--font-source-serif)",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "0.5em",
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-source-serif)",
            fontSize: "22px",
            color: "#555",
            fontStyle: "italic",
            marginBottom: "1em",
          }}
        >
          {post.subtitle}
        </p>
        <p
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#888",
          }}
        >
          {post.date} · {post.readingTime} read
          {post.tags.map((t) => ` · ${t}`)}
        </p>
      </header>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #e8e8e8", marginBottom: "2em" }} />

      {/* Content */}
      <article
        className="prose-article animate-in delay-1"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Divider */}
      <div style={{ borderTop: "1px solid #e8e8e8", margin: "3em 0 2.5em" }} />

      {/* Subscribe */}
      <section className="mb-8">
        <p className="section-label mb-4">I&apos;m Subscribable</p>
        <p style={{ marginBottom: "1em" }}>
          If you enjoyed this, consider subscribing. New essays, occasionally.
        </p>
        <div className="mt-5">
          <SubscribeForm />
        </div>
      </section>

      {/* Back */}
      <div style={{ marginTop: "3em", paddingBottom: "4rem" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#888",
            textDecoration: "none",
          }}
        >
          ← All writing
        </Link>
      </div>

    </SiteLayout>
  );
}
