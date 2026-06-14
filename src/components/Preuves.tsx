"use client";
import Image from "next/image";
import { useState } from "react";

// ─── AJOUTE TES CAPTURES ICI ───────────────────────────────────────────────
// Place tes images dans le dossier /public/preuves/
// Exemple : /public/preuves/chaine-1.png
//
// Pour chaque capture, remplis :
//   src   : chemin depuis /public  (ex: "/preuves/chaine-1.png")
//   label : texte affiché sous l'image (ex: "Monétisation atteinte en 6 semaines")
//   tag   : badge coloré (ex: "Abonnés", "Revenus", "Monétisation")

const CAPTURES: { src: string; label: string; tag: string }[] = [
  { src: "/preuves/chaine-1.jpeg", label: "25 000€ générés avec ma chaine où j'ai eu le trophé des 100k d'abonnés", tag: "Monétisation" },
  { src: "/preuves/chaine-2.jpeg", label: "1 200 abonnés en 30 jours", tag: "Abonnés" },
  { src: "/preuves/chaine-3.jpeg", label: "Revenu en 3 jours de monetisation chaine lancé en 2 semaines", tag: "Revenus" },

];
// ───────────────────────────────────────────────────────────────────────────

const TAG_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  Monétisation: { bg: "rgba(250,204,21,0.1)", color: "#FACC15", border: "rgba(250,204,21,0.25)" },
  Abonnés: { bg: "rgba(74,222,128,0.1)", color: "#4ADE80", border: "rgba(74,222,128,0.25)" },
  Revenus: { bg: "rgba(200,16,46,0.08)", color: "var(--red)", border: "rgba(200,16,46,0.2)" },
  Résultats: { bg: "rgba(96,165,250,0.1)", color: "#60A5FA", border: "rgba(96,165,250,0.25)" },
};

const defaultTagStyle = { bg: "rgba(255,255,255,0.06)", color: "var(--white-dim)", border: "var(--black-line)" };

function getTagStyle(tag: string) {
  return TAG_COLORS[tag] ?? defaultTagStyle;
}

// Placeholder card displayed while no captures are uploaded
function PlaceholderCard({ index }: { index: number }) {
  return (
    <div style={{
      background: "var(--black-mid)",
      border: "1px dashed var(--black-line)",
      borderRadius: 16,
      aspectRatio: "16/10",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 10, color: "var(--white-dim)",
      padding: 24,
    }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 12, opacity: 0.5 }}>Capture {index + 1} — à venir</span>
    </div>
  );
}

export default function Preuves() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const showPlaceholders = CAPTURES.length === 0;

  return (
    <section
      id="preuves"
      style={{
        padding: "120px 0",
        background: "var(--black-card)",
        borderTop: "1px solid var(--black-line)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
          }}>
            <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
            Résultats réels
            <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
            color: "var(--white)", marginBottom: 16,
          }}>
            Pas des promesses.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--red)" }}>Des preuves.</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--white-muted)", lineHeight: 1.75 }}>
            Des captures d&apos;écran de chaînes et de revenus réels — de mes apprenants qui ont appliqué la méthode.
          </p>
        </div>

        {/* Gallery grid */}
        {showPlaceholders ? (
          // Placeholder state (aucune image encore)
          <div>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
              className="preuves-grid"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <PlaceholderCard key={i} index={i} />
              ))}
            </div>
            <div style={{
              marginTop: 24,
              display: "flex", alignItems: "center", gap: 12, justifyContent: "center",
              background: "var(--red-soft)",
              border: "1px solid rgba(200,16,46,0.2)",
              borderRadius: 12, padding: "14px 20px",
              fontSize: 13, color: "var(--white-muted)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
              </svg>
              <span>
                Ajoute tes captures dans <code style={{ color: "var(--white)", background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 4 }}>/public/preuves/</code> et remplis le tableau <code style={{ color: "var(--white)", background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 4 }}>CAPTURES</code> dans <code style={{ color: "var(--white)", background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 4 }}>Preuves.tsx</code>
              </span>
            </div>
          </div>
        ) : (
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
            className="preuves-grid"
          >
            {CAPTURES.map((c, i) => {
              const ts = getTagStyle(c.tag);
              return (
                <div
                  key={i}
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {/* Image card */}
                  <div
                    onClick={() => setLightbox(c.src)}
                    style={{
                      position: "relative",
                      borderRadius: 16,
                      overflow: "hidden",
                      aspectRatio: "16/10",
                      cursor: "zoom-in",
                      border: "1px solid var(--black-line)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Image
                      src={c.src}
                      alt={c.label}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {/* Zoom hint overlay */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "rgba(13,13,13,0)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.2s",
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13,13,13,0.35)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(13,13,13,0)"; }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0, transition: "opacity 0.2s" }} className="zoom-icon">
                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </div>
                  {/* Label + Tag */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontSize: 13, color: "var(--white-muted)", lineHeight: 1.4, flex: 1 }}>
                      {c.label}
                    </span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                      textTransform: "uppercase", whiteSpace: "nowrap",
                      background: ts.bg, color: ts.color,
                      border: `1px solid ${ts.border}`,
                      padding: "3px 10px", borderRadius: 99,
                    }}>
                      {c.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: 24,
          }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
            <Image
              src={lightbox}
              alt="Capture agrandie"
              width={1200}
              height={750}
              style={{ objectFit: "contain", borderRadius: 12, maxWidth: "90vw", maxHeight: "90vh" }}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: -12, right: -12,
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--black-card)", border: "1px solid var(--black-line)",
                color: "var(--white)", fontSize: 18, lineHeight: 1,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .preuves-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .preuves-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
