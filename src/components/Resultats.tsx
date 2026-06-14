"use client";
import { RESULTS } from "@/lib/data";

// Heroicons outline — clean SVG paths
const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
    </svg>
  ),
  banknotes: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <circle cx="12" cy="12" r="2.5"/>
      <path d="M6 12h.01M18 12h.01"/>
    </svg>
  ),
  crosshairs: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
    </svg>
  ),
  cpu: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="1.5"/>
      <path d="M9 6V4M12 6V4M15 6V4M9 20v-2M12 20v-2M15 20v-2M6 9H4M6 12H4M6 15H4M20 9h-2M20 12h-2M20 15h-2"/>
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l4-6 4 3 4-7 4 4"/>
      <path d="M3 21h18"/>
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <path d="M3.6 9h16.8M3.6 15h16.8"/>
      <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"/>
    </svg>
  ),
};

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
            L&apos;accompagnement n&apos;est pas théorique. Chaque module produit un résultat concret
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
                gap: 14,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--black-mid)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--black-card)")}
            >
              {/* Icon container */}
              <div style={{
                width: 40, height: 40,
                borderRadius: 10,
                background: "rgba(200,16,46,0.1)",
                border: "1px solid rgba(200,16,46,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--red)",
                flexShrink: 0,
              }}>
                {ICONS[r.icon]}
              </div>
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
