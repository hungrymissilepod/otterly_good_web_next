import { CaseStudyCard, CaseStudyCardTag } from "./case-study-card";

export default function CaseStudySectionCinnamon() {
  return (
    <div className='bg-white w-10/12 m-auto my-20 max-w-6xl'>
      <CaseStudyCard
        title='Engage & Decide'
        desc='Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.'
        tags={[
          <CaseStudyCardTag key='1' title='PRODUCT DESIGN' />,
          <CaseStudyCardTag key='2' title='WEB DEVELOPMENT' />,
        ]}
        image='/apple.png'
        imageAlt='Apple'
        color="purple"
      />
      <CaseStudyCard
        title='Optimize prices to maximize revenue'
        desc='Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue.'
        tags={[
          <CaseStudyCardTag key='1' title='PRODUCT DESIGN' />,
          <CaseStudyCardTag key='2' title='QUALITY ASSURANCE' />,
        ]}
        image='/kiwi.png'
        imageAlt='Kiwi'
        color="green"
      />
    </div>
  );
}