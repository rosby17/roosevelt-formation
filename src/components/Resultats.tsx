"use client";
import { RESULTS } from "@/lib/data";

export default function Resultats() {
  return (
    <section id="resultats" style={{ padding: "120px 0", background: "var(--black)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>

        {/* Intro */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            marginBottom: 80,
          }}
          className="resultats-intro"
        >
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
            }}>
              <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
              Ce que tu vas maîtriser
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
              color: "var(--white)",
            }}>
              À la fin,<br />
              <em style={{ fontStyle: "italic", color: "var(--red)" }}>tu sais faire.</em>
            </h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--white-muted)", lineHeight: 1.75 }}>
            La formation n&apos;est pas théorique. Chaque module produit un résultat concret
            que tu peux appliquer le jour même.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--black-line)",
            border: "1px solid var(--black-line)",
            borderRadius: 32,
            overflow: "hidden",
          }}
          className="resultats-grid"
        >
          {RESULTS.map((r) => (
            <div
              key={r.title}
              style={{
                background: "var(--black-card)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--black-mid)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--black-card)")}
            >
              <div style={{ fontSize: 32, marginBottom: 4 }}>{r.icon}</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 17, fontWeight: 700,
                color: "var(--white)", lineHeight: 1.3,
              }}>
                {r.title}
              </div>
              <div style={{ fontSize: 13, color: "var(--white-dim)", lineHeight: 1.6 }}>
                {r.desc}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .resultats-intro { grid-template-columns: 1fr !important; gap: 28px !important; }
          .resultats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .resultats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
