import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SubscribeForm } from "@/components/subscribe-form";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Manav Yadav",
  description: "About Manav Yadav — essays on technology, cities, and the texture of modern life.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        <div className="animate-fade-up">
          <h1
            className="text-4xl font-semibold text-foreground mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About
          </h1>
          <p
            className="text-lg italic text-muted-foreground mb-10"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            A few words about this newsletter and its author
          </p>
        </div>

        <Separator className="mb-10" />

        <article
          className="prose-editorial animate-fade-up animate-fade-up-delay-1"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          <p>
            I&apos;m Manav — a writer and software engineer based in Bengaluru. I think a lot
            about how technology changes the texture of everyday life, about cities as systems of
            memory and desire, and about what it means to pay attention in a world designed to
            fragment it.
          </p>

          <p>
            This newsletter is a place for essays: long-form, unhurried pieces that try to think
            carefully about things that matter. I publish irregularly — when I have something worth
            saying, not on a schedule. The goal is quality over frequency.
          </p>

          <h2>What this newsletter is</h2>

          <p>
            Short essays, usually 1,000–2,500 words. Personal in perspective but not confessional in
            form. I write about ideas — technology, urbanism, attention, language, work — through the
            lens of lived experience. The best description I can give is: the kind of writing I want
            to read but can&apos;t always find.
          </p>

          <h2>What it isn&apos;t</h2>

          <p>
            Not a productivity newsletter. Not hot takes. Not a roundup of things I read this week.
            I have no interest in being part of the content machine. If a piece doesn&apos;t hold up on
            re-reading a year later, I don&apos;t want to publish it.
          </p>

          <h2>Why subscribe</h2>

          <p>
            Because the internet is mostly noise, and a few good essays in your inbox each month
            are worth more than everything else combined. Or so I&apos;d like to believe — and so I&apos;m
            betting you might believe too.
          </p>
        </article>

        <div className="mt-12 animate-fade-up animate-fade-up-delay-3">
          <SubscribeForm variant="section" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
