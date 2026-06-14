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
        <div style={{ height: "80px", background: "var(--black)" }} />
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
      <div style={{ height: "80px", background: "var(--black)" }} />

      {/* Main product presentation */}
      <main style={{ padding: "80px 0", background: "var(--black)", color: "var(--white)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ marginBottom: 32 }}>
            <Link href="/services" style={{ color: "var(--white-dim)", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
              &larr; Retourner aux services
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(300px, 450px) 1fr",
            gap: 64,
            alignItems: "start",
            background: "var(--black-card)",
            border: "1px solid var(--black-line)",
            borderRadius: 24,
            padding: 48,
            marginBottom: 80
          }} className="product-layout">
            
            {/* Left Column: Image */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              background: "var(--black-mid)",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--black-line)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "contain", padding: 40 }}
              />
            </div>

            {/* Right Column: Info */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
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

                <h1 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: 24,
                  letterSpacing: "-0.01em"
                }}>
                  {service.title}
                </h1>

                <p style={{
                  fontSize: 16,
                  color: "var(--white-muted)",
                  lineHeight: 1.8,
                  marginBottom: 32
                }}>
                  {service.desc}
                </p>
              </div>

              <div>
                <div style={{
                  borderTop: "1px solid var(--black-line)",
                  paddingTop: 24,
                  marginBottom: 28,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline"
                }}>
                  <span style={{ fontSize: 14, color: "var(--white-dim)" }}>Tarif</span>
                  <span style={{ fontSize: 26, fontWeight: 900, color: "var(--red)" }}>{service.price}</span>
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
                    background: "var(--red)",
                    color: "var(--white)",
                    padding: "16px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(200,16,46,0.35)",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--red-dim)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "var(--red)"}
                >
                  Commander ce service &rarr;
                </a>
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
