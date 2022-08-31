import Image from "next/image";
interface AvatarProps {
  source?: string;
}

export const Avatar = ({ source }: AvatarProps) => {
  return (
    <div className="h-8 w-8 m-2 flex items-center justify-center rounded-full  overflow-hidden border border-gray-700">
      <Image
        className="rounded-full overflow-hidden"
        src={source!}
        alt="Avatar"
        width={50}
        height={50}
        layout="intrinsic"
      />
    </div>
  );
};
