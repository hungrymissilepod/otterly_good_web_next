import Image from 'next/image';
import React from "react";
import { Button } from "@nextui-org/button";
import Link from 'next/link';

// TODO: pass in color
// TODO: pass in image
// TOOD: pass in man image, name, and quote
// TODO: pass in tags at top
function CaseStudyCard({ title, desc, tags, image, imageAlt }: { title: string, desc: string, tags: React.ReactElement[], image: string, imageAlt: string }) {
  return (
    <Link
      href={''}>
      <div className='bg-purple-900 my-20 hover:shadow-purple-900 hover:shadow-2xl hover:scale-105 ease-in duration-75'>
        <div className='p-9 flex flex-row justify-between'>
          <div className='flex-1'>
            <ul>
              {tags}
            </ul>
            <h2 className='text-white font-bold text-4xl leading-normal py-4'>{title}</h2>
            <p className='text-white text-md text-lg leading-7'>{desc}</p>
            <div className='py-10'></div>
            <ul>
              <li className='inline-block pr-5'>
                <Image
                  className='rounded-full'
                  src='/man.png'
                  alt='Happy Man'
                  width={50}
                  height={50}
                  priority
                />
              </li>
              <div className='inline-block'>
                <p className='font-bold py-2'>Great collaboration through the whole process</p>
                <p>Alex Whiteside</p>
              </div>
            </ul>

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

function CaseStudyCardTag({ title }: { title: string }) {
  return (
    <li className='inline-block pr-4'>
      <p className='text-white font-bold text-xs'>{title}</p>
    </li>
  );
}


export { CaseStudyCard, CaseStudyCardTag };