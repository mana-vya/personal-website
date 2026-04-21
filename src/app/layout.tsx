import type { Metadata } from "next";
import { Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manav Yadav",
  description:
    "India-based designer, vibe coder, and serial builder. Senior Product Designer at Tessell. IIT Guwahati '23.",
  openGraph: {
    title: "Manav Yadav",
    description:
      "India-based designer, vibe coder, and serial builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-white text-foreground">{children}</body>
    </html>
  );
}
