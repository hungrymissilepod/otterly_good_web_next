'use client';
import React, { useRef, useState } from "react";
import Image from 'next/image';
import { CTAButton } from "./navbar";

export default function HeroSection() {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const setPlayBack = () => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.15;
  //   }
  // };
  // // TODO: add cool mouse cursor and see how it feels to use
  // // TODO: use difference on hover
  // // TODO: add noise over the top of this section to see what kind of effect it has
  // // TODO: need to find final video or edit this one so it is correct speed and not so distracting, etc. Also then we don't need to use [useRef]
  // return (
  //   <div className="w-full h-screen bg-green-500">
  //     <div className='absolute top-0 left-0 w-full h-5/6 bg-og-black select-none'>
  //       <video ref={videoRef} onCanPlay={setPlayBack} className='peer w-full h-full object-cover opacity-25' src={require('../../../public/glitch.mp4')} autoPlay loop muted></video>

  //       <div className=" absolute bottom-2 left-2 right-2 lg:bottom-8 lg:left-8 lg:right-8">
  //         <div className="hover:bg-og-orange focus:bg-og-orange hover:mix-blend-difference">
  //           <h1 className={`${redHatDisplay.className} text-6xl hover:text-7xl lg:text-display lg:hover:text-display-hover text-og-white hover:text-og-black font-black transition-all  tracking-display hover:tracking-display-extended`}>WEB</h1>
  //         </div>
  //         <div className="hover:bg-og-orange focus:bg-og-orange hover:mix-blend-difference">
  //           <h1 className={`${redHatDisplay.className} text-6xl hover:text-7xl lg:text-display lg:hover:text-display-hover text-og-white hover:text-og-black font-black transition-all  tracking-display hover:tracking-display-extended`}>APPS</h1>
  //         </div>
  //         <div className="group hover:bg-og-orange focus:bg-og-orange">
  //           <h1 className={`${redHatDisplay.className} text-6xl hover:text-7xl lg:text-display lg:hover:text-display-hover text-og-white hover:text-og-black font-black transition-all  tracking-display hover:tracking-display-extended`}>
  //             DESIGN<span className={`${redHatDisplay.className} text-og-orange group-hover:text-white group-hover:mix-blend-difference tracking-display group-hover:tracking-display-extended`}>.</span>
  //           </h1>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // TODO: make sure this is responsive
  // TODO: check line height is correct and responsive
  // TODO: add final image and copy
  return (
    <div className="w-full h-[90vh] bg-og-black flex">
      <div className="flex items-end mx-auto container">
        <div className="flex flex-row w-full justify-between mb-12">
          <div className="self-center">
            <h1 className="{`text-3xl  md:text-6xl lg:text-6xl font-poppins font-bold grow xl:leading-loose`}" style={{ lineHeight: "1.15em" }} >We <span className="text-og-orange">Design</span> &<br /> Build Amazing<br /><span className="text-og-orange">Website</span> and <span className="text-og-orange">Apps</span></h1>
            <p className="font-sans my-8 leading-relaxed">I'm baby freegan sriracha deep v chillwave pitchfork health goth<br />try-hard big mood poke lomo kitsch authentic disrupt godard.</p>
            <CTAButton />
          </div>
          <Image
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="New York Office"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '22%', height: 'auto' }}
          />
        </div>
      </div >
    </div >
  );
}