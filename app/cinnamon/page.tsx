import HeroSectionCinnamon from '../components/cinnamon/hero-section';
import CaseStudySectionCinnamon from '../components/cinnamon/case-study-section';
import ServicesSectionCinnamon from "../components/cinnamon/services-section";
import FooterSectionCinnamon from "../components/cinnamon/footer-section";
import { NavBarCinnamon } from "../components/cinnamon/navbar-cinnamon";
import OfficesCarouselCinnamon from "../components/cinnamon/offices-carousel";

// TODO: try out css tilt effect on an image when hovering over it
// TODO: check errors in console
export default function Page() {
  return (
    <body>
      <NavBarCinnamon />
      <HeroSectionCinnamon />
      <CaseStudySectionCinnamon />
      <ServicesSectionCinnamon />
      <OfficesCarouselCinnamon />
      <FooterSectionCinnamon />
    </body >
  );
}