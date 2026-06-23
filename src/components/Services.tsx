"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/servicesData";
import { useCurrency } from "@/lib/currency";

export default function Services() {
  const { formatPrice } = useCurrency();
  return (
    <section
      id="services"
      style={{
        padding: "120px 0",
        background: "transparent",
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
            Services &amp; Solutions
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

        {/* Services Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                background: "var(--black-card)",
                border: "1px solid var(--black-line)",
                borderRadius: 16,
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--white-dim)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--black-line)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image en haut */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                background: "var(--black-mid)",
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Dégradé subtil en bas de l'image */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.3) 100%)",
                  pointerEvents: "none",
                }} />
                {/* Badge superposé sur l'image */}
                <span style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(200,16,46,0.25)",
                  padding: "4px 10px",
                  borderRadius: 99,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}>
                  {service.badge}
                </span>
              </div>

              {/* Corps de la carte */}
              <div style={{ padding: "20px 24px 0", flexGrow: 1 }}>
                {/* Icône */}
                <div style={{
                  color: "var(--red)",
                  background: "rgba(200,16,46,0.1)",
                  padding: 10,
                  borderRadius: 10,
                  display: "inline-flex",
                  marginBottom: 14,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.iconPath} />
                  </svg>
                </div>

                <h3 style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: "var(--white)",
                  marginBottom: 10,
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: 13,
                  color: "var(--white-muted)",
                  lineHeight: 1.65,
                  marginBottom: 16
                }}>
                  {service.desc.substring(0, 100)}...{" "}
                  <span style={{ color: "var(--red)", fontWeight: 600 }}>Voir en détail &rarr;</span>
                </p>
              </div>

              {/* Pied de carte */}
              <div style={{ padding: "0 24px 20px" }}>
                <div style={{
                  borderTop: "1px solid var(--black-line)",
                  paddingTop: 14,
                  marginTop: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline"
                }}>
                  <span style={{ fontSize: 12, color: "var(--white-dim)" }}>Tarif</span>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "var(--white)" }}>
                    {service.basePrice ? formatPrice(service.basePrice, service.priceSuffix) : service.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bannière CTA globale */}
        <div style={{
          background: "linear-gradient(135deg, rgba(200,16,46,0.1) 0%, var(--black-card) 100%)",
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
          <p style={{ fontSize: 15, color: "var(--white-muted)", maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.7 }}>
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
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--red-dim)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--red)")}
          >
            Me contacter sur WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
