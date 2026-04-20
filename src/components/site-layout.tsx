import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "#F7F3EB" }}>

      {/* ── Mobile top bar ── */}
      <header
        className="md:hidden flex items-center justify-between px-5 py-4"
        style={{ background: "#14100C", borderBottom: "2px solid #8B1C2B" }}
      >
        <Link
          href="/"
          className="text-sm font-medium tracking-wide"
          style={{ fontFamily: "var(--font-cormorant)", color: "#F2EDE4", fontSize: "1rem" }}
        >
          Manav Yadav
        </Link>
        <nav className="flex items-center gap-5">
          {navLinks.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-widest uppercase transition-opacity duration-150 hover:opacity-100 opacity-60"
              style={{ fontFamily: "var(--font-lora)", color: "#C8B99A", fontSize: "0.625rem" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ── Desktop: black leather cover sidebar ── */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-full w-[168px] flex-col px-7 py-10 z-10 leather-texture"
        style={{
          background: "#14100C",
          borderRight: "2px solid #8B1C2B",
        }}
      >
        {/* Pen-nib icon */}
        <Link href="/" className="mb-1 block group">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
          >
            <path
              d="M14 2L18 6L8 16H4V12L14 2Z"
              stroke="#C8B99A"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path d="M12 4L16 8" stroke="#C8B99A" strokeWidth="1.2" />
            <path d="M4 16L6 14" stroke="#8B1C2B" strokeWidth="1.5" />
          </svg>
          <span
            className="block leading-tight group-hover:opacity-80 transition-opacity duration-150"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#F2EDE4",
              fontSize: "1.0625rem",
              fontWeight: 500,
            }}
          >
            Manav Yadav
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-1 mt-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="sidebar-nav-link"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom: elastic band suggestion */}
        <div className="mt-auto">
          <div
            className="w-full h-[1px] opacity-20"
            style={{ background: "#C8B99A" }}
          />
          <p
            className="mt-3 opacity-30 leading-snug"
            style={{
              fontFamily: "var(--font-lora)",
              color: "#C8B99A",
              fontSize: "0.5625rem",
              letterSpacing: "0.05em",
            }}
          >
            In case of loss,<br />please return to<br />Manav Yadav
          </p>
        </div>
      </aside>

      {/* ── Content: cream dotted notebook pages ── */}
      <div
        className="md:ml-[168px] flex justify-center min-h-screen dot-grid"
        style={{ background: "#F7F3EB" }}
      >
        <main className="w-full max-w-[600px] px-5 md:px-0 py-10 md:py-20 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
