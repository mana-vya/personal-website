import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
  variant?: "default" | "featured";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/${post.slug}`} className="block group">
        <article className="py-10 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Featured
            </span>
            <span className="text-muted-foreground text-sm">—</span>
            <time
              dateTime={post.dateISO}
              className="text-xs tracking-wide text-muted-foreground"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              {post.date}
            </time>
          </div>

          <h2
            className="text-4xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-300 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h2>

          <p
            className="text-lg italic text-muted-foreground mb-4"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {post.subtitle}
          </p>

          <p
            className="text-base text-foreground/80 leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-crimson)", fontSize: "1.1rem", lineHeight: "1.75" }}
          >
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <span
              className="text-sm text-primary group-hover:underline underline-offset-2"
              style={{ fontFamily: "var(--font-crimson)", fontStyle: "italic" }}
            >
              Read essay →
            </span>
            <span className="text-muted-foreground text-xs">
              {post.readingTime} read
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/${post.slug}`} className="block group">
      <article className="py-7 border-b border-border last:border-0 relative pl-4 -ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-transparent before:transition-colors before:duration-300 group-hover:before:bg-primary">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <time
            dateTime={post.dateISO}
            className="text-xs tracking-wide text-muted-foreground flex-shrink-0"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {post.date}
          </time>
          <span
            className="text-xs text-muted-foreground flex-shrink-0"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {post.readingTime}
          </span>
        </div>

        <h3
          className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-1 leading-snug"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {post.title}
        </h3>

        <p
          className="text-sm italic text-muted-foreground mb-3"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {post.subtitle}
        </p>

        <p
          className="text-sm text-foreground/70 leading-relaxed line-clamp-2"
          style={{ fontFamily: "var(--font-crimson)", fontSize: "1rem" }}
        >
          {post.excerpt}
        </p>

        <div className="flex gap-2 mt-3">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-none font-normal"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </article>
    </Link>
  );
}
