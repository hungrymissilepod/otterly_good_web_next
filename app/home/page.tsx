import Image from 'next/image';
import React from "react";
import { Button } from "@nextui-org/button";
import Link from 'next/link';


export default function Page() {
  /// TODO: move these a tags into a component so they are reusable
  /// TODO: pass in an [active] parameter so that we can work out from the current url path if that page is active or not
  /// TODO: display this nav bar on all pages
  return (
    <body>
      <nav className='flex justify-between items-center px-20 py-6 bg-white sticky top-0'>
        <Image
          className=' inline-block dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        <ul className="">
          <li className="list-none inline-block"><a className="px-6 text-black font-medium" href="">Projects</a></li>
          <li className="list-none inline-block"><a className="px-6 text-black font-medium" href="">Services</a></li>
          <li className="list-none inline-block"><a className="px-6 text-black font-medium" href="">About Us</a></li>
          <li className="list-none inline-block"><a className="px-6 text-black font-medium" href="">Blog</a></li>
          <div className='list-none inline-block px-2'></div>
          <Link href="/">
            <Button className='bg-indigo-500 px-5 py-2' color="primary" >
              Let&#39;s collaborate
            </Button>
          </Link>
        </ul>
      </nav>

      <div className='bg-red-500 h-screen'></div>
      <div className='bg-green-500 h-screen'></div>
      {/* <nav className='flex justify-between m-auto text-center'>
        <ul className="list-none inline-block">
          <Image
            className='inline dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <li className="inline"><a className="px-4" href="">Projects</a></li>
          <li className="inline"><a className="px-4" href="">Projects</a></li>
          <li className="inline"><a className="px-4" href="">Projects</a></li>
          <li className="inline"><a className="px-4" href="">Projects</a></li>
          <li className="inline"><a className="px-4" href="">Projects</a></li>
          <Link href="/">
            <Button className='bg-indigo-500 px-5 py-2' color="primary" >
              Let&#39;s collaborate
            </Button>
          </Link>

        </ul>
      </nav> */}
      {/* <h1>OTTERLY GOOD APPS</h1> */}
    </body>


    // <body >
    //   <div className="flex  bg-white overflow-hidden sticky top-0 z-50 overscroll-none overscroll-none" >
    //     <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer bg-green-500 ">Home</a>
    //     <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer">Blog</a>
    //     <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer">News</a>
    //     <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer">Contact</a>
    //   </div>
    //   <main>
    //     <section className="h-screen flex bg-red-400 relative">
    //       <div className="inline-block absolute bottom-0">
    //         <h1 className="font-black" style={{ "fontSize": "14vh", "lineHeight": "14vh", "whiteSpace": "pre-line" }} >WE ARE</h1>
    //         <h1 className="font-black" style={{ "fontSize": "14vh", "lineHeight": "14vh", "whiteSpace": "pre-line" }} >OTTERLY GOOD</h1>
    //         <h1 className="font-black" style={{ "fontSize": "14vh", "lineHeight": "14vh", "whiteSpace": "pre-line" }} >APPS</h1>
    //         <h1 className="font-black" style={{ "fontSize": "14vh", "lineHeight": "14vh", "whiteSpace": "pre-line" }} >WEB</h1>
    //         <h1 className="font-black" style={{ "fontSize": "14vh", "lineHeight": "14vh", "whiteSpace": "pre-line" }} >DESIGN</h1>
    //       </div>

    //     </section>
    //   </main>
    //   <section className="h-96 bg-green-400">
    //     Image Here
    //   </section>
    //   <section className="h-96 bg-blue-400">
    //     Image Here
    //   </section>
    //   <footer></footer>
    // </body>
  );
}