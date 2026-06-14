"use client";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div style={{ height: "80px", background: "var(--black)" }} />
      <Services />
      <Contact />
    </>
  );
}
