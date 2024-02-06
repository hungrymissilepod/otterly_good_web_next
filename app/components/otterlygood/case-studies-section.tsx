import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@nextui-org/button";

function CaseStudiesSection() {
  return (
    <div className='bg-og-cream'>
      <div className='mx-auto max-w-7xl container py-20'>
        <h2 className='text-og-black font-bold text-2xl'>OUR WORK</h2>
        <CaseStudyRightAligned></CaseStudyRightAligned>
        <CaseStudy></CaseStudy>
      </div>
    </div>
  );
}

function CaseStudy() {
  return (
    <div className="justify-between items-center py-10 grid grid-cols-10 gap-4">
      <div className='flex flex-col col-start-1 col-end-5'>
        <h2 className="text-og-black py-2 text-3xl font-bold font-poppins">Viajo</h2>
        <ul className='flex gap-x-4 py-2'>
          <li className='text-og-light-brown font-bold text-md inline'>TRAVEL</li>
          <li className='text-og-light-brown font-bold text-md inline'>ARTIFICIAL INTELLIGENCE</li>
        </ul>
        <p className='text-og-black pt-2 leading-8 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, purus commodo vehicula tristique, arcu massa mattis enim, vel tincidunt ex orci in nisl. Proin eu aliquam eros. Sed id tempor elit. Duis vitae felis vel diam placerat auctor. Curabitur dictum tempus accumsan.</p>
        <Link className='hidden lg:inline-block py-8' href='/'>
          <Button className={`px-8 py-5 rounded-[8px] bg-og-black text-og-white font-bold text-md font-sans`} radius='none'>Learn More</Button>
        </Link>
      </div>
      <Image
        className='col-start-6 col-span-5'
        src="/hero.png"
        alt="New York Office"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

function CaseStudyRightAligned() {
  return (
    <div className="justify-between items-center py-10 grid grid-cols-10 gap-4">
      <Image
        className='col-start-1 col-span-5'
        src="/hero.png"
        alt="New York Office"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className='flex flex-col col-start-7 col-span-5'>
        <h2 className="text-og-black py-2 text-3xl font-bold font-poppins">Linggo</h2>
        <ul className='flex gap-x-4 py-2'>
          <li className='text-og-light-brown font-bold text-md inline'>EDUCATION</li>
          <li className='text-og-light-brown font-bold text-md inline'>GAMIFICATION</li>
        </ul>
        <p className='text-og-black pt-2 leading-8 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, purus commodo vehicula tristique, arcu massa mattis enim, vel tincidunt ex orci in nisl. Proin eu aliquam eros. Sed id tempor elit. Duis vitae felis vel diam placerat auctor. Curabitur dictum tempus accumsan.</p>
        <Link className='hidden lg:inline-block py-8' href='/'>
          <Button className={`px-8 py-5 rounded-[8px] bg-og-black text-og-white font-bold text-md font-sans`} radius='none'>Learn More</Button>
        </Link>
      </div>

    </div>
  );
}

export { CaseStudiesSection };