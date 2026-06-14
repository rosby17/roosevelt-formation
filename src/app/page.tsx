import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programme from "@/components/Programme";
import Prerequis from "@/components/Prerequis";
import Offres from "@/components/Offres";
import Resultats from "@/components/Resultats";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programme />
      <Prerequis />
      <Offres />
      <Resultats />
      <Faq />
      <Contact />
    </>
  );
}
