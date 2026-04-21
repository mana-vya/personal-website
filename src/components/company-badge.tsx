interface BadgeProps {
  icon: string;
  name: string;
  href?: string;
}

export function CompanyBadge({ icon, name, href }: BadgeProps) {
  const inner = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        background: "#f2f2f2",
        border: "1px solid #e5e5e5",
        padding: "1px 8px 2px",
        borderRadius: "4px",
        fontSize: "0.88em",
        fontFamily: "var(--font-source-serif)",
        verticalAlign: "middle",
        lineHeight: "1.65",
        color: "#1a1a1a",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontSize: "0.95em", lineHeight: 1 }}>{icon}</span>
      {name}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {inner}
      </a>
    );
  }

  return inner;
}
