import Link from 'next/link';
import { Button } from "@nextui-org/button";

function NavBar() {
  return (
    <nav className="bg-og-black sticky top-0 z-10">
      <div className="mx-auto max-w-7xl flex flex-row justify-between items-center py-4 ">
        Logo here
        <ul className="flex flex-row gap-x-8">
          <li className="text-og-orange">Case Studies</li>
          <li>Case Studies</li>
          <li>Case Studies</li>
        </ul>
        <CTAButton></CTAButton>
      </div>
    </nav>
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
      <Button className={`px-6 py-2 font-bold border-white border-2 ${props.color} text-og-white`} radius='none'>Get in touch</Button>
    </Link>
  );
}

export { NavBar, CTAButton };