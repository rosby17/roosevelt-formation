import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/data";
import { CheckoutProvider } from "@/components/CheckoutModal";
import { ThemeInitScript } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    url: SITE.url,
    images: [{ url: `${SITE.url}/photo.png`, width: 1024, height: 1024, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [`${SITE.url}/photo.png`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <CheckoutProvider>{children}</CheckoutProvider>
      </body>
    </html>
  );
}
