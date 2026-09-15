export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: { email: string; name?: string };
  subject: string;
  html: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY manquant — email non envoyé");
    return;
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL || "contact@roosevelt-mogo.app",
        name: process.env.BREVO_SENDER_NAME || "Roosevelt Mogo",
      },
      to: [to],
      subject,
      htmlContent: html,
    }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    console.error("Erreur envoi email Brevo:", data);
  }
}
