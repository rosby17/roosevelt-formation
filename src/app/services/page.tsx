"use client";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      {/* Spacer to push content down because Navbar is fixed */}
      <div style={{ height: "80px", background: "var(--black-bg)" }} />
      <Services />
      <Contact />
    </>
  );
}
