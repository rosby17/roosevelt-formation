"use client";
import { SITE, REPLAY_FEATURES, LIVE_FEATURES } from "@/lib/data";

export default function Offres() {
  return (
    <section
      id="offres"
      style={{
        padding: "120px 0",
        background: "var(--black-card)",
        borderTop: "1px solid var(--black-line)",
        borderBottom: "1px solid var(--black-line)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px" }}>

        {/* Intro */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 80px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--red)", marginBottom: 18,
          }}>
            <span style={{ display: "block", width: 24, height: 1, background: "var(--red)" }} />
            Choisir ton accès
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08,
            color: "var(--white)", marginBottom: 16,
          }}>
            Deux chemins.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--red)" }}>Un seul objectif.</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--white-muted)", lineHeight: 1.75 }}>
            Quel que soit ton budget, tu accèdes à l&apos;essentiel. La différence, c&apos;est le niveau d&apos;accompagnement.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          className="offres-grid"
        >
          {/* Replay */}
          <OfferCard
            tag="Accès autonome · Replay"
            price={SITE.offers.replay.price}
            currency={SITE.offers.replay.currency}
            subtitle={SITE.offers.replay.subtitle}
            features={REPLAY_FEATURES}
            href={SITE.offers.replay.url}
            cta="Accéder aux Replays →"
            featured={false}
          />

          {/* Live */}
          <OfferCard
            tag="Accompagnement · Live Google Meet"
            price={SITE.offers.live.price}
            currency={SITE.offers.live.currency}
            subtitle={SITE.offers.live.subtitle}
            features={LIVE_FEATURES}
            href={SITE.offers.live.url}
            cta="🎯 Réserver mon Live →"
            featured={true}
          />
        </div>

        {/* WhatsApp note */}
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <p style={{ fontSize: 13, color: "var(--white-dim)" }}>
            Des questions avant d&apos;acheter ?{" "}
            <a
              href={`${SITE.socials.whatsapp}?text=${encodeURIComponent(
                "Bonjour Roosevelt, j'ai des questions sur ta formation YouTube."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--red)",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Écris-moi sur WhatsApp
            </a>
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .offres-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function OfferCard({
  tag, price, currency, subtitle, features, href, cta, featured,
}: {
  tag: string;
  price: string;
  currency: string;
  subtitle: string;
  features: { ok: boolean; text: string }[];
  href: string;
  cta: string;
  featured: boolean;
}) {
  const bg = featured ? "var(--red)" : "var(--black)";
  const border = featured ? "var(--red)" : "var(--black-line)";
  const featureColor = featured ? "rgba(255,255,255,0.85)" : "var(--white-muted)";
  const dividerColor = featured ? "rgba(255,255,255,0.2)" : "var(--black-line)";
  const tagColor = featured ? "rgba(255,255,255,0.6)" : "var(--white-dim)";

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 32,
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
        boxShadow: featured ? "0 8px 48px rgba(200,16,46,0.35)" : undefined,
        transition: "transform 0.2s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = featured
          ? "0 24px 72px rgba(200,16,46,0.5)"
          : "0 24px 60px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = featured
          ? "0 8px 48px rgba(200,16,46,0.35)"
          : "none";
      }}
    >
      {/* Tag */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", marginBottom: 32, color: tagColor,
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%",
          background: featured ? "rgba(255,255,255,0.6)" : "var(--red)",
          flexShrink: 0,
        }} />
        {tag}
      </div>

      {/* Price */}
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, lineHeight: 1, marginBottom: 8 }}>
        <span style={{
          fontSize: 24,
          color: featured ? "rgba(255,255,255,0.7)" : "var(--white-muted)",
          verticalAlign: "top",
          marginTop: 8,
          display: "inline-block",
        }}>
          {currency}{" "}
        </span>
        <span style={{ fontSize: 56, letterSpacing: "-0.03em", color: featured ? "#fff" : "var(--white)" }}>
          {price}
        </span>
      </div>
      <div style={{
        fontSize: 15, marginBottom: 32,
        color: featured ? "rgba(255,255,255,0.65)" : "var(--white-dim)",
      }}>
        {subtitle}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: dividerColor, margin: "0 0 32px" }} />

      {/* Features */}
      <ul style={{ listStyle: "none", flex: 1, display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14, lineHeight: 1.5, color: featureColor }}>
            <div style={{
              width: 20, height: 20, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontSize: 11, fontWeight: 700, marginTop: 1,
              background: f.ok
                ? (featured ? "rgba(255,255,255,0.2)" : "rgba(34,197,94,0.15)")
                : "rgba(255,255,255,0.04)",
              color: f.ok
                ? (featured ? "#fff" : "#4ADE80")
                : "var(--white-dim)",
            }}>
              {f.ok ? "✓" : "–"}
            </div>
            <span style={{ color: !f.ok && !featured ? "var(--white-dim)" : undefined }}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "14px 32px",
          borderRadius: 6,
          fontSize: 15,
          fontWeight: 600,
          textDecoration: "none",
          transition: "transform 0.15s, background 0.2s",
          background: featured ? "var(--white)" : "transparent",
          color: featured ? "var(--black)" : "var(--red)",
          border: featured ? "none" : "1px solid rgba(200,16,46,0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          if (!featured) e.currentTarget.style.background = "var(--red-soft)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          if (!featured) e.currentTarget.style.background = "transparent";
        }}
      >
        {cta}
      </a>
    </div>
  );
}
