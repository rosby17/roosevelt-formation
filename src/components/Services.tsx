"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  {
    id: "phone-validation",
    title: "Validation de numéro de téléphone de chaîne",
    desc: "Déverrouille les fonctionnalités avancées de YouTube (miniatures personnalisées, vidéos de plus de 15 minutes, diffusions en direct) en faisant valider ton numéro via un compte sécurisé et propre.",
    badge: "Indispensable",
    price: "2 500 FCFA",
    checkoutUrl: "https://roosevelt-mogo.mymaketou.store/products/validation-de-numero-de-telephone-de-chaine/checkout",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "adsense-link",
    title: "Association de compte AdSense YouTube éligible",
    desc: "Tu résides dans un pays non éligible ? Nous t'aidons à associer ton compte YouTube à un compte Google AdSense valide et vérifié dans un pays éligible pour percevoir tes revenus sans blocage. Pourcentage de commission négocié lors du premier contact.",
    badge: "Monétisation",
    price: "20% à 40% de commission",
    checkoutUrl: "https://roosevelt-mogo.mymaketou.store/products/association-de-compte-adsense-youtube-eligible/checkout",
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
    desc: "Reçois tes gains de pages Facebook monétisées (étoiles, pubs in-stream) en associant un compte de paiement européen / international valide. Pourcentage de commission négocié lors du premier contact.",
    badge: "Facebook",
    price: "20% à 40% de commission",
    checkoutUrl: "https://roosevelt-mogo.mymaketou.store/products/configuration-de-compte-de-reglement-facebook/checkout",
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
    checkoutUrl: "https://roosevelt-mogo.mymaketou.store/products/vente-dabonnements-partages-ia-outils/checkout",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "online-store",
    title: "Création de boutique en ligne (Chariow / Maketou)",
    desc: "Vends tes produits digitaux, formations ou services facilement. Nous configurons entièrement ta boutique en ligne sur Chariow ou Maketou pour te permettre de recevoir des paiements par Mobile Money.",
    badge: "Boutique",
    price: "À négocier",
    checkoutUrl: "https://roosevelt-mogo.mymaketou.store/products/creation-de-boutique-en-ligne-chariow-maketou/checkout",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<typeof SERVICES[0] | null>(null);
  const [copied, setCopied] = useState(false);

  // Read URL hash on load or hash change to show specific service
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = SERVICES.find((s) => s.id === hash);
        if (found) {
          setActiveService(found);
          // Scroll smoothly to detail container if in hash mode
          document.getElementById("services-detail-anchor")?.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setActiveService(null);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleSelectService = (service: typeof SERVICES[0]) => {
    setActiveService(service);
    window.location.hash = service.id;
  };

  const handleCloseDetail = () => {
    setActiveService(null);
    // Remove hash cleanly without page reload
    window.history.pushState("", document.title, window.location.pathname);
  };

  const handleCopyLink = (id: string) => {
    const link = `${window.location.origin}/services#${id}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="services"
      style={{
        padding: "100px 0",
        background: "var(--black-bg)",
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
            Sélectionne un service pour voir ses détails, copier son lien direct de partage ou passer commande.
          </p>
        </div>

        {/* Anchor point to scroll to on selection */}
        <div id="services-detail-anchor" style={{ height: "1px" }} />

        {/* Detailed Service Product View (Shown when a service is active) */}
        {activeService && (
          <div style={{
            background: "var(--black-card)",
            border: "2px solid var(--red)",
            borderRadius: 24,
            padding: "48px",
            marginBottom: 56,
            position: "relative",
            animation: "fadeUp 0.4s ease",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }}>
            
            {/* Close button */}
            <button
              onClick={handleCloseDetail}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--black-line)",
                color: "var(--white)",
                fontSize: 20,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--red)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            >
              &times;
            </button>

            <div style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: 32,
              alignItems: "start"
            }} className="detail-grid">
              
              <div style={{
                color: "var(--red)",
                background: "rgba(200,16,46,0.1)",
                border: "1px solid rgba(200,16,46,0.2)",
                padding: 24,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {activeService.icon}
              </div>

              <div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    background: "rgba(200,16,46,0.08)",
                    border: "1px solid rgba(200,16,46,0.2)",
                    padding: "4px 12px",
                    borderRadius: 99
                  }}>
                    {activeService.badge}
                  </span>
                  
                  <span style={{ fontSize: 13, color: "var(--white-dim)" }}>
                    ID Produit : #{activeService.id}
                  </span>
                </div>

                <h3 style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: 900,
                  color: "var(--white)",
                  marginBottom: 20,
                  lineHeight: 1.2
                }}>
                  {activeService.title}
                </h3>

                <p style={{
                  fontSize: 16,
                  color: "var(--white-muted)",
                  lineHeight: 1.8,
                  marginBottom: 32,
                  maxWidth: 800
                }}>
                  {activeService.desc}
                </p>

                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--black-line)",
                  borderRadius: 16,
                  padding: "24px 32px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 24,
                  marginBottom: 32
                }}>
                  <div>
                    <span style={{ display: "block", fontSize: 13, color: "var(--white-dim)", marginBottom: 4 }}>Tarif unique</span>
                    <span style={{ fontSize: 24, fontWeight: 900, color: "var(--white)" }}>{activeService.price}</span>
                  </div>

                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={() => handleCopyLink(activeService.id)}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--black-line)",
                        color: "var(--white)",
                        padding: "14px 24px",
                        borderRadius: 12,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--white-dim)"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--black-line)"}
                    >
                      {copied ? "Lien Copié ! ✓" : "Copier le lien direct"}
                    </button>

                    <a
                      href={activeService.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "var(--red)",
                        color: "var(--white)",
                        padding: "14px 32px",
                        borderRadius: 12,
                        fontSize: 14,
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: "0 4px 16px rgba(200,16,46,0.3)",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "var(--red-dim)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "var(--red)"}
                    >
                      Commander &rarr;
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--white-dim)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--red)" }}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Paiement sécurisé par Maketou / Mobile Money. Validation sous 24h.</span>
                </div>

              </div>
            </div>
            
            <style>{`
              @media (max-width: 640px) {
                .detail-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
              }
            `}</style>

          </div>
        )}

        {/* Services Grid (Product selection) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 48
        }}>
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => handleSelectService(service)}
              style={{
                background: activeService?.id === service.id ? "rgba(200,16,46,0.05)" : "var(--black-card)",
                border: activeService?.id === service.id ? "2px solid var(--red)" : "1px solid var(--black-line)",
                borderRadius: 16,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                if (activeService?.id !== service.id) {
                  e.currentTarget.style.borderColor = "var(--white-dim)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeService?.id !== service.id) {
                  e.currentTarget.style.borderColor = "var(--black-line)";
                  e.currentTarget.style.transform = "translateY(0)";
                }
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
                  {service.desc.substring(0, 110)}... <span style={{ color: "var(--red)", fontWeight: 600 }}>Voir plus &rarr;</span>
                </p>
              </div>

              <div>
                <div style={{ borderTop: "1px solid var(--black-line)", paddingTop: 20, marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 13, color: "var(--white-dim)" }}>Tarif</span>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--white)" }}>{service.price}</span>
                </div>
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
