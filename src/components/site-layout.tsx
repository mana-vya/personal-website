import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile top bar */}
      <header className="md:hidden flex items-center justify-between px-5 py-4 border-b border-border">
        <Link
          href="/"
          className="text-sm font-medium text-foreground tracking-tight"
        >
          Manav Yadav
        </Link>
        <nav className="flex items-center gap-5">
          {navLinks.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[168px] flex-col px-8 py-10 z-10 border-r border-border">
        {/* Logo mark */}
        <Link href="/" className="mb-1 block group">
          <svg
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-3 text-foreground group-hover:opacity-60 transition-opacity duration-150"
          >
            <rect x="0.5" y="0.5" width="7" height="7" stroke="currentColor" strokeWidth="1" />
            <rect x="10.5" y="10.5" width="7" height="7" stroke="currentColor" strokeWidth="1" />
            <rect x="5.5" y="5.5" width="7" height="7" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="text-[13px] font-medium text-foreground block leading-none group-hover:opacity-60 transition-opacity duration-150">
            Manav Yadav
          </span>
        </Link>

        <nav className="flex flex-col gap-0.5 mt-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-150 leading-6"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main — centered within the right area */}
      <div className="md:ml-[168px] flex justify-center min-h-screen">
        <main className="w-full max-w-[600px] px-5 md:px-0 py-10 md:py-20">
          {children}
        </main>
      </div>
    </div>
  );
}
