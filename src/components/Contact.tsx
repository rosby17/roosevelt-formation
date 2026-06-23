"use client";
import { SITE } from "@/lib/data";
import { useCurrency } from "@/lib/currency";

const socials = [
  {
    key: "yt",
    label: "YouTube",
    sub: "@rooseveltmogo",
    href: SITE.socials.youtube,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.506a3.003 3.003 0 0 0-2.11 2.107C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.888.507 9.388.507 9.388.507s7.5 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.107C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    bg: "rgba(255,0,0,0.12)",
    color: "#FF0000",
  },
  {
    key: "fb",
    label: "Facebook",
    sub: "Roosevelt Mogo",
    href: SITE.socials.facebook,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    bg: "rgba(24,119,242,0.12)",
    color: "#1877F2",
  },
  {
    key: "wa",
    label: "WhatsApp",
    sub: SITE.socials.whatsappNumber,
    href: SITE.socials.whatsapp,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
      </svg>
    ),
    bg: "rgba(37,211,102,0.12)",
    color: "#25D366",
  },
];

export default function Contact() {
  const { formatPrice } = useCurrency();

  const waMsg = encodeURIComponent(
    "Bonjour Roosevelt, je suis intéressé par ton accompagnement YouTube."
  );

  return (
    <>
      <section
        id="contact"
        style={{
          padding: "120px 0",
          background: "transparent",
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
                        color: s.color,
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

              {/* Premium Live CTA */}
              <a
                href={SITE.offers.live.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  background: "linear-gradient(135deg, var(--red) 0%, #d80b2a 100%)",
                  color: "#fff",
                  padding: "16px 28px",
                  borderRadius: 14,
                  textDecoration: "none",
                  marginBottom: 12,
                  boxShadow: "0 8px 24px rgba(200, 16, 46, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(200, 16, 46, 0.45), inset 0 1px 0 rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(200, 16, 46, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.15)", padding: 6, borderRadius: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fff" d="M29 10H13C10.8 10 9 11.8 9 14v20c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4z" />
                    <path fill="rgba(255,255,255,0.3)" d="M33 18l6-4v20l-6-4V18z" />
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.9 }}>
                    <span>Session Live</span>
                    <span style={{ background: "rgba(0,0,0,0.3)", padding: "1px 5px", borderRadius: 4, textDecoration: "line-through", fontSize: 9 }}>
                      {SITE.offers.live.originalBasePrice ? formatPrice(SITE.offers.live.originalBasePrice) : `${SITE.offers.live.originalPrice} ${SITE.offers.live.currency}`}
                    </span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, marginTop: 1 }}>
                    {SITE.offers.live.basePrice ? formatPrice(SITE.offers.live.basePrice) : `${SITE.offers.live.price} ${SITE.offers.live.currency}`}
                  </div>
                </div>
              </a>

              {/* Premium Replay CTA */}
              <a
                href={SITE.offers.replay.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  background: "rgba(255, 255, 255, 0.03)",
                  color: "var(--white)",
                  padding: "16px 28px",
                  borderRadius: 14,
                  border: "1px solid var(--black-line)",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                  e.currentTarget.style.borderColor = "var(--white-dim)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor = "var(--black-line)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.06)", padding: 6, borderRadius: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.7 }}>
                    <span>Replay enregistré</span>
                    <span style={{ opacity: 0.6, textDecoration: "line-through", fontSize: 9 }}>
                      {SITE.offers.replay.originalBasePrice ? formatPrice(SITE.offers.replay.originalBasePrice) : `${SITE.offers.replay.originalPrice} ${SITE.offers.replay.currency}`}
                    </span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, marginTop: 1 }}>
                    {SITE.offers.replay.basePrice ? formatPrice(SITE.offers.replay.basePrice) : `${SITE.offers.replay.price} ${SITE.offers.replay.currency}`}
                  </div>
                </div>
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
