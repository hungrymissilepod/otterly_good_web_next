import HeroSection from './components/otterlygood/hero-section';
import { NavBar } from './components/otterlygood/navbar';
import { CaseStudiesSection } from './components/otterlygood/case-studies-section';
import { ServicesSection } from './components/otterlygood/services-section';
import { PricingSection } from './components/otterlygood/pricing-section';
import { ContactSection } from './components/otterlygood/contact-section';
import { Footer } from './components/otterlygood/footer';


export default function Home() {
  return (
    <main>
      <body>
        <NavBar />
        <HeroSection />
        <CaseStudiesSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </body>
    </main>
  );
}
