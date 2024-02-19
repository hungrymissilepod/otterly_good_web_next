import Link from 'next/link';
import { Button } from "@nextui-org/button";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

function NavBar() {
  return (
    <div className='mx-8 lg:mx-0'>
      <div className='bg-og-black mx-auto max-w-7xl fixed top-4 left-4 xl:left-0 right-4 xl:right-0 z-10 py-2 rounded-full'>
        <div className='flex justify-between items-center align-middle mx-8'>

          {/* TODO: after adding logo, make sure navbar height does not change when resizing screen */}
          <div className='h-8 py-5 align-middle flex flex-col justify-center bg-blue-500'>
            Logo here
          </div>
          <div className='hidden lg:inline-block'>
            <ul className="flex flex-row gap-x-8">
              <li className="text-og-orange">Case Studies</li>
              <li>Case Studies</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <CTAButton
            primary={false}
          ></CTAButton>
          <Link className='inline-block lg:hidden' href={''}>
            <HiOutlineMenuAlt1 style={{ "fontSize": "30px", "color": "white" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface CTAButtonProps {
  primary?: boolean;
}

const defaultCTAButtonProps: CTAButtonProps = {
  primary: true,
}

function CTAButton(propsIn: CTAButtonProps) {
  var props = { ...defaultCTAButtonProps, ...propsIn }
  var btnColor = props.primary ? 'bg-og-black' : 'bg-og-white'
  var textColor = props.primary ? 'text-og-white' : 'text-og-black'
  return (
    // TODO: should scroll down to contact us form
    <Link className='hidden lg:inline-block' href='/'>
      <Button className={`px-8 py-5 font-bold rounded-[8px] border-og-white border-2 ${btnColor} ${textColor} font-bold text-md font-sans`} radius='none'>Get in touch</Button>
    </Link>
  );
}

export { NavBar, CTAButton };