import { CTAButton } from "./navbar";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'], weight: ['900'] })

function Footer() {
  return (
    <div className="w-full bg-og-black container mx-auto py-8">
      <div className="block lg:flex-row lg:flex lg:justify-between">
        <div>
          <div className="text-og-white text-4xl font-bold ">
            Like what you see?
          </div>
          <div className="py-8">
            <CTAButton />
          </div>
        </div>

        <div className="flex flex-row justify-between lg:gap-x-40 py-4 lg:py-0">
          <ul className="text-og-white text-sm pt-2">
            <li className="mb-1">Home</li>
            <li className="mb-1">Case Studies</li>
            <li className="mb-1">Services</li>
            <li className="mb-1">Blog</li>
            <li className="mb-1">About</li>
            <li className="mb-1">Contact Us</li>
          </ul>
          <ul className="text-og-white text-sm pt-2">
            <li className="mb-1">X</li>
            <li className="mb-1">Instagram</li>
            <li className="mb-1">Linkedin</li>
            <li className="mb-1">Github</li>
          </ul>
        </div>
      </div>

      <div className="py-10 lg:py-20">
        <p className="text-og-white font-bold leading-8 text-xl">Drop us a line: <br /><span className="font-normal underline">hello@otterlygood.com</span></p>
      </div>

      <div className="flex flex-row justify-between text-og-white text-sm">
        <p>Made in Manchester, UK</p>
        <p>©2024 Legal</p>
      </div>

      <p className={`${redHatDisplay.className} pt-4 text-center text-[10.6vw] leading-none after:inline-block after:w-full after:content-none`}>OTTERLY GOOD<span className="text-og-orange">.</span></p>
    </div>
  );
}

export { Footer };