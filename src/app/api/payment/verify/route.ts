import { NextResponse } from "next/server";
import { isOfferKey } from "@/lib/payment/offers";
import { getMaketouCartStatus } from "@/lib/payment/maketou";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cartId = searchParams.get("cartId");
  const offer = searchParams.get("offer");

  if (!cartId || !isOfferKey(offer)) {
    return NextResponse.json({ success: false, message: "Paramètres manquants." }, { status: 400 });
  }

  try {
    const status = await getMaketouCartStatus(cartId);
    const isCompleted = status === "completed";

    return NextResponse.json({ success: true, status: isCompleted ? "completed" : "pending" });
  } catch (error) {
    console.error("Erreur vérification Maketou:", error);
    return NextResponse.json({ success: false, message: "Impossible de vérifier le paiement." }, { status: 500 });
  }
}
