"use client";
import { SITE } from "@/lib/data";

const socials = [
  {
    key: "yt",
    label: "YouTube",
    sub: "@rooseveltmogo",
    href: SITE.socials.youtube,
    icon: "▶",
    bg: "rgba(255,0,0,0.12)",
  },
  {
    key: "fb",
    label: "Facebook",
    sub: "Roosevelt Mogo",
    href: SITE.socials.facebook,
    icon: "f",
    bg: "rgba(24,119,242,0.12)",
  },
  {
    key: "wa",
    label: "WhatsApp",
    sub: SITE.socials.whatsappNumber,
    href: SITE.socials.whatsapp,
    icon: "💬",
    bg: "rgba(37,211,102,0.12)",
  },
];

export default function Contact() {
  const waMsg = encodeURIComponent(
    "Bonjour Roosevelt, je suis intéressé par ton accompagnement YouTube."
  );

  return (
    <>
      <section
        id="contact"
        style={{
          padding: "120px 0",
          background: "var(--black)",
          borderTop: "1px solid var(--black-line)",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
            className="contact-inner"
          >
            {/* Left — socials */}
            <div>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
              }}>
                <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
                Me retrouver
              </div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
                color: "var(--white)", marginBottom: 16,
              }}>
                On est<br />
                <em style={{ fontStyle: "italic", color: "var(--red)" }}>connectés partout.</em>
              </h2>
              <p style={{ fontSize: 15, color: "var(--white-muted)", lineHeight: 1.8, marginBottom: 36 }}>
                Suis mon travail, pose tes questions, ou rejoins ma communauté de créateurs
                qui construisent leur liberté financière en ligne.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "18px 22px",
                      border: "1px solid var(--black-line)",
                      borderRadius: 12,
                      color: "var(--white)",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 500,
                      transition: "border-color 0.2s, transform 0.15s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--red)";
                      e.currentTarget.style.background = "var(--red-soft)";
                      e.currentTarget.style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--black-line)";
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 42, height: 42,
                        borderRadius: 6,
                        background: s.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div>{s.label}</div>
                      <div style={{ fontSize: 12, color: "var(--white-dim)", marginTop: 2 }}>{s.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — CTA box */}
            <div
              style={{
                background: "var(--black-card)",
                border: "1px solid var(--black-line)",
                borderRadius: 32,
                padding: "48px 44px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Red top line */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, transparent, var(--red), transparent)",
                }}
              />
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 30, fontWeight: 900,
                color: "var(--white)", letterSpacing: "-0.01em",
                lineHeight: 1.2, marginBottom: 14,
              }}>
                Prêt à lancer<br />ta première chaîne ?
              </div>
              <p style={{ fontSize: 14, color: "var(--white-muted)", lineHeight: 1.7, marginBottom: 32 }}>
                Choisis ton niveau d&apos;accès et commence dès aujourd&apos;hui.
                Les places pour les sessions Live sont limitées.
              </p>

              <a
                href={SITE.offers.live.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", justifyContent: "center", alignItems: "center",
                  width: "100%", padding: "14px 32px",
                  background: "var(--red)", color: "#fff",
                  borderRadius: 6, fontSize: 15, fontWeight: 600,
                  textDecoration: "none", marginBottom: 12,
                  boxShadow: "0 4px 20px rgba(200,16,46,0.3)",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--red-dim)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--red)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                  <span style={{ fontSize: 11, opacity: 0.7, textDecoration: "line-through", lineHeight: 1 }}>
                    {SITE.offers.live.currency} {SITE.offers.live.originalPrice}
                  </span>
                  <span>Session Live — {SITE.offers.live.currency} {SITE.offers.live.price}</span>
                </span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>

              <a
                href={SITE.offers.replay.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", justifyContent: "center", alignItems: "center",
                  width: "100%", padding: "14px 32px",
                  background: "transparent", color: "var(--white)",
                  border: "1px solid var(--black-line)",
                  borderRadius: 6, fontSize: 15, fontWeight: 600,
                  textDecoration: "none",
                  transition: "border-color 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--white-dim)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--black-line)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                  <span style={{ fontSize: 11, opacity: 0.55, textDecoration: "line-through", lineHeight: 1 }}>
                    {SITE.offers.replay.currency} {SITE.offers.replay.originalPrice}
                  </span>
                  <span>Replay — {SITE.offers.replay.currency} {SITE.offers.replay.price}</span>
                </span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>

              <div style={{
                marginTop: 22, paddingTop: 20,
                borderTop: "1px solid var(--black-line)",
                textAlign: "center",
              }}>
                <p style={{ fontSize: 12, color: "var(--white-dim)" }}>
                  Question ?{" "}
                  <a
                    href={`${SITE.socials.whatsapp}?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--red)", fontWeight: 600,
                      textDecoration: "underline", textUnderlineOffset: 2,
                    }}
                  >
                    WhatsApp {SITE.socials.whatsappNumber}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--black-card)",
          borderTop: "1px solid var(--black-line)",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1120, margin: "0 auto", padding: "0 28px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
          }}
        >
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: 17, fontWeight: 700, color: "var(--white)",
          }}>
            Roosevelt <span style={{ color: "var(--red)" }}>Mogo</span>
          </div>
          <p style={{ fontSize: 12, color: "var(--white-dim)" }}>
            © 2026 Roosevelt Mogo
          </p>
          <ul style={{ display: "flex", gap: 22, listStyle: "none" }}>
            {[
              { label: "YouTube", href: SITE.socials.youtube },
              { label: "Facebook", href: SITE.socials.facebook },
              { label: "WhatsApp", href: SITE.socials.whatsapp },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12, color: "var(--white-dim)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-dim)")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
