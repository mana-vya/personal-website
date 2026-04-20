"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <p className="text-sm text-muted-foreground">
        You&apos;re subscribed. Thank you.
      </p>
    );
  }

  return (
    <div>
      <p className="text-[0.9375rem] font-normal text-foreground mb-1">
        Get new essays in your inbox
      </p>
      <p className="text-sm text-muted-foreground mb-5">
        Subscribe to receive future writing — no noise.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 bg-transparent border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-150 min-w-0"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="text-xs px-5 py-2 h-auto rounded-none bg-foreground text-background hover:opacity-75 transition-opacity duration-200"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
