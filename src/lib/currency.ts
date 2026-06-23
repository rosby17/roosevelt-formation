"use client";

import { useState, useEffect, useCallback } from "react";

export type Currency = "XAF" | "EUR" | "USD";

// Taux de conversion fixes par rapport au FCFA
const EXCHANGE_RATES = {
  XAF: 1,
  EUR: 655.957,
  USD: 600, // Taux approximatif ou fixe proposé
};

const SYMBOLS = {
  XAF: "FCFA",
  EUR: "€",
  USD: "$",
};

// Liste basique de codes pays ISO pour la zone Euro / Europe
const EURO_COUNTRIES = [
  "AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT", "LU", 
  "MT", "NL", "PT", "SK", "SI", "ES", "HR", "AD", "MC", "SM", "VA", "ME", "XK", 
  "CH", "GB" // On met UK et CH en Euro par simplicité vu les choix demandés
];

// Liste basique de codes pays ISO pour la zone XAF / XOF (Afrique francophone & autre)
const XAF_COUNTRIES = [
  "CM", "CF", "CG", "TD", "GQ", "GA", // CEMAC
  "BJ", "BF", "CI", "GW", "ML", "NE", "SN", "TG", // UEMOA
  "CD", "MG", "KM", "GN", "BI", "RW" // Autres pays d'Afrique souvent gérés en FCFA
];

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>("XAF");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch("https://get.geojs.io/v1/ip/country.json");
        const data = await res.json();
        const countryCode = data.country; // ex: "FR"

        if (EURO_COUNTRIES.includes(countryCode)) {
          setCurrency("EUR");
        } else if (XAF_COUNTRIES.includes(countryCode)) {
          setCurrency("XAF");
        } else {
          // Reste du monde en USD (US, CA, Asie, etc.)
          setCurrency("USD");
        }
      } catch (error) {
        console.error("Erreur lors de la détection du pays :", error);
        // Fallback par défaut
        setCurrency("XAF");
      } finally {
        setIsLoaded(true);
      }
    }

    fetchCountry();
  }, []);

  const formatPriceParts = useCallback((basePriceFCFA: number, suffix: string = "") => {
    if (!isLoaded) {
      return { value: "...", symbol: SYMBOLS[currency] };
    }

    const rate = EXCHANGE_RATES[currency];
    let converted = basePriceFCFA / rate;

    if (currency === "EUR" || currency === "USD") {
      converted = Math.round(converted * 10) / 10;
    }

    const formattedNumber = new Intl.NumberFormat("fr-FR", {
      maximumFractionDigits: 2,
    }).format(converted);

    return { value: formattedNumber, symbol: SYMBOLS[currency] + suffix };
  }, [currency, isLoaded]);

  const formatPrice = useCallback((basePriceFCFA: number, suffix: string = "") => {
    const parts = formatPriceParts(basePriceFCFA, suffix);
    if (!isLoaded) return "...";
    return `${parts.value} ${parts.symbol}`;
  }, [formatPriceParts, isLoaded]);

  return { currency, isLoaded, formatPrice, formatPriceParts };
}
