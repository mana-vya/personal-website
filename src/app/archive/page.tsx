import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive — Manav Yadav",
  description: "All essays by Manav Yadav.",
};

function shortDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d
    .toLocaleString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();
}

export default function ArchivePage() {
  const posts = getAllPosts();

  return (
    <SiteLayout
      crumbs={[
        { label: "HOME", href: "/" },
        { label: "ARCHIVE", href: "/archive" },
      ]}
    >
      <section className="animate-in mb-10">
        <p style={{ marginBottom: "0.75em" }}>
          All {posts.length} essays, newest first.
        </p>
      </section>

      {/* Post table */}
      <section className="animate-in delay-1 mb-16">
        <p className="section-label mb-4">I&apos;m Writing</p>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="post-row"
            style={{ textDecoration: "none" }}
          >
            <span>
              <span className="row-org">{shortDate(post.dateISO)}</span>
              <span style={{ color: "#bbb", margin: "0 0.35em" }}>/</span>
              <span className="row-title">{post.title}</span>
            </span>
            <span className="row-meta">{post.readingTime}</span>
          </Link>
        ))}
      </section>

    </SiteLayout>
  );
}
