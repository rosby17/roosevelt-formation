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

                {service.contactOnly ? (
                  /* Bouton WhatsApp pour les services à commission négociée */
                  <a
                    href="https://wa.me/237655306425"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      width: "100%",
                      background: "#25D366",
                      color: "#fff",
                      padding: "16px",
                      borderRadius: 12,
                      fontSize: 16,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 6px 20px rgba(37,211,102,0.30)",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5e")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
                  >
                    {/* WhatsApp icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Me contacter sur WhatsApp
                  </a>
                ) : (
                  /* Bouton de commande standard */
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
                      color: "#fff",
                      padding: "16px",
                      borderRadius: 12,
                      fontSize: 16,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 6px 20px rgba(200,16,46,0.35)",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--red-dim)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--red)")}
                  >
                    Commander ce service &rarr;
                  </a>
                )}
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
                        src={other.image}
                        alt={other.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.3) 100%)",
                        pointerEvents: "none",
                      }} />
                      <span style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--red)",
                        background: "rgba(255,255,255,0.92)",
                        border: "1px solid rgba(200,16,46,0.25)",
                        padding: "3px 8px",
                        borderRadius: 99,
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}>
                        {other.badge}
                      </span>
                    </div>

                    {/* Corps */}
                    <div style={{ padding: "16px 18px 0", flexGrow: 1 }}>
                      <div style={{ color: "var(--red)", background: "rgba(200,16,46,0.1)", padding: 8, borderRadius: 8, display: "inline-flex", marginBottom: 12 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={other.iconPath} />
                        </svg>
                      </div>

                      <h3 style={{ fontSize: 15, fontWeight: 800, color: "var(--white)", marginBottom: 8, lineHeight: 1.3 }}>
                        {other.title}
                      </h3>

                      <p style={{ fontSize: 12, color: "var(--white-muted)", lineHeight: 1.55, marginBottom: 14 }}>
                        {other.desc.substring(0, 80)}...
                      </p>
                    </div>

                    {/* Pied */}
                    <div style={{ padding: "0 18px 16px" }}>
                      <div style={{ borderTop: "1px solid var(--black-line)", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <span style={{ fontSize: 11, color: "var(--white-dim)" }}>Tarif</span>
                        <span style={{ fontSize: 14, fontWeight: 800, color: "var(--white)" }}>{other.price}</span>
                      </div>
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
