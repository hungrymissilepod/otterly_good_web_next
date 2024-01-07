import ServiceCardCinnamon from "./service-card";

export default function ServicesSectionCinnamon() {
  return (
    <div className='bg-white w-10/12 m-auto my-20 max-w-6xl'>
      <h2 className="text-black text-5xl font-bold pb-12">Our services</h2>
      <div className="grid grid-cols-3 gap-20">
        <ServiceCardCinnamon
          title="Strategy"
          desc="Product discovery workshops, design sprints, user research, user interviews, and product planning are some techniques we use before jumping to the design itself."
        />
        <ServiceCardCinnamon
          title="Product design"
          desc="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
        />
        <ServiceCardCinnamon
          title="Development"
          desc="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
        />
        <ServiceCardCinnamon
          title="Quality assurance"
          desc="Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automation and manual testing."
        />
        <ServiceCardCinnamon
          title="Marketing & growth"
          desc="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
        />
      </div>
    </div>
  );
}