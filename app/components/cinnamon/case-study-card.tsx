import Image from 'next/image';
import React from "react";
import Link from 'next/link';

function CaseStudyCard({ title, desc, tags, image, imageAlt, color }: { title: string, desc: string, tags: React.ReactElement[], image: string, imageAlt: string, color: any }) {
  const colorVariants: any = {
    purple: 'bg-purple-600 hover:shadow-purple-500',
    green: 'bg-green-600 hover:shadow-green-500',
  };

  return (
    <Link
      href={''}>
      <div className={`mt-10 mb-5 lg:mb-10 ${colorVariants[color]} bg-${color}-900 hover:shadow-${color}-900 hover:shadow-2xl hover:scale-105 ease-in duration-75`}>
        <div className='p-9 flex flex-row justify-between'>
          <div className='flex-1 hidden lg:block'>
            <ul>
              {tags}
            </ul>
            <h2 className='text-white font-bold text-4xl leading-normal py-4'>{title}</h2>
            <p className='text-white text-md text-lg leading-7'>{desc}</p>
            <div className='py-10'></div>
            <div>

              <ul>
                <li className='inline-block pr-5'>
                  <div className='relative'>
                    <Image
                      className='absolute -top-8 -left-2 opacity-30'
                      src='/quotes.png'
                      alt='Quotation Marks'
                      width='100'
                      height='100'
                    />
                    <Image
                      className='relative rounded-full z-0'
                      src='/man.png'
                      alt='Happy Man'
                      width={50}
                      height={50}
                      priority
                    />
                  </div>

                </li>
                <div className='inline-block'>
                  <p className='font-bold py-2'>Great collaboration through the whole process</p>
                  <p>Alex Whiteside</p>
                </div>
              </ul>
            </div>


          </div>
          <div className='flex justify-center items-center flex-1'>
            <Image
              className='dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
              src={image}
              alt={imageAlt}
              width={360}
              height={72}
              priority
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

function CaseStudyCardTag({ title, color }: { title: string, color: any }) {
  const colorVariants: any = {
    white: 'text-white',
    black: 'text-black',
  };

  return (
    <li className='inline-block pr-4'>
      <p className={`${colorVariants[color]} font-bold text-xs`}>{title}</p>
    </li>
  );
}


export { CaseStudyCard, CaseStudyCardTag };