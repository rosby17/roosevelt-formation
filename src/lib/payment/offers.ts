export const PAYMENT_OFFERS = {
  live: {
    label: "Session Live Google Meet",
    priceFcfa: 49550,
    isLive: true,
  },
  replay: {
    label: "Replay",
    priceFcfa: 9950,
    isLive: false,
  },
  "chatgpt-pro-etudiant": {
    label: "Accès à ChatGPT Pro pendant 4 mois pour étudiants",
    priceFcfa: 3300,
    isLive: false,
    deliveryUrl: "https://www.youtube.com/watch?v=CsewzuG69fY",
  },
} as const;

export type OfferKey = keyof typeof PAYMENT_OFFERS;

export function isOfferKey(value: unknown): value is OfferKey {
  return typeof value === "string" && value in PAYMENT_OFFERS;
}
