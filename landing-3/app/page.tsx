import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Method from "@/components/Method";
import About from "@/components/About";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Values />
        <Services />
        <Method />
        <About />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
