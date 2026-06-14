"use client";
import { useState } from "react";
import { FAQS, SITE } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "120px 0",
        background: "var(--black-card)",
        borderTop: "1px solid var(--black-line)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "360px 1fr",
            gap: 100,
            alignItems: "start",
          }}
          className="faq-inner"
        >
          {/* Sticky left */}
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
            }}>
              <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
              FAQ
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
              color: "var(--white)", marginBottom: 16,
            }}>
              Les questions<br />
              <em style={{ fontStyle: "italic", color: "var(--red)" }}>qu&apos;on me pose.</em>
            </h2>
            <p style={{ fontSize: 15, color: "var(--white-muted)", lineHeight: 1.75, marginBottom: 32 }}>
              D&apos;autres questions ? Pose-les directement sur WhatsApp.
            </p>
            <a
              href={`${SITE.socials.whatsapp}?text=${encodeURIComponent(
                "Bonjour Roosevelt, j'ai une question sur ta formation YouTube."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "var(--red)",
                border: "1px solid rgba(200,16,46,0.4)",
                padding: "12px 22px",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--red-soft)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              💬 Écrire sur WhatsApp
            </a>
          </div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--black-line)",
                    ...(i === 0 ? { borderTop: "1px solid var(--black-line)" } : {}),
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "24px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      textAlign: "left",
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 500,
                      color: isOpen ? "var(--red)" : "var(--white)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      !isOpen && (e.currentTarget.style.color = "var(--white-muted)")
                    }
                    onMouseLeave={(e) =>
                      !isOpen && (e.currentTarget.style.color = "var(--white)")
                    }
                  >
                    {f.q}
                    <span
                      style={{
                        width: 28, height: 28,
                        borderRadius: "50%",
                        border: `1px solid ${isOpen ? "var(--red)" : "var(--black-line)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        color: isOpen ? "var(--red)" : "var(--white-dim)",
                        fontSize: 18,
                        fontWeight: 300,
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: "transform 0.3s, border-color 0.2s, color 0.2s",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease, padding 0.3s",
                      fontSize: 14,
                      color: "var(--white-muted)",
                      lineHeight: 1.75,
                      padding: isOpen ? "0 0 24px" : 0,
                    }}
                  >
                    {f.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
          .faq-inner > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
