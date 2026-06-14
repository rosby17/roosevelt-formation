"use client";

const hardware = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Un ordinateur ou un smartphone",
    desc: "Aucun matériel professionnel requis. Un appareil basique suffit pour tout faire.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Une connexion internet",
    desc: "Pour accéder aux modules, aux outils IA et à la session Google Meet si tu prends le Live.",
  },
];

const tools = [
  {
    name: "Claude / ChatGPT",
    usage: "Rédaction de scripts, titres, descriptions",
    price: "~20$/mois",
    required: false,
  },
  {
    name: "HeyGen",
    usage: "Création d'avatars IA et vidéos sans visage",
    price: "~29$/mois",
    required: false,
  },
  {
    name: "CapCut",
    usage: "Montage vidéo simple et rapide",
    price: "Gratuit / ~10$/mois",
    required: false,
  },
  {
    name: "YouTube Studio",
    usage: "Gestion et analyse de ta chaîne",
    price: "Gratuit",
    required: true,
  },
];

export default function Prerequis() {
  return (
    <section
      id="prerequis"
      style={{
        padding: "120px 0",
        background: "var(--black)",
        borderTop: "1px solid var(--black-line)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 72px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
          }}>
            <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
            Ce qu&apos;il te faut
            <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
            color: "var(--white)", marginBottom: 16,
          }}>
            Zéro studio.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--red)" }}>Juste les bons outils.</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--white-muted)", lineHeight: 1.75 }}>
            Pas besoin de matériel coûteux. Voici exactement ce dont tu as besoin pour démarrer.
          </p>
        </div>

        {/* Hardware */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}
          className="prereq-hardware"
        >
          {hardware.map((h) => (
            <div
              key={h.title}
              style={{
                display: "flex", alignItems: "flex-start", gap: 20,
                background: "var(--black-card)",
                border: "1px solid var(--black-line)",
                borderRadius: 20, padding: "28px 28px",
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: "var(--red-soft)",
                border: "1px solid rgba(200,16,46,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--red)",
              }}>
                {h.icon}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--white)", marginBottom: 6 }}>
                  {h.title}
                </div>
                <div style={{ fontSize: 14, color: "var(--white-muted)", lineHeight: 1.6 }}>
                  {h.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools table */}
        <div style={{
          background: "var(--black-card)",
          border: "1px solid var(--black-line)",
          borderRadius: 24,
          overflow: "hidden",
          marginBottom: 24,
        }}>
          {/* Table header */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 2fr 1fr",
            padding: "16px 28px",
            borderBottom: "1px solid var(--black-line)",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--white-dim)",
          }}>
            <span>Outil</span>
            <span>Usage</span>
            <span style={{ textAlign: "right" }}>Coût estimé</span>
          </div>

          {tools.map((t, i) => (
            <div
              key={t.name}
              style={{
                display: "grid", gridTemplateColumns: "1fr 2fr 1fr",
                padding: "20px 28px",
                borderBottom: i < tools.length - 1 ? "1px solid var(--black-line)" : undefined,
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: t.required ? "#4ADE80" : "var(--red)",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--white)" }}>{t.name}</span>
              </div>
              <span style={{ fontSize: 14, color: "var(--white-muted)" }}>{t.usage}</span>
              <span style={{
                fontSize: 13, fontWeight: 600, textAlign: "right",
                color: t.required ? "#4ADE80" : "var(--white-dim)",
              }}>
                {t.price}
              </span>
            </div>
          ))}
        </div>

        {/* Note abonnements partagés */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 16,
          background: "var(--red-soft)",
          border: "1px solid rgba(200,16,46,0.2)",
          borderRadius: 16, padding: "20px 24px",
        }}>
          <div style={{
            fontSize: 20, flexShrink: 0, marginTop: 1,
            lineHeight: 1,
          }}>
            💡
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>
              Les outils payants ne sont pas obligatoires dès le départ
            </div>
            <div style={{ fontSize: 14, color: "var(--white-muted)", lineHeight: 1.7 }}>
              On voit ensemble quels outils activer selon ta niche. Certains ont des versions gratuites suffisantes
              pour commencer. Il est aussi possible d&apos;utiliser des <strong style={{ color: "var(--white)" }}>abonnements partagés</strong> pour
              réduire les coûts — on en parle durant la formation.
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          .prereq-hardware { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
