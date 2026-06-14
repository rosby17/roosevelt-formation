"use client";
import Image from "next/image";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <header
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 480px",
        paddingTop: 80,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 10% 50%, rgba(200,16,46,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Left — text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 60px 80px 28px",
          maxWidth: 760,
          marginLeft: "auto",
          paddingLeft: "max(28px, calc((100vw - 1120px) / 2 + 28px))",
          borderRight: "1px solid var(--black-line)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
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
            Accompagnement · Cameroun &amp; Afrique francophone
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.03,
            letterSpacing: "-0.02em",
            color: "var(--white)",
            marginBottom: 24,
            animation: "fadeUp 0.65s ease both 0.1s",
          }}
        >
          YouTube,
          <br />
          <em style={{ fontStyle: "italic", color: "var(--red)" }}>monétisé.</em>
          <br />
          Sans audience.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 17,
            color: "var(--white-muted)",
            lineHeight: 1.75,
            maxWidth: 460,
            marginBottom: 48,
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
            marginBottom: 64,
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
              gap: 8,
              background: "var(--red)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              padding: "14px 32px",
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
            Session Live — 50 000 FCFA
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
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
            Replay — 10 000 FCFA
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 40,
            paddingTop: 40,
            borderTop: "1px solid var(--black-line)",
            flexWrap: "wrap",
            animation: "fadeUp 0.65s ease both 0.4s",
          }}
        >
          {[
            { num: "10", label: "Modules\ncomplets" },
            { num: "1 000", label: "Abonnés\nobjectif" },
            { num: "0 €", label: "Équipement\nrequis" },
          ].map((s) => (
            <div key={s.num}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 900,
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--white-dim)",
                  marginTop: 4,
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — photo */}
      <div
        style={{
          position: "relative",
          background: "var(--black-card)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        className="hero-photo-panel"
      >
        <Image
          src="/photo.png"
          alt="Roosevelt Mogo"
          fill
          style={{ objectFit: "cover", objectPosition: "center top", filter: "grayscale(10%)" }}
          priority
        />
        {/* Gradient overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.1) 50%, transparent 100%)",
          }}
        />
        {/* Info card */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            margin: 24,
            background: "rgba(13,13,13,0.85)",
            backdropFilter: "blur(16px)",
            border: "1px solid var(--black-line)",
            borderRadius: 20,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--white)",
            }}
          >
            Roosevelt Mogo
          </div>
          <div style={{ fontSize: 13, color: "var(--red)", marginTop: 3, fontWeight: 500 }}>
            Créateur · Entrepreneur digital · Formateur
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            {["YouTube", "Avatars IA", "Multi-chaînes"].map((b) => (
              <span
                key={b}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  background: "var(--red-soft)",
                  color: "var(--red)",
                  border: "1px solid rgba(200,16,46,0.25)",
                  padding: "4px 12px",
                  borderRadius: 99,
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          header { grid-template-columns: 1fr !important; }
          .hero-photo-panel { display: none !important; }
        }
      `}</style>
    </header>
  );
}
