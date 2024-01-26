'use client';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";



function ServicesSection() {
  return (
    <div className="my-20 py-20 mx-auto">
      <div className="text-og-black text-4xl font-bold py-8 max-w-7xl mx-auto">
        Our services
      </div>
      <hr></hr>
      <ServicesTile title="WEB" desc="desc ksldks ldksd slkdl skds l" />
      <hr></hr>
      <ServicesTile title="APPS" desc="desc ksldks ldksd slkdl skds l" />
      <hr></hr>
      <ServicesTile title="DESIGN" desc="desc ksldks ldksd slkdl slkd lsk flke  skds l" />
      <hr></hr>
      <ServicesTile title="HOSTING" desc="desc ksldks ldksd slkdl skds l skdlskd sld " />
      <hr></hr>
      <ServicesTile title="MAINTENANCE" desc="desc ksldks ldksd slkdl skds l lkfslkd sklks lkds l" />
      <hr></hr>
    </div>
  );
}

function ServicesTile({ title, desc }: { title: string, desc: string }) {
  const box = useRef(null);

  useGSAP((context) => {
    gsap.to(".box", { rotation: "+=360" });
  }, { scope: box });

  return (
    <div className="bg-og-orange hover:bg-transparent" ref={box}>
      <div className="box group flex flex-row justify-between items-center max-w-7xl mx-auto">
        <h2 className="text-og-black text-8xl font-black group-hover:text-og-white">{title}</h2>
        <p className="hidden group-hover:inline text-white">{desc}</p>
      </div>
    </div>
  );
}

export { ServicesSection };
