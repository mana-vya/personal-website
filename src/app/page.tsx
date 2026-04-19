import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PostCard } from "@/components/post-card";
import { SubscribeForm } from "@/components/subscribe-form";
import { getFeaturedPost, getRecentPosts } from "@/lib/posts";

export default function Home() {
  const featured = getFeaturedPost();
  const recent = getRecentPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-4">

        {/* Featured post */}
        <div className="animate-fade-up">
          <PostCard post={featured} variant="featured" />
        </div>

        {/* Subscribe inline */}
        <div className="animate-fade-up animate-fade-up-delay-2 my-2">
          <SubscribeForm variant="inline" />
        </div>

        {/* Recent posts */}
        <div className="mt-12 animate-fade-up animate-fade-up-delay-3">
          <h2
            className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-6"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            More Writing
          </h2>

          <div>
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Subscribe section */}
        <div className="animate-fade-up animate-fade-up-delay-4">
          <SubscribeForm variant="section" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
