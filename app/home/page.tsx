import Image from 'next/image';
import React from "react";
import Link from 'next/link';
import NavBar from '../components/cinnamon/navbar';
import { CaseStudyCard, CaseStudyCardTag } from '../components/cinnamon/case-study-card';


export default function Page() {
  return (
    <body>
      <NavBar />
      <div className='bg-white w-10/12 m-auto mt-20'>
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
        <CaseStudyCard
          title='Engage & Decide'
          desc='Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.'
          tags={[
            <CaseStudyCardTag key='1' title='PRODUCT DESIGN' />,
            <CaseStudyCardTag key='2' title='WEB DEVELOPMENT' />,
          ]}
          image='/apple.png'
          imageAlt='Apple'
        />
        <CaseStudyCard
          title='Optimize prices to maximize revenue'
          desc='Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue.'
          tags={[
            <CaseStudyCardTag key='1' title='PRODUCT DESIGN' />,
            <CaseStudyCardTag key='2' title='QUALITY ASSURANCE' />,
          ]}
          image='/kiwi.png'
          imageAlt='Kiwi'
        />
      </div >
      <div className='bg-green-500 h-screen clear-both' ></div >
    </body >
  );
}