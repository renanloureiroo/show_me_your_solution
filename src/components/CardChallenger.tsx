import Image from "next/image";
import Link from "next/link";
import { ImageType } from "../models/Image";

interface CardChallengerProps {
  data: {
    id: string;
    slug: string;
    image: ImageType;
    title: string;
    description: string;
  };
}

export const CardChallenger = ({ data }: CardChallengerProps) => {
  return (
    <Link href={`/challengers/${data.id}`}>
      <div className="rounded-lg sea cursor-pointer shadow-xl border  border-zinc-700 hover:border-green hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex justify-center">
            <Image
              className="w-full z-20 rounded-tl-[66px] rounded-br-[77px] rounded-md"
              src={data.image.url}
              width={data.image.width}
              height={data.image.height}
              alt={data.image.alt}
              layout="fixed"
            />
        </div>
      </div>
    </Link>
  );
};
