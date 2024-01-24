
import Image from 'next/image';

function CaseStudiesSection() {
  return (
    <div className="my-10 mx-auto max-w-7xl">
      <div className="text-og-black text-4xl font-bold py-8">
        Our work
      </div>
      <CaseStudy></CaseStudy>
      <CaseStudy></CaseStudy>
    </div>
  );
}

function CaseStudy() {
  return (
    <div className="flex flex-row gap-x-20 items-center py-12">
      <div className='flex flex-col'>
        <h2 className="text-og-black py-2 text-2xl font-bold">Linggo</h2>
        <ul className='flex gap-x-4 py-4'>
          <li className='text-og-black inline'>TRAVEL</li>
          <li className='text-og-black inline'>TRAVEL</li>
        </ul>
        <p className='text-og-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, purus commodo vehicula tristique, arcu massa mattis enim, vel tincidunt ex orci in nisl. Proin eu aliquam eros. Sed id tempor elit. Duis vitae felis vel diam placerat auctor. Curabitur dictum tempus accumsan.</p>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="New York Office"
        width={1000}
        height={1000}
      />
    </div>
  );
}

export { CaseStudiesSection };