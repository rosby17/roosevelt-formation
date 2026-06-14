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
          YouTube, <em style={{ fontStyle: "italic", color: "var(--red)" }}>monétisé.</em>
          <br />
          Sans audience.
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
          Crée, configure et développe une chaîne qui génère des revenus réels —
          niches rentables, avatars IA, stratégie multi-chaînes. J&apos;ai fait les erreurs pour toi.
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
          {/* Premium Live CTA */}
          <a
            href={SITE.offers.live.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              background: "linear-gradient(135deg, var(--red) 0%, #d80b2a 100%)",
              color: "#fff",
              padding: "18px 36px",
              borderRadius: 14,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(200, 16, 46, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 14px 40px rgba(200, 16, 46, 0.55), inset 0 1px 0 rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(200, 16, 46, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.15)", padding: 8, borderRadius: 10 }}>
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" d="M29 10H13C10.8 10 9 11.8 9 14v20c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4z" />
                <path fill="rgba(255,255,255,0.3)" d="M33 18l6-4v20l-6-4V18z" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.9 }}>
                <span>Session Live</span>
                <span style={{ background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: 4, textDecoration: "line-through", fontSize: 10 }}>
                  {SITE.offers.live.originalPrice} {SITE.offers.live.currency}
                </span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 2 }}>
                {SITE.offers.live.price} {SITE.offers.live.currency} <span style={{ fontSize: 14, fontWeight: 400, opacity: 0.8 }}>&rarr;</span>
              </div>
            </div>
          </a>

          {/* Premium Replay CTA */}
          <a
            href={SITE.offers.replay.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(255, 255, 255, 0.03)",
              color: "var(--white)",
              padding: "18px 36px",
              borderRadius: 14,
              border: "1px solid var(--black-line)",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
              e.currentTarget.style.borderColor = "var(--white-dim)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.borderColor = "var(--black-line)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.06)", padding: 8, borderRadius: 10 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.7 }}>
                <span>Replay enregistré</span>
                <span style={{ opacity: 0.6, textDecoration: "line-through", fontSize: 10 }}>
                  {SITE.offers.replay.originalPrice} {SITE.offers.replay.currency}
                </span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 2 }}>
                {SITE.offers.replay.price} {SITE.offers.replay.currency}
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}