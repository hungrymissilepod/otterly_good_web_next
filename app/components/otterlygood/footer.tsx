import { CTAButton } from "./navbar";


function Footer() {
  return (
    <div className="mx-auto bg-og-black">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="text-og-white text-4xl font-bold py-8 ">
            Like what you see?
          </div>
          <CTAButton />
        </div>

        <div className="flex flex-row justify-between my-12">
          <div>
            <p>Drop us a line:</p>
            <p>hello@otterlygood</p>
          </div>
          <div className="flex flex-row gap-x-8">
            <div>
              <p>LinkedIn</p>
              <p>YouTube</p>
            </div>
            <div>
              <p>LinkedIn</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>

        {/* This should expand whole width of screen */}
        <h2 className="text-9xl text-center font-[900]" >OTTERLY GOOD<span className="text-og-orange">.</span></h2>

        <div className="flex flex-row justify-between py-8">
          <div className="flex flex-row gap-x-16">
            <p>Made in Manchester, UK</p>
            <p>Copyright 2024</p>
          </div>
          <div className="flex flex-row gap-x-16">
            <p>Privacy Policy</p>
            <p>Legal</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export { Footer };