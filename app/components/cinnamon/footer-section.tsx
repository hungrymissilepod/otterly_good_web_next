import React from "react";
import { FaFacebook, FaLinkedin, FaDribbble, FaInstagram } from "react-icons/fa6";
import { FaRss } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function FooterSectionCinnamon() {
  return (
    <footer className="w-full bg-black">
      <div className=" pt-16 pb-10 max-w-6xl m-auto">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div className="">
              <h4 className="text-2xl font-bold tracking-wide pb-6">Cinnamon</h4>
              <ul>
                <li className="py-2">Home</li>
                <li className="py-2">Projects</li>
                <li className="py-2">Services</li>
                <li className="py-2">About Us</li>
                <li className="py-2">Blog</li>
              </ul>
            </div>
            <a href="/" className="flex underline decoration-1">hello@otterlygood.com</a>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold pb-12">All software, zero bullshit.</h3>
            <div className="flex gap-12">
              <div>
                <h5 className="pb-1 font-bold text-md">Zagreb</h5>
                <p className="text-sm text-gray-300">Slavonska avenija 6,<br />10000, Zagreb,<br />Croatia +385 95 382 9188</p>
              </div>
              <div>
                <h5 className="pb-1 font-bold text-md">Zagreb</h5>
                <p className="text-sm text-gray-300">Slavonska avenija 6,<br />10000, Zagreb,<br />Croatia +385 95 382 9188</p>
              </div>
              <div>
                <h5 className="pb-1 font-bold text-md">Zagreb</h5>
                <p className="text-sm text-gray-300">Slavonska avenija 6,<br />10000, Zagreb,<br />Croatia +385 95 382 9188</p>
              </div>
            </div>
            <div className="pt-20 flex flex-row justify-start">
              <div className="flex flex-row">
                <div>
                  <p className="py-2">Our newsletter</p>
                  <p className="py-4">Your email</p>
                  <Link href="/">
                    <Button className='bg-indigo-500 px-20 py-3' color="primary">
                      Subscribe
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 divide-y">
          <hr className="h-px bg-gray-600 border-0" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <p className="list-none inline-block pr-6">&#169;	2024 Otterly Good</p>
            <a href="/" className="underline text-gray-300 list-none inline-block pr-6">Privacy Policy</a>
          </div>
          <div className="flex justify-between gap-4">
            <FaLinkedin style={{ "fontSize": "20px" }} />
            <FaDribbble style={{ "fontSize": "20px" }} />
            <IoLogoBehance style={{ "fontSize": "20px" }} />
            <FaInstagram style={{ "fontSize": "20px" }} />
            <FaRss style={{ "fontSize": "20px" }} />
            <FaFacebook style={{ "fontSize": "20px" }} />
          </div>
        </div>
      </div>
    </footer >
  );
}