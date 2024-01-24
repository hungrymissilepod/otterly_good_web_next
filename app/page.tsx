import Image from 'next/image'
import HeroSectionCinnamon from './components/otterlygood/hero-section';
import HeroSection from './components/otterlygood/hero-section';
import { NavBar } from './components/otterlygood/narbar';
import { CaseStudiesSection } from './components/otterlygood/case-studies-section';

export default function Home() {

  return (
    <main>
      <body>
        <NavBar />
        <HeroSection />
        <CaseStudiesSection />
      </body>
    </main>
  );
}