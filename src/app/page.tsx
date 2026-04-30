import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SpecsStrip } from "@/components/specs-strip";
import { Services } from "@/components/services";
import { ForBuilders } from "@/components/for-builders";
import { Process } from "@/components/process";
import { Gallery } from "@/components/gallery";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SpecsStrip />
      <Services />
      <ForBuilders />
      <Process />
      <Gallery />
      <ContactCTA />
      <Footer />
    </>
  );
}
