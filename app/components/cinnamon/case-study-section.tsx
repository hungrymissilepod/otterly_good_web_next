import { CaseStudyCard, CaseStudyCardTag } from "./case-study-card";
import Image from 'next/image';

export default function CaseStudySectionCinnamon() {
  const title = 'Engage & Decide';
  const desc = 'Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.';
  const title2 = 'Optimize prices to maximize revenue';
  const desc2 = 'Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue.';
  return (
    <div className='mx-auto my-6 lg:my-20 max-w-6xl px-4 xl:px-0'>
      <CaseStudyCard
        title={title}
        desc={desc}
        tags={[
          <CaseStudyCardTag key='1' title='PRODUCT DESIGN' color='white' />,
          <CaseStudyCardTag key='2' title='WEB DEVELOPMENT' color='white' />,
        ]}
        image='/apple.png'
        imageAlt='Apple'
        color="purple"
      />
      <ul className="lg:hidden">
        <CaseStudyCardTag key='1' title='PRODUCT DESIGN' color='black' />
        <CaseStudyCardTag key='2' title='WEB DEVELOPMENT' color='black' />
      </ul>
      <h2 className='text-black font-bold text-2xl leading-normal py-4 lg:hidden'>{title}</h2>
      <p className='text-black text-md text-lg lg:hidden leading-8'>{desc}</p>
      <ul className="py-4 lg:hidden">
        <li className='inline-block pr-5'>
          <Image
            className='relative rounded-full z-10'
            src='/man.png'
            alt='Happy Man'
            width={50}
            height={50}
            priority
          />
        </li>
        <div className='inline-block'>
          <p className='text-black font-bold py-2'>Great collaboration through the whole process</p>
          <p className="text-black">Alex Whiteside</p>
        </div>
      </ul>



      <CaseStudyCard
        title={title2}
        desc={desc2}
        tags={[
          <CaseStudyCardTag key='1' title='PRODUCT DESIGN' color='white' />,
          <CaseStudyCardTag key='2' title='QUALITY ASSURANCE' color='white' />,
        ]}
        image='/kiwi.png'
        imageAlt='Kiwi'
        color="green"
      />
      <ul className="lg:hidden">
        <CaseStudyCardTag key='1' title='PRODUCT DESIGN' color='black' />,
        <CaseStudyCardTag key='2' title='QUALITY ASSURANCE' color='black' />,
      </ul>
      <h2 className='text-black font-bold text-2xl leading-normal py-4 lg:hidden'>{title2}</h2>
      <p className='text-black text-md text-lg lg:hidden leading-8'>{desc2}</p>
      <ul className="py-4 lg:hidden">
        <li className='inline-block pr-5'>
          <Image
            className='relative rounded-full z-10'
            src='/man.png'
            alt='Happy Man'
            width={50}
            height={50}
            priority
          />
        </li>
        <div className='inline-block'>
          <p className='text-black font-bold py-2'>Great collaboration through the whole process</p>
          <p className="text-black">Alex Whiteside</p>
        </div>
      </ul>
    </div>
  );
}