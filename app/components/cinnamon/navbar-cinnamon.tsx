'use client'
import Image from 'next/image';
import React from "react";
import { Button } from "@nextui-org/button";
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";

function NavBarCinnamon() {

  const onClick = (e: any) => {
    console.log('click');
    // setDarkMode(e.target.value ? "light" : "dark");
  };
  return (
    <nav className='flex justify-between items-center mx-auto max-w-6xl px-4 xl:px-0 py-6 bg-white z-50 sticky top-0'>
      <Image
        className=' inline-block dark:drop-shadow-[0_0_0.3rem_#ffffff70] z-50'
        src='/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />
      <ul className="">
        <NavBarLink title='Projects' href='/projects' />
        <NavBarLink title='Services' href='/services' />
        <NavBarLink title='About Us' href='/about' />
        <NavBarLink title='Blog' href='/blog' />
        <div className='list-none inline-block px-2'></div>
        <Link href="/">
          <Button className='hidden lg:inline-block bg-indigo-500 px-5 py-2' color="primary" >
            Let&#39;s collaborate
          </Button>
        </Link>
        <Link className='align-middle inline-block lg:hidden' href={''} onClick={onClick}>
          <CiMenuBurger style={{ "fontSize": "30px", "color": "black" }} />
        </Link>
      </ul>
    </nav>
  );
}

function NavBarLink({ title, href }: { title: string, href: string }) {
  return (
    <li className="list-none hidden lg:inline-block"><a className="px-6 text-black font-medium hover:text-indigo-500" href={href}>{title}</a></li>
  );
}

export { NavBarCinnamon, NavBarLink };