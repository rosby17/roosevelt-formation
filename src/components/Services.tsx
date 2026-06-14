"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/servicesData";

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 0",
        background: "var(--black)",
        borderTop: "1px solid var(--black-line)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
          }}>
            <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
            Services & Solutions
            <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
            color: "var(--white)", marginBottom: 16,
          }}>
            Résous tes blocages.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--red)" }}>Propulse tes chaînes.</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--white-muted)", lineHeight: 1.75 }}>
            Clique sur un service pour voir ses détails complets, l&apos;acheter ou le partager.
          </p>
        </div>

        {/* Services Grid (Product selection) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 48
        }}>
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "var(--black-card)",
                border: "1px solid var(--black-line)",
                borderRadius: 16,
                padding: 32,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--white-dim)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--black-line)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div style={{ color: "var(--red)", background: "rgba(200,16,46,0.1)", padding: 12, borderRadius: 12 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={service.iconPath} />
                    </svg>
                  </div>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    background: "rgba(200,16,46,0.08)",
                    border: "1px solid rgba(200,16,46,0.2)",
                    padding: "4px 10px",
                    borderRadius: 99
                  }}>
                    {service.badge}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "var(--white)",
                  marginBottom: 12,
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: 14,
                  color: "var(--white-muted)",
                  lineHeight: 1.6,
                  marginBottom: 24
                }}>
                  {service.desc.substring(0, 110)}... <span style={{ color: "var(--red)", fontWeight: 600 }}>Voir en détail &rarr;</span>
                </p>
              </div>

              <div>
                <div style={{ borderTop: "1px solid var(--black-line)", paddingTop: 20, marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 13, color: "var(--white-dim)" }}>Tarif</span>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--white)" }}>{service.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Global CTA Banner */}
        <div style={{
          background: "linear-gradient(135deg, rgba(200,16,46,0.1) 0%, rgba(13,13,13,0.9) 100%)",
          border: "1px solid rgba(200,16,46,0.2)",
          borderRadius: 20,
          padding: "40px",
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto"
        }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--white)", marginBottom: 12 }}>
            Tu as un besoin spécifique ou un autre blocage ?
          </h3>
          <p style={{ fontSize: 15, color: "var(--white-muted)", marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>
            Discute directement avec moi de ton problème de monétisation, de paiement ou d&apos;outils. Nous trouverons une solution adaptée.
          </p>
          <a
            href="https://wa.me/237655306425"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--red)",
              color: "var(--white)",
              padding: "14px 28px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--red-dim)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--red)"}
          >
            Me contacter sur WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
