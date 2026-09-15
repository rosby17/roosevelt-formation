import { OfferKey } from "@/lib/payment/offers";

export interface Service {
  id: string;
  title: string;
  desc: string;
  badge: string;
  price: string;
  basePrice?: number;
  priceSuffix?: string;
  checkoutUrl: string;
  image: string;
  iconPath: string; // fallback SVG path if image is missing
  contactOnly?: boolean; // si true, affiche "Me contacter" au lieu du bouton checkout
  outOfStock?: boolean; // si true, service grisé et non cliquable
  paymentOffer?: OfferKey; // si présent, ouvre le checkout automatisé (Maketou/Tara) au lieu d'un simple lien
}

export const SERVICES: Service[] = [
  {
    id: "youtube-audit",
    title: "Audits de ta chaîne Youtube",
    desc: "Analyse complète de ta chaîne YouTube pour identifier les blocages, conseils, astuces afin d'optimiser tes vues et ta croissance.",
    badge: "Audit",
    price: "5 000 FCFA",
    basePrice: 5000,
    checkoutUrl: "https://roosevelt-mogo.mymaketou.shop/fr/products/service-et-collaboration-avec-roosevelt-5-7-5/checkout", // Par défaut, vers WhatsApp
    image: "/services/audit.png", // Image par défaut à changer plus tard si besoin
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", // Search/Audit icon
  },
  {
    id: "phone-validation",
    title: "Validation de numéro de téléphone de chaîne",
    desc: "Déverrouille les fonctionnalités avancées de YouTube (miniatures personnalisées, vidéos de plus de 15 minutes, diffusions en direct) en faisant valider ton numéro via un compte sécurisé et propre.",
    badge: "Indispensable",
    price: "2 500 FCFA",
    basePrice: 2500,
    checkoutUrl: "https://agedgmail.tools-cl.com/app/sms",
    image: "/services/validation.png",
    iconPath: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  },
  {
    id: "adsense-link",
    title: "Association de compte AdSense YouTube éligible",
    desc: "Tu résides dans un pays non éligible ? Nous t'aidons à associer ton compte YouTube à un compte Google AdSense valide et vérifié dans un pays éligible pour percevoir tes revenus sans blocage. Pourcentage de commission négocié lors du premier contact.",
    badge: "Monétisation",
    price: "20% à 40% de commission",
    checkoutUrl: "https://wa.me/237655306425",
    contactOnly: true,
    image: "/services/adsense.png",
    iconPath: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M12 4v16 M2 12h20",
  },
  {
    id: "facebook-payout",
    title: "Configuration de compte de règlement Facebook",
    desc: "Reçois tes gains de pages Facebook monétisées (étoiles, pubs in-stream) en associant un compte de paiement européen / international valide. Pourcentage de commission négocié lors du premier contact.",
    badge: "Facebook",
    price: "20% à 40% de commission",
    checkoutUrl: "https://wa.me/237655306425",
    contactOnly: true,
    image: "/services/facebook.png",
    iconPath: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    id: "capcut-pro",
    title: "Abonnement partagé CapCut Pro",
    desc: "Profite de toutes les fonctionnalités premiums de CapCut Pro pour le montage de tes vidéos faceless à un tarif ultra-réduit grâce à notre offre d'abonnement partagé.",
    badge: "Montage Vidéo",
    price: "4 000 FCFA/mois",
    basePrice: 4000,
    priceSuffix: "/mois",
    checkoutUrl: "https://roosevelt-mogo.mymaketou.shop/fr/products/service-et-collaboration-avec-roosevelt-5-7-0/checkout",
    image: "/services/capcut.png",
    outOfStock: true,
    iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z M4 6a2 2 0 00-2 2v8a2 2 0 002 2h11a2 2 0 002-2V8a2 2 0 00-2-2H4z",
  },
  {
    id: "heygen",
    title: "Abonnement partagé HeyGen",
    desc: "Accède à la puissance de HeyGen pour créer des vidéos avec des avatars IA ultra-réalistes à un tarif abordable grâce à notre abonnement partagé.",
    badge: "IA & Avatar",
    price: "15 000 FCFA/mois",
    basePrice: 15000,
    priceSuffix: "/mois",
    checkoutUrl: "https://roosevelt-mogo.mymaketou.shop/fr/products/service-et-collaboration-avec-roosevelt-5-7-5-7/checkout",
    image: "/services/heygen.png",
    outOfStock: true,
    iconPath: "M12 2a10 10 0 1 0 10 10H12V2z M12 2a10 10 0 0 1 10 10",
  },
  {
    id: "online-store",
    title: "Création de boutique en ligne (Chariow / Maketou)",
    desc: "Vends tes produits digitaux, formations ou services facilement. Nous configurons entièrement ta boutique en ligne sur Chariow ou Maketou pour te permettre de recevoir des paiements par Mobile Money.",
    badge: "Boutique",
    price: "15 000 FCFA",
    basePrice: 15000,
    checkoutUrl: "https://roosevelt-mogo.mymaketou.shop/fr/products/service-et-collaboration-avec-roosevelt-5-3/checkout",
    image: "/services/chariow-maketou.png",
    iconPath: "M9 21a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M20 21a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
  },
  {
    id: "vente-produits-digitaux",
    title: "Formation gratuite : vendre des produits digitaux",
    desc: "Tu veux te lancer dans la vente de produits digitaux (formations, ebooks, services) mais tu galères à générer du cash ? Cette formation gratuite t'explique la méthode étape par étape.",
    badge: "Gratuit",
    price: "Gratuit",
    checkoutUrl: "https://www.youtube.com/watch?v=3VnxBDg3374&t=3s",
    contactOnly: true,
    image: "/services/vente-produits-digitaux.jpg",
    iconPath: "M9 21a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M20 21a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
  },
  {
    id: "chatgpt-pro-etudiant",
    title: "Accès à ChatGPT Pro pendant 4 mois pour étudiants",
    desc: "En tant qu'étudiant, ChatGPT est offert plusieurs mois via l'offre étudiante officielle. Je t'accompagne pour créer et configurer ton compte correctement afin d'en profiter.",
    badge: "Offre limitée",
    price: "3 300 FCFA",
    basePrice: 3300,
    checkoutUrl: "https://wa.me/237655306425",
    paymentOffer: "chatgpt-pro-etudiant",
    image: "/services/chatgpt-students.png",
    iconPath: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  },
  {
    id: "izivoice",
    title: "Voix off IA pour tes vidéos (iziVoice)",
    desc: "Besoin d'une voix off naturelle pour tes vidéos faceless sans montrer ton visage ni enregistrer ta propre voix ? Utilise iziVoice, notre plateforme de génération de voix off par IA.",
    badge: "Voix Off IA",
    price: "Voir tarifs sur le site",
    checkoutUrl: "https://izivoice.app/",
    contactOnly: true,
    image: "/services/izivoice.png",
    iconPath: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8",
  },
  {
    id: "kappgen",
    title: "Création et montage vidéo IA (Kappgen)",
    desc: "Produis et monte tes vidéos faceless plus vite grâce à Kappgen, l'outil qu'on utilise aujourd'hui pour créer du contenu assisté par IA.",
    badge: "Montage IA",
    price: "Voir tarifs sur kappgen.com",
    checkoutUrl: "https://kappgen.com/",
    contactOnly: true,
    image: "/services/kappgen.png",
    iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z M4 6a2 2 0 00-2 2v8a2 2 0 002 2h11a2 2 0 002-2V8a2 2 0 00-2-2H4z",
  },
];
