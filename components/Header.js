"use client";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "TEAM", href: "/work" },
  { label: "PRODUCTS", href: "/services" },
  { label: "ABOUT", href: "/about" },
  // { label: "TEAM", href: "/team" },
  // { label: "BTS", href: "/bts" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="ACTION C Home">
        <img
          src="/images/logo.png"
          alt="ACTION C Production"
          className="brand-logo"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="brand-fallback">ACTION <span>C</span></span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="talk-link">
        LET&apos;S TALK <span>↗</span>
      </a>
    </header>
  );
}