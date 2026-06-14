"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";

import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#programme", label: "Programme" },
    { href: "/services", label: "Services" },
    { href: "#offres", label: "Offres" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        padding: scrolled ? "14px 0" : "20px 0",
        background: "rgba(13,13,13,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--black-line)",
        transition: "padding 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--white)",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            style={{ borderRadius: "50%", objectFit: "contain" }}
          />
          <span>
            Roosevelt <span style={{ color: "var(--red)" }}>Mogo</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            listStyle: "none",
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href.startsWith("#") ? `/${l.href}` : l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--white-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-muted)")}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={SITE.offers.replay.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--red)",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--red-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--red)")}
            >
              Commencer →
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
          className="nav-burger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--white)",
                borderRadius: 2,
                transition: "0.3s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(13,13,13,0.98)",
            borderBottom: "1px solid var(--black-line)",
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href.startsWith("#") ? `/${l.href}` : l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "var(--white-muted)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.offers.replay.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--red)",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Commencer →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
