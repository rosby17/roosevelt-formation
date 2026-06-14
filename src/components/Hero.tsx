"use client";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <header
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft: 28,
        paddingRight: 28,
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,16,46,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ maxWidth: 800, width: "100%", position: "relative", zIndex: 1 }}>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 28,
            animation: "fadeUp 0.65s ease both 0s",
          }}
        >
          <div
            style={{
              width: 8, height: 8,
              borderRadius: "50%",
              background: "var(--red)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--red)",
            }}
          >
            Accompagnement YouTube · Monétisation
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 900,
            lineHeight: 1.03,
            letterSpacing: "-0.02em",
            color: "var(--white)",
            marginBottom: 28,
            animation: "fadeUp 0.65s ease both 0.1s",
          }}
        >
          Gagnez de l' <em style={{ fontStyle: "italic", color: "var(--red)" }}>argent.</em>
          <br />
          grâce à Youtube.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: "var(--white-muted)",
            lineHeight: 1.75,
            maxWidth: 560,
            margin: "0 auto 48px",
            animation: "fadeUp 0.65s ease both 0.2s",
          }}
        >
          Crée, configure et développe une chaîne qui génère des revenus réels
          niches rentables, avec ou sans IA, stratégie multi-chaînes.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            animation: "fadeUp 0.65s ease both 0.3s",
          }}
        >
          <a
            href={SITE.offers.live.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--red)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: 6,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(200,16,46,0.3)",
              transition: "transform 0.15s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "var(--red-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "var(--red)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M29 10H13C10.8 10 9 11.8 9 14v20c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4z" />
              <path fill="rgba(255,255,255,0.3)" d="M33 18l6-4v20l-6-4V18z" />
            </svg>
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
              <span style={{ fontSize: 11, opacity: 0.7, textDecoration: "line-through", lineHeight: 1 }}>
                {SITE.offers.live.currency} {SITE.offers.live.originalPrice}
              </span>
              <span>Session Live &mdash; {SITE.offers.live.currency} {SITE.offers.live.price}</span>
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <a
            href={SITE.offers.replay.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "var(--white)",
              fontSize: 15,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 6,
              border: "1px solid var(--black-line)",
              textDecoration: "none",
              transition: "transform 0.15s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.borderColor = "var(--white-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--black-line)";
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
              <span style={{ fontSize: 11, opacity: 0.55, textDecoration: "line-through", lineHeight: 1 }}>
                {SITE.offers.replay.currency} {SITE.offers.replay.originalPrice}
              </span>
              <span>Replay &mdash; {SITE.offers.replay.currency} {SITE.offers.replay.price}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}