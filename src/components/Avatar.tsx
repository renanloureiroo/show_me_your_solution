import Image from "next/image";
import { useSession } from "next-auth/react";
import { UserCircle } from "phosphor-react";
interface AvatarProps {
  width?: number;
  height?: number;
}

export const Avatar = ({ width, height }: AvatarProps) => {

  const { status, data } = useSession();

  if(status === "authenticated"){
    return (
      <div className="h-8 w-8 flex items-center justify-center rounded-full  overflow-hidden">
        <Image
          className="rounded-full overflow-hidden"
          src={data?.user?.image!}
          alt="Avatar"
          width={width!}
          height={height!}
          layout="intrinsic"
        />
      </div>
    )
  }

  return(
    <>
      <UserCircle className="text-white" size={32} weight="thin" />
    </>
  )
};
