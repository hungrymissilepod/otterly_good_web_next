import Image from 'next/image';
import React from "react";
import Link from 'next/link';

export default function HeroSectionCinnamon() {
  return (
    <div className='bg-white w-10/12 m-auto my-24'>
      <h1 className='text-black text-7xl font-black leading-snug'>Results focused design & development agency</h1>
      <p className='text-black text-lg my-6'>Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build momentum for your success.</p>
      <div className='my-14'>
        <ul className=''>
          <li className='inline-block pr-16'>
            <Image
              className='dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
              src='/deloitte.svg'
              alt='Deloitte Logo'
              width={180}
              height={37}
              priority
            />
            <p className='text-black mt-4'>TOP FAST 50 Central Europe<br />2023</p>
          </li>
          <li className='inline-block pr-16'>
            <Image
              className='dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
              src='/clutch.png'
              alt='Clutch Logo'
              width={180}
              height={37}
              priority
            />
            <p className='text-black mt-4'>TOP FAST 50 Central Europe<br />2023</p>
          </li>
        </ul>
      </div>
    </div >
  );
}