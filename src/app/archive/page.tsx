import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive — Manav Yadav",
  description: "All essays and notes by Manav Yadav.",
};

export default function ArchivePage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        <div className="animate-fade-up">
          <h1
            className="text-4xl font-semibold text-foreground mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Archive
          </h1>
          <p
            className="text-lg italic text-muted-foreground mb-10"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            All {posts.length} essays, in reverse order
          </p>
        </div>

        <Separator className="mb-10" />

        <div className="animate-fade-up animate-fade-up-delay-1">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
