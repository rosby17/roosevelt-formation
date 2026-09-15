import { SITE } from "@/lib/data";

export function paymentConfirmationTemplate({
  firstName,
  offerLabel,
  amountFcfa,
  isLive,
  deliveryUrl,
}: {
  firstName: string;
  offerLabel: string;
  amountFcfa: number;
  isLive: boolean;
  deliveryUrl?: string;
}) {
  const nextSteps = deliveryUrl
    ? `Voici ton accès : <a href="${deliveryUrl}">${deliveryUrl}</a>`
    : isLive
    ? `On te contacte sous 24h via WhatsApp (${SITE.socials.whatsappNumber}) pour planifier ta session Google Meet.`
    : `Ton accès est en cours de préparation, on revient vers toi très vite.`;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="color: #c8102e;">Paiement confirmé ✅</h2>
      <p>Bonjour ${firstName || ""},</p>
      <p>Ton paiement pour <strong>${offerLabel}</strong> (${amountFcfa.toLocaleString("fr-FR")} FCFA) a bien été confirmé.</p>
      <p>${nextSteps}</p>
      <p style="margin-top: 24px;">À très vite,<br/>Roosevelt Mogo</p>
    </div>
  `;
}
