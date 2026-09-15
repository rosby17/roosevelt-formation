const MAKETOU_API_BASE = "https://api.maketou.net/api/v1";

export async function createMaketouCheckout({
  email,
  firstName,
  lastName,
  phone,
  redirectURL,
  priceFcfa,
}: {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  redirectURL: string;
  priceFcfa: number;
}) {
  const apiKey = process.env.MAKETOU_API_KEY;
  const productId = process.env.MAKETOU_PRODUCT_ID;
  if (!apiKey || !productId) {
    throw new Error("MAKETOU_API_KEY ou MAKETOU_PRODUCT_ID manquant");
  }

  // Le champ "meta" fait planter l'API Maketou (500 Internal Server Error) sur
  // cette boutique — confirmé en testant avec/sans ce champ. On ne l'envoie pas.
  const payload: Record<string, unknown> = {
    productDocumentId: productId,
    email,
    firstName,
    lastName,
    redirectURL,
    customerPrice: priceFcfa,
  };
  if (phone && phone.trim() !== "") {
    payload.phone = phone.trim();
  }

  const response = await fetch(`${MAKETOU_API_BASE}/stores/cart/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    let message = data?.message || "Erreur lors de l'initialisation du paiement Maketou.";
    if (Array.isArray(message)) {
      message = message
        .map((err: any) => (err?.constraints ? Object.values(err.constraints).join(", ") : JSON.stringify(err)))
        .join(" | ");
    }
    throw new Error(typeof message === "string" ? message : JSON.stringify(message));
  }

  return { cartId: data.cart?.id as string, redirectUrl: data.redirectUrl as string };
}

export async function getMaketouCartStatus(cartId: string) {
  const apiKey = process.env.MAKETOU_API_KEY;
  if (!apiKey) throw new Error("MAKETOU_API_KEY manquant");

  const response = await fetch(`${MAKETOU_API_BASE}/stores/cart/${cartId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!response.ok) {
    throw new Error(`Impossible de vérifier le panier Maketou (${response.status})`);
  }

  const data = await response.json();
  return data.cart?.status as string | undefined;
}
