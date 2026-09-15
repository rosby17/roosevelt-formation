"use client";
import Image from "next/image";

const facts = [
  "Créateur YouTube multi-niches — football, psychologie, santé, spiritualité, Developpement personnel, Amour & Relation...",
  "Spécialiste chaine Faceless",
  "Stratégies testées sur audiences francophones et anglophones",
  "Fondateur de plusieurs SaaS (iziVoice, Kappgen) utilisés par des créateurs de contenu",
  "Développeur Full-Stack & Designer — conception, architecture et paiements de bout en bout",
];

const metrics = [
  { num: "78+", label: "Chaînes créées" },
  { num: "3 ans+", label: "Expérience Faceless" },
  { num: "45 000€+", label: "Généré grâce à YouTube" },
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
          <div style={{ position: "relative", minHeight: 420, background: "var(--black-mid)" }} className="about-photo">
            <Image
              src="/photo.png"
              alt="Roosevelt Mogo"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
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

            <p style={{ fontSize: 15, color: "var(--white-muted)", lineHeight: 1.9, marginTop: 4 }}>
              Créateur YouTube faceless depuis 3 ans, aussi développeur full-stack et designer produit —
              j&apos;ai conçu mes propres SaaS (iziVoice, Kappgen).{" "}
              <a
                href="https://roosevelt.izivoice.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Voir mon portfolio →
              </a>
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
                gridTemplateColumns: "1fr 1fr 1fr",
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
                      fontSize: m.num.length > 6 ? 26 : 34,
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

        {/* Trophée Silver Play Button — bien visible */}
        <div
          className="trophy-showcase"
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            alignItems: "center",
            gap: 40,
            background: "linear-gradient(135deg, rgba(200,16,46,0.08) 0%, var(--black) 100%)",
            border: "1px solid var(--black-line)",
            borderRadius: 32,
            padding: "40px 48px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              border: "1px solid var(--black-line)",
              justifySelf: "center",
            }}
          >
            <Image
              src="/trophee.jpeg"
              alt="Trophée YouTube Silver Play Button — 100 000 abonnés"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div style={{ fontSize: 40, marginBottom: 8, lineHeight: 1 }}>🏆</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 900,
                color: "var(--white)",
                marginBottom: 10,
                lineHeight: 1.15,
              }}
            >
              Silver Play Button — <span style={{ color: "var(--red)" }}>100 000 abonnés</span>
            </h3>
            <p style={{ fontSize: 15, color: "var(--white-muted)", lineHeight: 1.8, maxWidth: 480 }}>
              Trophée officiel remis par YouTube à Mogo Kamdem Roosevelt pour avoir dépassé les 100 000 abonnés.
              La preuve concrète que les stratégies que j&apos;enseigne fonctionnent vraiment.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { min-height: 320px !important; }
          .about-grid > div:last-child { border-left: none !important; border-top: 1px solid var(--black-line); padding: 48px 28px !important; }
          .trophy-showcase { grid-template-columns: 1fr !important; padding: 32px 28px !important; text-align: center; }
          .trophy-showcase > div:first-child { max-width: 220px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
