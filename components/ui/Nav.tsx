"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Parcours", href: "#parcours" },
  { label: "Projets", href: "#projets" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-100">
      <nav
        className="flex justify-between items-center px-14 py-5 border-b"
        style={{
          background: "rgba(250,250,250,0.7)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderColor: "var(--border)",
        }}
      >
        {/* Logo */}
        <div
          className="font-mono text-[13px] flex items-center gap-2.5"
          style={{ color: "var(--black)", letterSpacing: "-0.01em" }}
          data-cursor-hover
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: "var(--black)" }}
          />
          Maxime Maguet
        </div>

        {/* Links — desktop */}
        <div className="hidden md:flex gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        {/* CTA — desktop */}
        <a
          href="mailto:maxime.maguet@gmail.com"
          className="hidden md:inline-flex nav-cta"
        >
          Me contacter <span className="nav-cta-arrow">→</span>
        </a>

        {/* Burger — mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.25 p-2 -mr-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            className={`burger-line ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`burger-line ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`burger-line ${open ? "-rotate-45 translate-y-[-6.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden flex flex-col px-8 py-6 gap-5 border-b transition-all duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(250,250,250,0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderColor: "var(--border)",
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-[15px] font-medium"
            style={{ color: "var(--black)" }}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="mailto:maxime.maguet@gmail.com"
          className="nav-cta w-fit mt-1"
          onClick={() => setOpen(false)}
        >
          Me contacter <span className="nav-cta-arrow">→</span>
        </a>
      </div>
    </header>
  );
}
