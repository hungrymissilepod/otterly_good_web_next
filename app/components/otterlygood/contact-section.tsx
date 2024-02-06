import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { CTAButton } from "./navbar";

// TODO: add form validation and submit this info to my email address
function ContactSection() {
  return (
    <div className='bg-og-cream'>
      <div className='mx-auto max-w-7xl container py-20'>
        <h2 className='text-og-black font-bold text-2xl'>CONTACT US</h2>
        <div className="grid grid-cols-10 justify-between gap-4 pt-20 pb-10 ">
          <div className="flex flex-col col-span-3 text-og-black leading-8 text-xl justify-between my-10">
            <p>Looking for advice?
              <br />
              <br />
              Complete the form and a member of our team will get back to you within 24 hours to talk through your ideas with you and help you turn them into reality!
            </p>
            <p>
              Alternatively, feel free to drop us line!
              <br />
              <br />
              Email: hello@otterlygood.com
            </p>
          </div>

          <div className="col-start-6 col-span-5">
            <form className="flex flex-col gap-y-4">
              <div className="py-2">
                <p className="text-og-black font-bold text-lg">Full Name*</p>
                <Input type="name" placeholder="e.g. Bill Gates" isRequired radius="none" variant="underlined" classNames={{
                  input: ["placeholder:text-og-light-brown", "placeholder:text-lg", "text-lg", "text-og-black"]
                }} className="caret-og-black" />
              </div>

              <div className="py-2">
                <p className="text-og-black font-bold text-lg">Email Address*</p>
                <Input type="name" placeholder="e.g. bill@microsoft.com" isRequired radius="none" variant="underlined" classNames={{
                  input: ["placeholder:text-og-light-brown", "placeholder:text-lg", "text-lg", "text-og-black"]
                }} className="caret-og-black" />
              </div>

              <div className="py-2">
                <p className="text-og-black font-bold text-lg">Company Name</p>
                <Input type="name" placeholder="e.g. Microsoft" isRequired radius="none" variant="underlined" classNames={{
                  input: ["placeholder:text-og-light-brown", "placeholder:text-lg", "text-lg", "text-og-black"]
                }} className="caret-og-black" />
              </div>

              <div className="py-2">
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

              <div className="self-center">
                <CTAButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ContactSection };