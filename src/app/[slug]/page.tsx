import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SubscribeForm } from "@/components/subscribe-form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        {/* Back link */}
        <div className="animate-fade-up mb-10">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            ← All writing
          </Link>
        </div>

        {/* Post header */}
        <header className="animate-fade-up animate-fade-up-delay-1 mb-8">
          <div className="flex items-center gap-3 mb-5">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] tracking-[0.15em] uppercase rounded-none px-2 py-0.5 font-normal"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-semibold leading-tight text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h1>

          <p
            className="text-xl italic text-muted-foreground mb-6"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {post.subtitle}
          </p>

          <div
            className="flex items-center gap-4 text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            <time dateTime={post.dateISO}>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime} read</span>
          </div>
        </header>

        <Separator className="mb-10 animate-fade-up animate-fade-up-delay-2" />

        {/* Post content */}
        <div
          className="prose-editorial animate-fade-up animate-fade-up-delay-3"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Ornamental end mark */}
        <div className="ornament text-base text-muted-foreground my-12 animate-fade-up animate-fade-up-delay-4">
          <span>✦</span>
        </div>

        {/* Subscribe CTA */}
        <div className="animate-fade-up animate-fade-up-delay-5">
          <SubscribeForm variant="section" />
        </div>

        {/* Back link bottom */}
        <div className="mt-8 text-center animate-fade-up animate-fade-up-delay-5">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            ← Back to all writing
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
