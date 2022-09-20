import Image from "next/image";
import Link from "next/link";
import { ImageType } from "../../models/Image";

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
      <div className="rounded-lg bg-green cursor-pointer shadow-xl border  border-zinc-700 hover:border-green hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex justify-center">
            <Image
              className="z-20  rounded-tl-[66px] rounded-br-[77px] rounded-md"
              src={data.image.url}
              width={350}
              height={200}
              alt={data.image.alt}
              layout="fixed"
            />
        </div>
      </div>
    </Link>
  );
};
