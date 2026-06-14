"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { SERVICES } from "@/lib/servicesData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const service = SERVICES.find((s) => s.id === resolvedParams.id);

  if (!service) {
    return (
      <>
        <Navbar />
        <div style={{ height: "80px", background: "var(--black-bg)" }} />
        <div style={{ padding: "120px 24px", textAlign: "center", color: "var(--white)" }}>
          <h2 style={{ fontSize: 32, marginBottom: 16 }}>Service introuvable</h2>
          <p style={{ color: "var(--white-muted)", marginBottom: 32 }}>Ce service n&apos;existe pas ou a été déplacé.</p>
          <Link href="/services" style={{ color: "var(--red)", fontWeight: 600, textDecoration: "underline" }}>
            Retourner aux services
          </Link>
        </div>
        <Contact />
      </>
    );
  }

  // Filter out the current service to display others
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <>
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: "80px", background: "var(--black-bg)" }} />

      {/* Main product presentation */}
      <main style={{ padding: "80px 0", background: "var(--black-bg)", color: "var(--white)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ marginBottom: 32 }}>
            <Link href="/services" style={{ color: "var(--white-dim)", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
              &larr; Retourner aux services
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 48,
            alignItems: "start",
            background: "var(--black-card)",
            border: "1px solid var(--black-line)",
            borderRadius: 24,
            padding: 40,
            marginBottom: 80
          }} className="product-layout">
            
            {/* Left Column: Image Card */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1.1/1",
              background: "var(--black-mid)",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--black-line)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
            }}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                background: "var(--red)",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                padding: "6px 12px",
                borderRadius: 6,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "0 4px 12px rgba(200,16,46,0.3)"
              }}>
                Service Rapide
              </div>
            </div>

            {/* Right Column: Info */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <h1 style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: 12,
                  color: "var(--white)"
                }}>
                  {service.title}
                </h1>

                {/* Chariow Stats */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", fontSize: 13, color: "var(--white-dim)", marginBottom: 24 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ color: "#FACC15" }}>★</span> {service.rating}
                  </span>
                  <span style={{ color: "var(--black-line)" }}>|</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    👥 {service.purchases}
                  </span>
                  <span style={{ color: "var(--black-line)" }}>|</span>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--red)",
                    background: "rgba(200,16,46,0.08)",
                    border: "1px solid rgba(200,16,46,0.15)",
                    padding: "2px 8px",
                    borderRadius: 4
                  }}>
                    {service.badge}
                  </span>
                </div>

                {/* Price block */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28 }}>
                  {service.originalPrice && (
                    <span style={{ fontSize: 18, color: "var(--white-dim)", textDecoration: "line-through", opacity: 0.65 }}>
                      {service.originalPrice}
                    </span>
                  )}
                  <span style={{ fontSize: 32, fontWeight: 900, color: "var(--red)" }}>
                    {service.price}
                  </span>
                </div>

                <a
                  href={service.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    background: "#000",
                    border: "1.5px solid var(--black-line)",
                    color: "#fff",
                    padding: "16px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    textAlign: "center",
                    marginBottom: 28
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--red)";
                    e.currentTarget.style.borderColor = "var(--red)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#000";
                    e.currentTarget.style.borderColor = "var(--black-line)";
                  }}
                >
                  Acheter maintenant
                </a>

                {/* Payment Methods */}
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                  <div style={{ fontSize: 12, color: "var(--white-dim)", marginBottom: 10 }}>Moyens de paiement disponibles</div>
                  <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
                    {["Orange Money", "MTN MoMo", "Wave", "Visa", "Mastercard"].map((m, idx) => (
                      <span key={idx} style={{
                        fontSize: 11,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--black-line)",
                        borderRadius: 6,
                        padding: "6px 10px",
                        color: "var(--white-muted)"
                      }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div style={{
                  borderTop: "1px solid var(--black-line)",
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "center",
                  gap: 32,
                  fontSize: 13,
                  color: "var(--white-muted)"
                }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(window.location.href);
                      alert("Lien du service copié !");
                    }}
                    style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
                  >
                    🔗 Partager
                  </a>
                  <a
                    href="https://wa.me/237655306425"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
                  >
                    💬 Contact
                  </a>
                  <a
                    href="https://wa.me/237655306425?text=Bonjour,%20je%20souhaite%20savoir%20comment%20acheter%20le%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--red)", textDecoration: "none", fontWeight: 600 }}
                  >
                    ❓ Comment acheter ?
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Section: Other services */}
          {otherServices.length > 0 && (
            <div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 900,
                color: "var(--white)",
                marginBottom: 36,
                letterSpacing: "-0.01em"
              }}>
                Autres services disponibles
              </h2>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24
              }}>
                {otherServices.map((other) => (
                  <Link
                    key={other.id}
                    href={`/services/${other.id}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: "var(--black-card)",
                      border: "1px solid var(--black-line)",
                      borderRadius: 16,
                      padding: 24,
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
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                        <div style={{ color: "var(--red)", background: "rgba(200,16,46,0.1)", padding: 10, borderRadius: 10 }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={other.iconPath} />
                          </svg>
                        </div>
                        <span style={{
                          fontSize: 9,
                          fontWeight: 700,
                          color: "var(--red)",
                          background: "rgba(200,16,46,0.08)",
                          border: "1px solid rgba(200,16,46,0.2)",
                          padding: "3px 8px",
                          borderRadius: 99
                        }}>
                          {other.badge}
                        </span>
                      </div>

                      <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--white)", marginBottom: 8 }}>
                        {other.title}
                      </h3>
                      
                      <p style={{ fontSize: 13, color: "var(--white-muted)", lineHeight: 1.5, marginBottom: 16 }}>
                        {other.desc.substring(0, 80)}...
                      </p>
                    </div>

                    <div style={{ borderTop: "1px solid var(--black-line)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontSize: 11, color: "var(--white-dim)" }}>Tarif</span>
                      <span style={{ fontSize: 15, fontWeight: 800, color: "var(--white)" }}>{other.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Contact />

      <style>{`
        @media (max-width: 800px) {
          .product-layout { grid-template-columns: 1fr !important; gap: 32px !important; padding: 28px !important; }
        }
      `}</style>
    </>
  );
}
