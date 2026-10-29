import { About } from "@/components/sections/about";
import { Differentials } from "@/components/sections/differentials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { FloatingWhatsapp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Office } from "@/components/sections/office";
import { Procedures } from "@/components/sections/procedures";
import { Steps } from "@/components/sections/steps";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Procedures />
        <Differentials />
        <Office />
        <Testimonials />
        <Steps />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
