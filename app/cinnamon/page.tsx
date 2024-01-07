'use client';
import React, { useRef, useState } from "react";
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";

import HeroSectionCinnamon from '../components/cinnamon/hero-section';
import CaseStudySectionCinnamon from '../components/cinnamon/case-study-section';
import ServicesSectionCinnamon from "../components/cinnamon/services-section";
import FooterSectionCinnamon from "../components/cinnamon/footer-section";
import { NavBarCinnamon } from "../components/cinnamon/navbar-cinnamon";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { clsx } from 'clsx';
import OfficesCarouselCinnamon from "../components/cinnamon/offices-carousel";


// TODO: try out css tilt effect on an image when hovering over it
// TODO: try out more interactive elements like carousel

// TODO: check errors in console
// TODO: check lighthouse score. How do we improve it?
// TODO: check SEO score. How do we improve it?
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