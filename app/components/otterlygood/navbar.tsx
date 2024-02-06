import Link from 'next/link';
import { Button } from "@nextui-org/button";

function NavBar() {
  return (
    <div className='flex justify-center'>
      <nav className="bg-og-black fixed top-8 z-10 rounded-full container">
        <div className="flex flex-row justify-between items-center py-3 mx-8">
          Logo here
          <ul className="flex flex-row gap-x-8">
            <li className="text-og-orange">Case Studies</li>
            <li>Case Studies</li>
            <li>Case Studies</li>
          </ul>
          <CTAButton
            primary={false}
          ></CTAButton>
        </div>
      </nav>
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