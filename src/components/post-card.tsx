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
          <h2 className="text-[1.6rem] font-medium leading-snug text-foreground group-hover:opacity-60 transition-opacity duration-200 mb-2 tracking-tight">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[480px]">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-foreground group-hover:opacity-60 transition-opacity duration-200">
              Read →
            </span>
            <span className="text-xs text-muted-foreground">
              {post.readingTime} read · {post.date}
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/${post.slug}`} className="block group">
      <article className="py-5 border-b border-border last:border-0">
        <div className="flex items-baseline justify-between gap-6 mb-1.5">
          <h3 className="text-[0.9375rem] font-normal text-foreground group-hover:opacity-60 transition-opacity duration-200 leading-snug">
            {post.title}
          </h3>
          <time
            dateTime={post.dateISO}
            className="text-xs text-muted-foreground flex-shrink-0"
          >
            {post.date}
          </time>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {post.subtitle}
        </p>
      </article>
    </Link>
  );
}
