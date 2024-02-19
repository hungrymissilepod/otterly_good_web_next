import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Link from 'next/link';
import { Button } from "@nextui-org/button";

// TODO: add form validation and submit this info to my email address
function ContactSection() {
  return (
    <div className="bg-og-cream">
      <div className='mx-auto container pt-20'>
        <h2 className='text-og-black font-bold text-2xl'>CONTACT US</h2>
        <div className="block lg:grid lg:grid-cols-10 lg:justify-between lg:gap-4 pt-10 lg:pt-20 pb-10">
          <div className="text-og-black leading-8 text-xl lg:col-span-3">
            <p>Looking for advice?
              <br />
              <br />
              Complete the form and a member of our team will get back to you within 24 hours to talk through your ideas with you and help you turn them into reality!
            </p>
            <div className="hidden lg:block">
              <br />
              <br />
              <p>
                Alternatively, feel free to drop us line!
                <br />
              </p>
            </div>

            <div>
              <br />
              <p>Email: <span className="underline">hello@otterlygood.com</span></p>
            </div>

          </div>

          <div className="lg:col-start-6 lg:col-span-5 pt-12 lg:pt-0">
            <form className="flex flex-col gap-y-8">
              <div className="">
                <p className="text-og-black font-bold text-lg">Full Name*</p>
                <Input type="name" placeholder="e.g. Bill Gates" isRequired radius="none" variant="underlined" classNames={{
                  input: ["placeholder:text-og-light-brown", "placeholder:text-lg", "text-lg", "text-og-black"]
                }} className="caret-og-black" />
              </div>

              <div className="">
                <p className="text-og-black font-bold text-lg">Email Address*</p>
                <Input type="name" placeholder="e.g. bill@microsoft.com" isRequired radius="none" variant="underlined" classNames={{
                  input: ["placeholder:text-og-light-brown", "placeholder:text-lg", "text-lg", "text-og-black"]
                }} className="caret-og-black" />
              </div>

              <div className="">
                <p className="text-og-black font-bold text-lg">Company Name</p>
                <Input type="name" placeholder="e.g. Microsoft" isRequired radius="none" variant="underlined" classNames={{
                  input: ["placeholder:text-og-light-brown", "placeholder:text-lg", "text-lg", "text-og-black"]
                }} className="caret-og-black" />
              </div>

              <div className="">
                <p className="text-og-black font-bold text-lg">Message*</p>
                <Textarea
                  placeholder="I need help with my website or mobile app..."
                  className="caret-og-black"
                  isRequired
                  radius="none"
                  variant="underlined"
                  classNames={{
                    input: ["placeholder:text-og-light-brown", "placeholder:text-lg", "text-lg", "text-og-black"]
                  }}
                />
              </div>

              <Link className='lg:inline-block py-8' href='/'>
                <Button className={`px-8 py-5 rounded-[8px] bg-og-black text-og-white font-bold text-md font-sans w-full lg:w-auto`} radius='none'>Get in touch</Button>
              </Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ContactSection };