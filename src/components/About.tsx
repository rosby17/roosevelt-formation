"use client";
import Image from "next/image";

const facts = [
  "Créateur YouTube multi-niches — football, psychologie, santé, spiritualité",
  "Spécialiste HeyGen, avatars IA et production vidéo sans visage",
  "Stratégies testées sur audiences francophones et anglophones depuis Yaoundé",
  "Entrepreneur dans l'économie digitale africaine depuis plusieurs années",
];

const metrics = [
  { num: "10+", label: "Chaînes créées" },
  { num: "15–30", label: "Vidéos / mois" },
  { num: "1 000", label: "Abonnés objectif" },
  { num: "4 000h", label: "Watch time requis" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "var(--black-card)",
        borderTop: "1px solid var(--black-line)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>
        {/* Split card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1px solid var(--black-line)",
            borderRadius: 32,
            overflow: "hidden",
          }}
          className="about-grid"
        >
          {/* Photo */}
          <div style={{ position: "relative", minHeight: 520, background: "var(--black-mid)" }}>
            <Image
              src="https://yt3.googleusercontent.com/ytc/AIdro_mPAHHBMO5KR3C0CDNqz9UFm_lDj03E3l0d3ERFGnXVWA=s900-c-k-c0x00ffffff-no-rj"
              alt="Roosevelt Mogo"
              fill
              style={{ objectFit: "cover", objectPosition: "center top", filter: "grayscale(15%)" }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(200,16,46,0.12) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Text */}
          <div
            style={{
              padding: "64px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "1px solid var(--black-line)",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: 18,
              }}
            >
              <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
              Qui je suis
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                color: "var(--white)",
                marginBottom: 16,
              }}
            >
              Pas de théorie.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--red)" }}>Du vécu.</em>
            </h2>

            <p style={{ fontSize: 15, color: "var(--white-muted)", lineHeight: 1.8, marginTop: 4 }}>
              Je suis Roosevelt Mogo, entrepreneur digital et créateur YouTube basé à Yaoundé.
              J&apos;ai construit plusieurs chaînes YouTube dans différentes niches pour des audiences
              francophones et anglophones.
            </p>

            {/* Facts list */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, margin: "28px 0 36px" }}>
              {facts.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "var(--red)",
                      marginTop: 8, flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 15, color: "var(--white-muted)", lineHeight: 1.6 }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* Metrics grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                background: "var(--black-line)",
                border: "1px solid var(--black-line)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {metrics.map((m) => (
                <div
                  key={m.num}
                  style={{
                    background: "var(--black-card)",
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 34,
                      fontWeight: 900,
                      color: "var(--red)",
                      lineHeight: 1,
                    }}
                  >
                    {m.num}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--white-dim)", marginTop: 6 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { display: none; }
          .about-grid > div:last-child { border-left: none !important; padding: 48px 28px !important; }
        }
      `}</style>
    </section>
  );
}
