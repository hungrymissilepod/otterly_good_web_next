import Image from 'next/image';

export default function ServiceCardCinnamon({ title, desc }: { title: string, desc: string }) {
  return (
    <div className='pb-10'>
      <Image
        className=''
        src='/quotes.png'
        alt='Quotation Marks'
        width='40'
        height='40'
      />
      <h3 className="text-black font-bold text-2xl py-6">{title}</h3>
      <p className="text-black leading-6">{desc}</p>
    </div>
  );
}