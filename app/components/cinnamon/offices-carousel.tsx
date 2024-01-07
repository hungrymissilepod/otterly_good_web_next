'use client';
import React, { useRef, useState } from "react";
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function OfficesCarouselCinnamon() {
  var [index, setIndex] = useState(0);
  var xPos = index * 500;
  var styles = {
    transform: `translate(${xPos}px, 0px)`
  };

  const next = () => {
    if (index >= 0) {
      return;
    }
    setIndex(index + 1);
    xPos = (index * 500);
  }

  const previous = () => {
    if (index <= -2) return;
    setIndex(index - 1);
    xPos = index * 500;
  }

  return (
    // This div will clip anything offscreen. This way the user cannot scroll horizontally
    <div className="lg:overflow-clip">
      <div className='mx-auto lg:my-20 max-w-6xl px-4 xl:px-0'>
        <div className="justify-center">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-black text-5xl font-bold pb-12">Our offices</h2>
            <div className="flex flex-row gap-10 w-screen py-4 lg:py-0 lg:overflow-x-visible overflow-x-scroll ease-in-out duration-300 no-scrollbar" style={styles}>
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

        <ul className="hidden lg:flex flex-row gap-x-10 py-4">
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
    </div>
  );
}