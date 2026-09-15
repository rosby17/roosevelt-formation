"use client";
import { createContext, useContext, useState } from "react";
import { PAYMENT_OFFERS, OfferKey } from "@/lib/payment/offers";

type CheckoutContextValue = {
  openCheckout: (offer: OfferKey) => void;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
}

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [offer, setOffer] = useState<OfferKey | null>(null);

  return (
    <CheckoutContext.Provider value={{ openCheckout: setOffer }}>
      {children}
      {offer && <CheckoutModal offer={offer} onClose={() => setOffer(null)} />}
    </CheckoutContext.Provider>
  );
}

type PaymentMethod = "mobile" | "card" | "paypal";

function CheckoutModal({ offer, onClose }: { offer: OfferKey; onClose: () => void }) {
  const offerData = PAYMENT_OFFERS[offer];
  const [loadingMethod, setLoadingMethod] = useState<PaymentMethod | null>(null);
  const [error, setError] = useState("");

  async function handleSelect(method: PaymentMethod) {
    setError("");
    setLoadingMethod(method);
    try {
      const res = await fetch("/api/payment/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offer, method }),
      });
      const data = await res.json();
      if (!data.success || !data.redirectUrl) {
        setError(data.message || "Une erreur est survenue.");
        setLoadingMethod(null);
        return;
      }
      window.location.href = data.redirectUrl;
    } catch {
      setError("Une erreur est survenue. Réessaie.");
      setLoadingMethod(null);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--black-card)",
          border: "1px solid var(--black-line)",
          borderRadius: 20,
          padding: 32,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            float: "right",
            background: "none",
            border: "none",
            color: "var(--white-dim)",
            fontSize: 20,
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--white)", marginBottom: 6 }}>
          {offerData.label}
        </h3>
        <p style={{ color: "var(--white-muted)", fontSize: 14, marginBottom: 24 }}>
          {offerData.priceFcfa.toLocaleString("fr-FR")} FCFA — choisis ton moyen de paiement
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <PaymentButton
            label="Mobile Money"
            loading={loadingMethod === "mobile"}
            disabled={loadingMethod !== null}
            onClick={() => handleSelect("mobile")}
          />
          <PaymentButton
            label="Carte bancaire"
            loading={loadingMethod === "card"}
            disabled={loadingMethod !== null}
            onClick={() => handleSelect("card")}
          />
          <PaymentButton
            label="PayPal"
            loading={loadingMethod === "paypal"}
            disabled={loadingMethod !== null}
            onClick={() => handleSelect("paypal")}
          />
        </div>

        {error && <p style={{ color: "var(--red)", fontSize: 13, marginTop: 12 }}>{error}</p>}
      </div>
    </div>
  );
}

function PaymentButton({
  label,
  loading,
  disabled,
  onClick,
}: {
  label: string;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 20px",
        borderRadius: 8,
        border: "1px solid var(--black-line)",
        background: "var(--black)",
        color: "var(--white)",
        fontSize: 15,
        fontWeight: 600,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled && !loading ? 0.5 : 1,
        transition: "border-color 0.15s",
      }}
    >
      {loading ? "Redirection…" : label}
    </button>
  );
}
