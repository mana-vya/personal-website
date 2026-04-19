import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Masthead */}
        <div className="text-center mb-6">
          <Link
            href="/"
            className="group inline-block"
          >
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-3"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              A newsletter by
            </p>
            <h1
              className="text-4xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Manav Yadav
            </h1>
          </Link>
          <p
            className="text-sm text-muted-foreground mt-2 italic"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Essays on technology, cities, and the texture of modern life
          </p>
        </div>

        {/* Ornamental divider */}
        <div className="ornament text-lg my-4 text-muted-foreground">
          <span>✦</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/archive", label: "Archive" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
