"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/lib/data";
import { PAYMENT_OFFERS, isOfferKey } from "@/lib/payment/offers";

function PaiementSuccesContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"checking" | "completed" | "pending" | "error">("checking");

  const offerParam = searchParams.get("offer");
  const offer = isOfferKey(offerParam) ? offerParam : null;
  const offerData = offer ? PAYMENT_OFFERS[offer] : null;

  useEffect(() => {
    const provider = searchParams.get("provider");
    const cartId = searchParams.get("cartId");

    // Tara Money confirme via webhook côté serveur, pas de vérification à faire ici.
    if (provider === "tara") {
      setStatus("completed");
      return;
    }

    if (!cartId || !offer) {
      setStatus("error");
      return;
    }

    const params = new URLSearchParams({ cartId, offer });
    fetch(`/api/payment/verify?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setStatus(data.success ? data.status : "error"))
      .catch(() => setStatus("error"));
  }, [searchParams, offer]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 28,
      }}
    >
      <div style={{ maxWidth: 480 }}>
        {status === "checking" && (
          <>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--white)", marginBottom: 16 }}>
              Vérification du paiement…
            </h1>
            <p style={{ color: "var(--white-muted)" }}>Merci de patienter quelques secondes.</p>
          </>
        )}
        {(status === "completed" || status === "pending") && (
          <>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--white)", marginBottom: 16 }}>
              Merci, paiement confirmé ✅
            </h1>
            {offerData && "deliveryUrl" in offerData && offerData.deliveryUrl ? (
              <>
                <p style={{ color: "var(--white-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                  Voici ton accès pour <strong>{offerData.label}</strong> :
                </p>
                <a
                  href={offerData.deliveryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    background: "var(--red)",
                    color: "#fff",
                    padding: "14px 28px",
                    borderRadius: 8,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Accéder à mon contenu
                </a>
              </>
            ) : (
              <p style={{ color: "var(--white-muted)", lineHeight: 1.7 }}>
                {offerData?.isLive
                  ? "On te contacte sous 24h via WhatsApp pour planifier ta session Google Meet."
                  : "Ton accès est en cours de préparation, on revient vers toi très vite."}{" "}
                Pour toute question, écris-nous sur{" "}
                <a href={SITE.socials.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)" }}>
                  WhatsApp
                </a>
                .
              </p>
            )}
          </>
        )}
        {status === "error" && (
          <>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--white)", marginBottom: 16 }}>
              Vérification impossible
            </h1>
            <p style={{ color: "var(--white-muted)", lineHeight: 1.7 }}>
              Si ton paiement a bien été débité, contacte-nous sur{" "}
              <a href={SITE.socials.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)" }}>
                WhatsApp
              </a>{" "}
              avec ta preuve de paiement.
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default function PaiementSuccesPage() {
  return (
    <Suspense fallback={null}>
      <PaiementSuccesContent />
    </Suspense>
  );
}
