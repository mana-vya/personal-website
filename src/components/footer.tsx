import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="ornament text-base text-muted-foreground mb-8">
          <span>✦</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          <p
            className="tracking-wide"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Manav Yadav
          </p>

          <nav className="flex items-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/archive", label: "Archive" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="tracking-[0.15em] uppercase hover:text-foreground transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          <p>© {year}</p>
        </div>
      </div>
    </footer>
  );
}
