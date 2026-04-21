import Link from "next/link";

interface PageLayoutProps {
  children: React.ReactNode;
  crumbs?: { label: string; href: string }[];
}

export function SiteLayout({ children, crumbs = [] }: PageLayoutProps) {
  const allCrumbs = [
    { label: "MANAVYADAV", href: "/" },
    ...crumbs,
  ];

  return (
    <div className="max-w-[600px] mx-auto px-5 py-10 md:py-14">
      {/* Breadcrumb nav */}
      <nav className="breadcrumb mb-10">
        {allCrumbs.map((c, i) => (
          <span key={c.href}>
            {i > 0 && <span className="sep">/</span>}
            <Link href={c.href}>{c.label}</Link>
          </span>
        ))}
      </nav>

      {children}
    </div>
  );
}
