'use client';
import React, { useRef, useState } from "react";
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const setPlayBack = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.15;
    }
  };
  // TODO: add noise over the top of this section to see what kind of effect it has
  return (
    <div className='relative h-3/4 w-full bg-og-black select-none'>
      <video ref={videoRef} onCanPlay={setPlayBack} className='object-fit m-auto  h-3/4 opacity-5' src={require('../../../public/glitch.mp4')} autoPlay loop muted></video>
      <div className=" absolute bottom-2 left-2 right-2 lg:bottom-8 lg:left-8 lg:right-8">
        <div className="hover:bg-og-orange focus:bg-og-orange">
          <h1 className={`${redHatDisplay.className} text-6xl hover:text-7xl lg:text-display lg:hover:text-display-hover text-og-white hover:text-og-black font-black transition-all  tracking-display hover:tracking-display-extended`}>WEB</h1>
        </div>
        <div className="hover:bg-og-orange focus:bg-og-orange">
          <h1 className={`${redHatDisplay.className} text-6xl hover:text-7xl lg:text-display lg:hover:text-display-hover text-og-white hover:text-og-black font-black transition-all  tracking-display hover:tracking-display-extended`}>APPS</h1>
        </div>
        <div className="hover:bg-og-orange focus:bg-og-orange">
          <h1 className={`${redHatDisplay.className} text-6xl hover:text-7xl lg:text-display lg:hover:text-display-hover text-og-white hover:text-og-black font-black transition-all  tracking-display hover:tracking-display-extended`}>DESIGN</h1>
        </div>
      </div>
    </div>
  );
}