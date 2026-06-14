"use client";
import { MODULES } from "@/lib/data";

export default function Programme() {
  return (
    <section
      id="programme"
      style={{ padding: "120px 0", background: "transparent" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>

        {/* Intro */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "end",
            marginBottom: 80,
          }}
          className="prog-intro"
        >
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
            }}>
              <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
              Programme
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
              color: "var(--white)",
            }}>
              10 modules.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--red)" }}>Zéro remplissage.</em>
            </h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--white-muted)", lineHeight: 1.75 }}>
            De la création du compte Google jusqu&apos;à la gestion de plusieurs chaînes rentables.
            Chaque module est opérationnel et actionnable immédiatement.
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
          className="prog-grid"
        >
          {MODULES.map((m, i) => (
            <ModuleCard key={m.num} {...m} last={i === MODULES.length - 1} />
          ))}
        </div>

      </div>

      <style>{`
        .prog-intro { gap: 40px !important; }
        @media (max-width: 900px) {
          .prog-intro { grid-template-columns: 1fr !important; gap: 24px !important; }
          .prog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .prog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ModuleCard({
  num, title, desc, last,
}: {
  num: string; title: string; desc: string; last?: boolean;
}) {
  return (
    <div
      style={{
        background: "var(--black-card)",
        padding: "36px 32px",
        transition: "background 0.2s",
        gridColumn: last ? "1 / -1" : undefined,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--black-mid)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--black-card)")}
    >
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 36,
          fontWeight: 800,
          color: "var(--red)",
          opacity: 0.85,
          lineHeight: 1,
          marginBottom: 16,
          letterSpacing: "-0.01em",
          transition: "all 0.2s",
        }}
        className="prog-num"
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 18,
          fontWeight: 700,
          color: "var(--white)",
          marginBottom: 10,
          lineHeight: 1.35,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 14, color: "var(--white-muted)", lineHeight: 1.6 }}>
        {desc}
      </div>
    </div>
  );
}
