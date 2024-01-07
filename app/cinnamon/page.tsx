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


// TODO: try out css tilt effect on an image when hovering over it
// TODO: try out more interactive elements like carousel

// TODO: check errors in console
// TODO: check lighthouse score. How do we improve it?
// TODO: check SEO score. How do we improve it?
export default function Page() {
  const blockRef = useRef(null);
  var [index, setIndex] = useState(0);
  const [pos, setPos] = useState(0);
  const x = 0;
  const y = 0;
  var p = index * 500;
  var styles = {
    transform: `translate(${p}px, ${y}px)`
  };

  const next = () => {
    if (index >= 0) {
      return;
    }
    index = index + 1;
    setIndex(index);
    p = (index * 500);
    styles = {
      transform: `translate(${p}px, ${y}px)`
    }
    console.log(`update x: ${p}`);
    console.log(`next index: ${index}`);
  }

  const previous = () => {
    if (index <= -2) return;
    setIndex(index - 1);
    p = index * 500;
    styles = {
      transform: `translate(${p}px, ${y}px)`
    }
    console.log(`update x: ${p}`);
    console.log(`index: ${index}`);
  }

  return (
    <body>
      <NavBarCinnamon />
      <div className='mx-auto my-6 lg:my-20 max-w-6xl px-4 xl:px-0'>
        <div className="flex justify-center w-full">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-black text-5xl font-bold pb-12">Our offices</h2>
            <div className="flex flex-row gap-10 overflow-x-visible ease-in-out duration-300" style={styles}>
              <div className="block" style={{ "minWidth": "500px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="London Office"
                  width={500}
                  height={500}
                />
                <div className="flex flex-row items-center py-6">
                  <CiLocationOn style={{ "fontSize": "20px", "color": "black", "strokeWidth": "1px" }} />
                  <div className="px-3">
                    <h1 className="text-black font-bold text-xl">London</h1>
                    <h1 className="text-black">21b Baker Street, London, United Kingdom</h1>
                  </div>
                </div>
              </div>

              <div className="block" style={{ "minWidth": "500px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="New York Office"
                  width={500}
                  height={500}
                />
                <div className="flex flex-row items-center py-6">
                  <CiLocationOn style={{ "fontSize": "20px", "color": "black", "strokeWidth": "1px" }} />
                  <div className="px-3">
                    <h1 className="text-black font-bold text-xl">New York</h1>
                    <h1 className="text-black">7th Ave, New York, United States</h1>
                  </div>
                </div>
              </div>
              <div className="block" style={{ "minWidth": "500px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tokyo Office"
                  width={500}
                  height={500}
                />
                <div className="flex flex-row items-center py-6">
                  <CiLocationOn style={{ "fontSize": "20px", "color": "black", "strokeWidth": "1px" }} />
                  <div className="px-3">
                    <h1 className="text-black font-bold text-xl">Tokyo</h1>
                    <h1 className="text-black">99 Kichijojo Sun Road, Tokyo, Japan</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <ul className="flex-row flex gap-x-10">
          <li className={`relative top-0 ease-in duration-100 drop-shadow-md ${index < 0 ? 'text-indigo-500 hover:-top-2' : 'text-gray-400'} `}>
            <button>
              <FaArrowLeft size={40} onClick={() => next()} style={{ "fontSize": "20px", "strokeWidth": "1px" }} />
            </button>
          </li>
          <li className={`relative top-0 ease-in duration-100 drop-shadow-md ${index > -2 ? 'text-indigo-500 hover:-top-2' : 'text-gray-400'}`}>
            <button>
              <FaArrowRight size={40} onClick={() => previous()} style={{ "fontSize": "20px", "strokeWidth": "1px" }} />
            </button>
          </li>
        </ul>

      </div>
      <HeroSectionCinnamon />
      <CaseStudySectionCinnamon />
      <ServicesSectionCinnamon />
      <FooterSectionCinnamon />
    </body >
  );
}