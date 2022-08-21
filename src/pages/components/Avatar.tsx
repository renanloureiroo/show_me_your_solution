import Image from "next/image";
interface AvatarProps {
  source?: string;
}

export const Avatar = ({ source }: AvatarProps) => {
  return (
    <div className="h-8 w-8 flex items-center justify-center rounded-full  overflow-hidden">
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
