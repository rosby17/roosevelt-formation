"use client";
import Image from "next/image";

const facts = [
  "Créateur YouTube multi-niches — football, psychologie, santé, spiritualité, Developpement personnel, Amour & Relation...",
  "Spécialiste chaine Faceless",
  "Stratégies testées sur audiences francophones et anglophones",
  "Entrepreneur dans l'économie digitale depuis plusieurs années",
];

const metrics = [
  { num: "78+", label: "Chaînes créées" },
  { num: "3 ans+", label: "Expérience Faceless" },
  { num: "100K", label: "Trophée des 100k abonnés", icon: "🏆" },
  { num: "45 000€+", label: "Généré grâce à YouTube" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "var(--white)",
        borderTop: "1px solid #EAEAEA",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>
        {/* Split card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1px solid #EAEAEA",
            borderRadius: 32,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
          }}
          className="about-grid"
        >
          {/* Photo */}
          <div style={{ position: "relative", minHeight: 520, background: "#F5F5F5" }}>
            <Image
              src="/photo.png"
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
              background: "var(--white)",
              borderLeft: "1px solid #EAEAEA",
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
                color: "var(--black)",
                marginBottom: 16,
              }}
            >
              Pas de théorie.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--red)" }}>Du vécu.</em>
            </h2>

            <p style={{ fontSize: 15, color: "var(--black-mid)", lineHeight: 1.8, marginTop: 4 }}>
              Je m&apos;appelle Roosevelt Mogo, créateur de contenu sur YouTube faceless depuis plus de 3 ans aujourd&apos;hui.
              J&apos;ai construit plusieurs chaînes YouTube dans différentes niches,
              généré plus de 45 000€ de revenus et décroché le Trophée YouTube des 100 000 abonnés.
              Tout ce que j&apos;enseigne, je l&apos;ai vécu.
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
                  <span style={{ fontSize: 15, color: "var(--black-mid)", lineHeight: 1.6, fontWeight: 500 }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* Metrics grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                background: "#EAEAEA",
                border: "1px solid #EAEAEA",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {metrics.map((m) => (
                <div
                  key={m.num}
                  style={{
                    background: "var(--white)",
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  {m.icon && (
                    <div style={{ fontSize: 20, marginBottom: 2, lineHeight: 1 }}>{m.icon}</div>
                  )}
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: m.num.length > 6 ? 26 : 34,
                      fontWeight: 900,
                      color: "var(--red)",
                      lineHeight: 1,
                    }}
                  >
                    {m.num}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--black-mid)", fontWeight: 600, marginTop: 6 }}>
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
