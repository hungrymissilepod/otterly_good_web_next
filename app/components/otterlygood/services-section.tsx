'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from "react";

function ServicesSection() {
  return (
    <div className='bg-white'>
      <div className='mx-auto container py-20'>
        <h2 className='text-og-black font-bold text-2xl'>HOW CAN WE HELP YOU?</h2>
        <div className='grid grid-cols-4 pt-32 pb-16'>
          <div className='flex flex-col items-center'>
            <div className='bg-og-orange w-10 h-10'></div>
            <h3 className='text-og-black text-4xl font-bold py-4 text-center'>UI / UX<br />Design</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-og-orange w-10 h-10'></div>
            <p className='text-og-black text-4xl font-bold py-4 text-center'>Website Development</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-og-orange w-10 h-10'></div>
            <p className='text-og-black  text-4xl font-bold py-4 text-center'>Mobile Development</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-og-orange w-10 h-10'></div>
            <p className='text-og-black  text-4xl font-bold py-4 text-center'>Hosting & Maintenance</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export { ServicesSection };


// function ServicesSection() {
//   return (
//     <div className="my-20 py-20 mx-auto">
//       <div className="text-og-black text-4xl font-bold py-8 max-w-7xl mx-auto">
//         Our services
//       </div>
//       <hr></hr>
//       <ServicesTile title="WEB" desc="desc ksldks ldksd slkdl skds l" />
//       <hr></hr>
//       <ServicesTile title="APPS" desc="desc ksldks ldksd slkdl skds l" />
//       <hr></hr>
//       <ServicesTile title="DESIGN" desc="desc ksldks ldksd slkdl slkd lsk flke  skds l" />
//       <hr></hr>
//       <ServicesTile title="HOSTING" desc="desc ksldks ldksd slkdl skds l skdlskd sld " />
//       <hr></hr>
//       <ServicesTile title="MAINTENANCE" desc="desc ksldks ldksd slkdl skds l lkfslkd sklks lkds l" />
//       <hr></hr>
//     </div>
//   );
// }

// function ServicesTile({ title, desc }: { title: string, desc: string }) {
//   const box = useRef(null);
//   const boxTween = useRef<gsap.core.Tween>();
//   // const [hover, setHover] = useState(false);

//   // useGSAP((context) => {
//   //   gsap.to(".box", { rotation: "+=360" });
//   // }, { scope: box });

//   // let animation = gsap.to(".box", {
//   //   paused: true,
//   //   opacity: 0
//   // });

//   useEffect(() => {
//     boxTween.current = gsap.to(box.current, {
//       duration: 0.5,
//       backgroundColor: '#E47229',
//       paused: true
//     });
//   }, []);

//   const onMouseEnterHandler = () => {
//     console.log('mouse enter');
//     boxTween.current?.play();
//   };
//   const onMouseLeaveHandler = () => {
//     boxTween.current?.reverse();
//   };

//   return (
//     <div
//       ref={box}
//       onMouseEnter={onMouseEnterHandler}
//       onMouseLeave={onMouseLeaveHandler}
//     >
//       <div className="box hover:bg-og-orange">
//         <div className="group flex flex-row justify-between items-center max-w-7xl mx-auto">
//           <h2 className="text-og-black text-8xl font-black group-hover:text-og-white">{title}</h2>
//           <p className="hidden group-hover:inline text-white">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export { ServicesSection };
