import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { isOfferKey } from "@/lib/payment/offers";

// Comparaison à temps constant : évite qu'un attaquant devine le secret
// caractère par caractère via le temps de réponse (timing attack).
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function POST(request: Request) {
  try {
    const expectedSecret = process.env.TARA_WEBHOOK_SECRET;
    if (!expectedSecret) {
      console.error("TARA_WEBHOOK_SECRET is not configured — rejecting all Tara Money webhooks.");
      return NextResponse.json({ success: false, message: "Webhook misconfigured" }, { status: 500 });
    }

    const url = new URL(request.url);
    const providedKey = url.searchParams.get("key") || "";
    if (!safeEqual(providedKey, expectedSecret)) {
      console.error("Tara Money webhook rejected: invalid or missing key");
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const offer = url.searchParams.get("offer");
    const payload = await request.json();
    const { status } = payload;
    const normalizedStatus = String(status || "").toUpperCase();

    if (normalizedStatus !== "SUCCESS") {
      console.log(`Tara Money webhook: statut non-succès (${status}), ignoré.`);
      return NextResponse.json({ success: true, message: "Payment not successful, ignoring." });
    }

    if (!isOfferKey(offer)) {
      console.error("Tara Money webhook: offer manquant ou invalide dans l'URL de callback.");
      return NextResponse.json({ success: false, message: "Missing or invalid offer" }, { status: 400 });
    }

    console.log(`Tara Money webhook: paiement confirmé pour l'offre "${offer}".`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook Tara Money error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
