'use client';
import React, { useRef, useState } from "react";
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

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


  return (
    <div className="w-full h-screen bg-og-black">
      <div className="flex flex-col items-center justify-center h-screen ">
        {/* <h1 className="text-3xl md:text-6xl  lg:text-8xl text-center container">SAVING WEBISTES &<br /> APPS, ONE DESIGN<br /> AT A TIME!</h1> */}

        {/* TODO: use correct font here */}
        <h1 className={`${redHatDisplay.className} text-3xl md:text-6xl  lg:text-8xl text-center container`}>
          SAVING <span className="underline hover:bg-og-orange hover:text-og-black">WEBISTES</span> &<br />
          <span className="underline hover:bg-og-orange hover:text-og-black">APPS,</span> ONE <span className="underline hover:bg-og-orange hover:text-og-black">DESIGN</span><br /> AT A TIME!
        </h1>
        <p className="mx-8 text-center py-12">I&apos;m baby freegan sriracha deep v chillwave pitchfork health goth try-hard big mood poke lomo kitsch authentic disrupt godard.</p>
      </div>

    </div>
  );
}