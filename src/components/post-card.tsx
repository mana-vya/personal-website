import Link from "next/link";
import type { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
  variant?: "default" | "featured";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/${post.slug}`} className="block group">
        <article>
          <h2
            className="leading-[1.1] mb-3 group-hover:opacity-60 transition-opacity duration-200"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "2.1rem",
              fontWeight: 600,
              color: "#1C1510",
              letterSpacing: "-0.01em",
            }}
          >
            {post.title}
          </h2>
          <p
            className="leading-relaxed mb-5"
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.9rem",
              color: "#7D6E5C",
              lineHeight: "1.75",
            }}
          >
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <span
              className="group-hover:opacity-60 transition-opacity duration-200"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "#8B1C2B",
              }}
            >
              Read →
            </span>
            <span
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "0.75rem",
                color: "#9A8B78",
                letterSpacing: "0.05em",
              }}
            >
              {post.readingTime} · {post.date}
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/${post.slug}`} className="block group">
      <article
        className="py-5 border-b"
        style={{ borderColor: "rgba(160, 140, 110, 0.3)" }}
      >
        <div className="flex items-start justify-between gap-8">
          <div className="min-w-0 flex-1">
            <span
              className="block mb-1 group-hover:opacity-60 transition-opacity duration-200 leading-snug"
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
        </div>
      </article>
    </Link>
  );
}
