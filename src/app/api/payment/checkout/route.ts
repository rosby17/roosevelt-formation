import { NextResponse } from "next/server";
import { PAYMENT_OFFERS, isOfferKey } from "@/lib/payment/offers";
import { createMaketouCheckout } from "@/lib/payment/maketou";
import { createTaraPaymentLink } from "@/lib/payment/tara";

type PaymentMethod = "mobile" | "card" | "paypal";

function isPaymentMethod(value: unknown): value is PaymentMethod {
  return value === "mobile" || value === "card" || value === "paypal";
}

// Pas de compte client sur ce site : ces valeurs ne servent qu'à satisfaire les
// champs obligatoires des API Maketou/Tara. Le client saisit ses vraies
// coordonnées directement sur la page de paiement hébergée (Maketou/Tara).
const PLACEHOLDER_IDENTITY = {
  email: "client@roosevelt-mogo.app",
  firstName: "Client",
  lastName: "Roosevelt Mogo",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { offer, method } = body;

    if (!isOfferKey(offer)) {
      return NextResponse.json({ success: false, message: "Offre invalide." }, { status: 400 });
    }
    if (!isPaymentMethod(method)) {
      return NextResponse.json({ success: false, message: "Moyen de paiement invalide." }, { status: 400 });
    }

    const offerData = PAYMENT_OFFERS[offer];
    const priceFcfa = offerData.priceFcfa;

    let origin = request.headers.get("origin") || "http://127.0.0.1:3000";
    if (origin.includes("localhost")) origin = origin.replace("localhost", "127.0.0.1");
    const cleanOrigin = origin.replace(/\/$/, "");

    // Carte bancaire et PayPal passent tous les deux par Tara Money.
    if (method === "card" || method === "paypal") {
      const orderId = crypto.randomUUID();
      const webhookSecret = process.env.TARA_WEBHOOK_SECRET;
      if (!webhookSecret) {
        console.error("TARA_WEBHOOK_SECRET manquant — refus de créer un lien Tara Money non authentifiable.");
        return NextResponse.json({ success: false, message: "Ce moyen de paiement est indisponible pour le moment." }, { status: 500 });
      }

      let returnUrl = `${cleanOrigin}/paiement/succes?offer=${offer}&provider=tara`;
      if (returnUrl.startsWith("http://")) returnUrl = returnUrl.replace("http://", "https://");

      let webHookUrl = `${cleanOrigin}/api/payment/webhook/taramoney?key=${encodeURIComponent(webhookSecret)}&offer=${offer}`;
      if (webHookUrl.startsWith("http://")) webHookUrl = webHookUrl.replace("http://", "https://");

      const { cardLink, generalLink } = await createTaraPaymentLink({
        orderId,
        productName: `${offerData.label} - Roosevelt Mogo`,
        priceFcfa,
        description: `${offerData.label} — ${priceFcfa} FCFA`,
        returnUrl,
        webHookUrl,
      });

      const redirectUrl = method === "card" ? (cardLink || generalLink) : generalLink;
      return NextResponse.json({ success: true, redirectUrl });
    }

    // Mobile Money via Maketou (par défaut).
    const redirectURL = `${cleanOrigin}/paiement/succes?offer=${offer}&provider=maketou`;

    const { redirectUrl } = await createMaketouCheckout({
      ...PLACEHOLDER_IDENTITY,
      redirectURL,
      priceFcfa,
    });

    return NextResponse.json({ success: true, redirectUrl });
  } catch (error) {
    console.error("Erreur checkout:", error);
    const message = error instanceof Error ? error.message : "Service de paiement indisponible.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
