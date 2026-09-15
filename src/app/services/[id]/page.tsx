import type { Metadata } from "next";
import { SERVICES } from "@/lib/servicesData";
import { SITE } from "@/lib/data";
import ServiceDetailClient from "./ServiceDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return { title: `Service introuvable — ${SITE.name}` };
  }

  const title = `${service.title} — ${SITE.name}`;
  const imageUrl = `${SITE.url}${service.image}`;

  return {
    title,
    description: service.desc,
    openGraph: {
      title: service.title,
      description: service.desc,
      type: "website",
      url: `${SITE.url}/services/${service.id}`,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.desc,
      images: [imageUrl],
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  return <ServiceDetailClient params={params} />;
}
