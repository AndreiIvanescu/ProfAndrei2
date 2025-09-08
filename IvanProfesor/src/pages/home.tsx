import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import WhyChoose from "@/components/why-choose";
import Results from "@/components/results";
import Education from "@/components/education";
import About from "@/components/about";
import Methodology from "@/components/methodology";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navigation />
      <Hero />
      <WhyChoose />
      <Results />
      <Education />
      <About />
      <Methodology />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
