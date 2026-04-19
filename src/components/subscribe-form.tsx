"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SubscribeFormProps {
  variant?: "inline" | "section";
}

export function SubscribeForm({ variant = "inline" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  };

  if (variant === "section") {
    return (
      <section className="border-y border-border py-12 my-12">
        <div className="text-center mb-8">
          <div className="ornament text-base text-muted-foreground mb-6">
            <span>✦</span>
          </div>
          <h2
            className="text-2xl font-semibold text-foreground mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Subscribe to the newsletter
          </h2>
          <p
            className="text-base text-muted-foreground italic"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            New essays, occasionally. No noise.
          </p>
        </div>

        {status === "success" ? (
          <p
            className="text-center text-primary italic text-lg"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Thank you — you&apos;re subscribed.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-transparent border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
              style={{ fontFamily: "var(--font-crimson)" }}
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="text-xs tracking-[0.2em] uppercase rounded-none px-6 py-2.5 h-auto bg-foreground text-background hover:bg-primary transition-colors duration-300"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              {status === "loading" ? "..." : "Subscribe"}
            </Button>
          </form>
        )}
      </section>
    );
  }

  return (
    <div className="bg-muted px-6 py-8 -mx-6">
      <p
        className="text-lg font-medium text-foreground mb-1"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Get new essays in your inbox
      </p>
      <p
        className="text-sm text-muted-foreground italic mb-4"
        style={{ fontFamily: "var(--font-crimson)" }}
      >
        Subscribe to receive future writing.
      </p>

      {status === "success" ? (
        <p
          className="text-primary italic"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          Thank you — you&apos;re subscribed.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
            style={{ fontFamily: "var(--font-crimson)" }}
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="text-xs tracking-[0.15em] uppercase rounded-none px-5 h-auto bg-foreground text-background hover:bg-primary transition-colors duration-300"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {status === "loading" ? "..." : "Subscribe"}
          </Button>
        </form>
      )}
    </div>
  );
}
