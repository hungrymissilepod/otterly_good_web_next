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
          <CTAButton></CTAButton>
        </div>
      </nav>
    </div>
  );
}

interface CTAButtonProps {
  color?: string;
}

const defaultCTAButtonProps: CTAButtonProps = {
  color: 'bg-og-black',
}

function CTAButton(propsIn: CTAButtonProps) {
  var props = { ...defaultCTAButtonProps, ...propsIn }
  return (
    // TODO: should scroll down to contact us form
    <Link className='hidden lg:inline-block' href='/'>
      <Button className={`px-6 py-2 font-bold rounded-[12px] border-white border-2 ${props.color} text-og-white`} radius='none'>Get in touch</Button>
    </Link>
  );
}

export { NavBar, CTAButton };