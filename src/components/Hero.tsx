"use client";
import { SITE } from "@/lib/data";

const getEmbedUrl = (url: string) => {
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/embed/")) {
    return url;
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

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
          Gagnez de <em style={{ fontStyle: "italic", color: "var(--red)" }}>l'argent.</em>
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

        {/* Video Section */}
        <div
          style={{
            marginTop: 64,
            width: "100%",
            maxWidth: 800,
            margin: "64px auto 0",
            aspectRatio: "16/9",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            border: "1px solid var(--black-line)",
            background: "var(--black-card)",
            animation: "fadeUp 0.65s ease both 0.4s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {SITE.heroVideo ? (
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(SITE.heroVideo)}
              title="Présentation Roosevelt Mogo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0 }}
            ></iframe>
          ) : (
            <div style={{ textAlign: "center", color: "var(--white-dim)", padding: 32 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px", opacity: 0.5 }}>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--white-muted)", marginBottom: 8 }}>Zone réservée pour la vidéo</h3>
              <p style={{ fontSize: 14 }}>Ajoute l&apos;URL de ta vidéo dans <code>src/lib/data.ts</code> (champ <code>heroVideo</code>)</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}