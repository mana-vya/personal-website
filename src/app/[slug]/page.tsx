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
          className="hover:opacity-60 transition-opacity duration-150"
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "0.75rem",
            color: "#9A8B78",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          ← All writing
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10 animate-fade-up delay-1">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "0.625rem",
                color: "#8B1C2B",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
          <span style={{ color: "rgba(154,139,120,0.5)", fontSize: "0.75rem" }}>·</span>
          <time
            dateTime={post.dateISO}
            style={{ fontFamily: "var(--font-lora)", fontSize: "0.75rem", color: "#9A8B78" }}
          >
            {post.date}
          </time>
          <span style={{ color: "rgba(154,139,120,0.5)", fontSize: "0.75rem" }}>·</span>
          <span style={{ fontFamily: "var(--font-lora)", fontSize: "0.75rem", color: "#9A8B78" }}>
            {post.readingTime}
          </span>
        </div>

        <h1
          className="leading-[1.08] mb-4"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "3.25rem",
            fontWeight: 700,
            color: "#1C1510",
            letterSpacing: "-0.02em",
          }}
        >
          {post.title}
        </h1>

        <p
          className="leading-relaxed"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.35rem",
            fontStyle: "italic",
            color: "#7D6E5C",
          }}
        >
          {post.subtitle}
        </p>
      </header>

      {/* Divider */}
      <div
        className="mb-10 animate-fade-up delay-2"
        style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }}
      />

      {/* Article content */}
      <article
        className="prose-notebook animate-fade-up delay-3"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* End mark */}
      <p
        className="mt-12 mb-10 text-center"
        style={{ color: "#8B1C2B", fontSize: "1rem" }}
      >
        ✦
      </p>

      {/* Divider */}
      <div
        className="mb-12"
        style={{ borderTop: "1px solid rgba(160,140,110,0.35)" }}
      />

      {/* Subscribe */}
      <section className="mb-12">
        <SubscribeForm />
      </section>

      <Link
        href="/"
        className="hover:opacity-60 transition-opacity duration-150 block pb-24"
        style={{
          fontFamily: "var(--font-lora)",
          fontSize: "0.75rem",
          color: "#9A8B78",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        ← Back to all writing
      </Link>

    </SiteLayout>
  );
}
