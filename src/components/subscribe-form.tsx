"use client";

import { useState } from "react";

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
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "#8B1C2B",
        }}
      >
        You&apos;re subscribed. Thank you.
      </p>
    );
  }

  return (
    <div>
      <p
        className="mb-1"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.4rem",
          fontWeight: 500,
          color: "#1C1510",
          letterSpacing: "-0.01em",
        }}
      >
        Subscribe to this newsletter
      </p>
      <p
        className="mb-5"
        style={{
          fontFamily: "var(--font-lora)",
          fontSize: "0.8125rem",
          color: "#9A8B78",
          fontStyle: "italic",
        }}
      >
        New essays, occasionally. No noise, no schedule.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-3 py-2 focus:outline-none transition-colors duration-150 min-w-0"
          style={{
            background: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(160, 140, 110, 0.5)",
            fontFamily: "var(--font-lora)",
            fontSize: "0.875rem",
            color: "#1C1510",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#8B1C2B";
            e.target.style.background = "rgba(255,255,255,0.9)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(160, 140, 110, 0.5)";
            e.target.style.background = "rgba(255,255,255,0.6)";
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2 transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
          style={{
            background: "#14100C",
            color: "#F2EDE4",
            fontFamily: "var(--font-lora)",
            fontSize: "0.6875rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
