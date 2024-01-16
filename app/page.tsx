import Image from 'next/image'
import HeroSectionCinnamon from './components/otterlygood/hero-section';
import HeroSection from './components/otterlygood/hero-section';

export default function Home() {

  return (
    <main>
      <body>
        {/* Create OG navbar */}
        <HeroSection />
      </body>
    </main>
  );
}