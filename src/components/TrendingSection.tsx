import Image from 'next/image';
import Button from './Button.tsx';

type TrendingSectionProps = {
  src?: string | null;
  title: string;
};

export default function TrendingSection({ src, title }: TrendingSectionProps) {
  return (
    <div className="rounded-xl w-[36%] text-black mt-12 border mx-6 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative">
        <div style={{ paddingBottom: '75%'}}>
          <Image
            src={src}
            alt="Section image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-6 bg-gray-200">
        <p className="text-xl font-bold mb-2">{title}</p>
        <p className="text-sm mb-8 text-gray-800">Delivery in 24 hours</p>
        <Button black>Shop now</Button>
      </div>
    </div>
  );
}
