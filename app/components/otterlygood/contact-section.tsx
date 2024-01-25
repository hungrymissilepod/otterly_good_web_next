import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

// TODO: add form validation and submit this info to my email address
function ContactSection() {
  return (
    <div className="my-10 mx-auto max-w-7xl">
      <div className="text-og-black text-4xl font-bold py-8 max-w-7xl mx-auto">
        Contact us
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex-1">
          <p className="text-og-black">Email us on at hello@otterlygood.com</p>
          <p className="text-og-black">Follow us on social media...</p>
          {/* TODO: add social links here */}
        </div>
        <div className="flex-1 ">
          <form className="flex flex-col gap-y-4">
            <div>
              <p className="text-og-black">Name*</p>
              <Input type="name" placeholder="John Smith" isRequired radius="none" className="caret-og-black" />
            </div>
            <div>
              <p className="text-og-black">Company Name</p>
              <Input type="company" placeholder="My Company" radius="none" className="caret-og-black" />
            </div>

            <div>
              <p className="text-og-black">Email*</p>
              <Input type="email" placeholder="john.smith@email.com" isRequired radius="none" className="caret-og-black" />
            </div>
            <div>
              <p className="text-og-black">How can we help you?*</p>
              <Textarea

                placeholder="I need help with my website or mobile app..."
                className="caret-og-black"
                isRequired
                radius="none"
              />
            </div>


          </form>

        </div>
      </div>
    </div>
  );
}

export { ContactSection };