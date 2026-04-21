"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return <p style={{ fontSize: "22px" }}>You&apos;re subscribed. Thanks.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", maxWidth: "420px" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        style={{
          flex: 1,
          fontFamily: "var(--font-source-serif)",
          fontSize: "18px",
          border: "1px solid #ccc",
          padding: "6px 10px",
          background: "transparent",
          outline: "none",
          color: "#1a1a1a",
          minWidth: 0,
        }}
        onFocus={(e) => (e.target.style.borderColor = "#1a1a1a")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          fontFamily: "var(--font-jetbrains)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "6px 16px",
          background: "#1a1a1a",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          opacity: status === "loading" ? 0.5 : 1,
        }}
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
