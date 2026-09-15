export async function createTaraPaymentLink({
  orderId,
  productName,
  priceFcfa,
  description,
  returnUrl,
  webHookUrl,
}: {
  orderId: string;
  productName: string;
  priceFcfa: number;
  description: string;
  returnUrl: string;
  webHookUrl: string;
}) {
  const apiKey = process.env.TARA_API_KEY;
  const businessId = process.env.TARA_BUSINESS_ID;
  if (!apiKey || !businessId) {
    throw new Error("TARA_API_KEY ou TARA_BUSINESS_ID manquant");
  }

  const payload = {
    apiKey,
    businessId,
    productId: orderId,
    productName,
    productPrice: priceFcfa,
    productDescription: description,
    returnUrl,
    webHookUrl,
  };

  const response = await fetch("https://www.dklo.co/api/tara/paymentlinks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  const isSuccess = data.status === "success" || data.status === "API_ORDER_SUCESSFULL" || data.status === "SUCCESS";
  if (!response.ok || !isSuccess) {
    const message = data?.message || data?.status || "Erreur lors de l'initialisation du paiement Tara Money.";
    throw new Error(message);
  }

  return { cardLink: data.cardLink as string, generalLink: data.generalLink as string };
}
