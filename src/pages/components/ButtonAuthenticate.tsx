import { useSession, signOut, signIn } from "next-auth/react";
import { CircleNotch, SignOut } from "phosphor-react";
import Image from "next/image";

import { Avatar } from "./Avatar";


export const ButtonAuthenticate = () => {
  const { status, data } = useSession();
  const handleSignOut = () => {
    signOut();
  };

  const handleSignIn = () => {
    signIn();
  };
  return (
    <button
      onClick={
        status == "unauthenticated"
          ? handleSignIn
          : status === "authenticated"
          ? handleSignOut
          : () => {}
      }
      className="w-24
        flex 
        items-center
        pt-3
    ">
      {status === "unauthenticated" ? (
        <>

            <Image
              src="/github-strock-white.svg"
              width={29}
              height={29}
              alt="Logo GitHub"
            />
            <span
            className="
              text-xl
              font-roboto
              leading-4
            " 
            >
              Login
            </span>
  
        </>
      ) : status === "authenticated" ? (
        <>
          <Avatar source={data.user!.image!} /> <span>{data.user?.name}</span>
          <span className="block w-0 opacity-0 transition-all group-hover:w-6 group-hover:opacity-100">
            <SignOut size={24} weight="fill" />
          </span>
        </>
      ) : (
        <CircleNotch size={32} className="animate-spin" />
      )}
    </button>
  );
};
