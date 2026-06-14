"use client";

import { useState } from "react";

const SERVICES = [
  {
    id: "phone-validation",
    title: "Validation de numéro de téléphone de chaîne",
    desc: "Déverrouille les fonctionnalités avancées de YouTube (miniatures personnalisées, vidéos de plus de 15 minutes, diffusions en direct) en faisant valider ton numéro via un compte sécurisé et propre.",
    badge: "Indispensable",
    price: "2 500 FCFA",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "adsense-link",
    title: "Association de compte AdSense YouTube éligible",
    desc: "Tu résides dans un pays non éligible ? Nous t'aidons à associer ton compte YouTube à un compte Google AdSense valide et vérifié dans un pays éligible pour percevoir tes revenus sans blocage. Pourcentage négocié lors du premier contact.",
    badge: "Monétisation",
    price: "20% à 40% de commission",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    id: "facebook-payout",
    title: "Configuration de compte de règlement Facebook",
    desc: "Reçois tes gains de pages Facebook monétisées (étoiles, pubs in-stream) en associant un compte de paiement européen / international valide. Pourcentage négocié lors du premier contact.",
    badge: "Facebook",
    price: "20% à 40% de commission",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "shared-accounts",
    title: "Vente d'abonnements partagés (IA & Outils)",
    desc: "Accède aux meilleurs outils de création de vidéos et d'IA (Claude Pro, ChatGPT Plus, HeyGen, CapCut Pro) à un tarif ultra-réduit grâce à nos offres d'abonnements partagés.",
    badge: "Économique",
    price: "À partir de 3 000 FCFA/mois",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const contactText = (serviceName: string) => {
    return `https://wa.me/237655306425?text=Bonjour%20Roosevelt,%20je%20suis%20intéressé%20par%20le%20service%20:%20${encodeURIComponent(serviceName)}`;
  };

  return (
    <section
      id="services"
      style={{
        padding: "120px 0",
        background: "var(--black-bg)",
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
            Au-delà de la formation, je t&apos;accompagne directement dans la configuration technique et l&apos;achat d&apos;outils indispensables.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 48
        }}>
          {SERVICES.map((service) => (
            <div
              key={service.id}
              style={{
                background: "var(--black-card)",
                border: "1px solid var(--black-line)",
                borderRadius: 16,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--red)";
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
                    {service.icon}
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
                  {service.desc}
                </p>
              </div>

              <div>
                <div style={{ borderTop: "1px solid var(--black-line)", paddingTop: 20, marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 13, color: "var(--white-dim)" }}>Tarif</span>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--white)" }}>{service.price}</span>
                </div>

                <a
                  href={contactText(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: 20,
                    background: "transparent",
                    border: "1px solid var(--black-line)",
                    color: "var(--white)",
                    padding: "12px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--red)";
                    e.currentTarget.style.borderColor = "var(--red)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "var(--black-line)";
                  }}
                >
                  Commander par WhatsApp
                </a>
              </div>
            </div>
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
