function PricingSection() {
  return (
    <div className="my-20 py-20 mx-auto max-w-7xl">
      <div className="text-og-black text-4xl font-bold py-8 ">
        Pricing
      </div>
      <h2 className="text-og-black text-3xl text-center">Launch time sale!</h2>

      <div className="flex flex-row justify-between">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="border-2 border-og-black p-4">
      <div className="flex flex-row gap-x-2">
        <div>
          <h3 className="text-og-black font-bold text-xl">Website</h3>
          <p className="text-og-black">Design and build an <br /> amazing website for your business</p>
        </div>
        <div className="text-og-black">Image here</div>
      </div>
      {/* prices */}
      <div className="flex flex-row items-end gap-4">
        <div className="flex flex-col">
          <p className="text-gray-400">From</p>
          <div className="">
            <p className="text-og-black line-through">£999</p>
          </div>
        </div>
        <div>
          <p className="text-og-orange">£499</p>
        </div>
      </div>
      <hr className="border-black"></hr>
      <p className="text-og-black font-bold">What&apos;s included:</p>
      <ul className="text-og-black">
        <li>Feature 1</li>
        <li>Feature 1</li>
        <li>Feature 1</li>
      </ul>
      <p className="text-og-black font-bold">Delivered in 2-4 weeks!</p>
    </div>
  );
}

export { PricingSection };