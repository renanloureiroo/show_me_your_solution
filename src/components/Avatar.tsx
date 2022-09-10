import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
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
    </>
  )
};
