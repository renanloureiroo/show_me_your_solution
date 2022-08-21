import Image from "next/image";
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
    <div className="rounded-lg px-2 py-3 bg-gray-800">
      <Image
        src={data.image.url}
        width={data.image.width}
        height={data.image.height}
        alt={data.image.alt}
        layout="fixed"
      />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};
