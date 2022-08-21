import { useSession, signOut, signIn } from "next-auth/react";
import { CircleNotch, GithubLogo, SignOut } from "phosphor-react";

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
      className="
            group 
            flex 
            items-center 
            gap-2 
            h-12 
            px-4 
            rounded-full 
            cursor-pointer 
            font-bold 
            text-bastille-900
            bg-gradient-to-r from-[#00b5d4] via-[#00a8c5] to-blue
            hover:text-white 
            transition-colors
        ">
      {status === "unauthenticated" ? (
        <>
          Login
        </>
      )  : status === "authenticated" ? (
        <>
          <Avatar source={data.user!.image!} /> <span>{data.user?.name}</span>
          <SignOut size={24} weight="fill"  />
        </>
      ) : (
        <CircleNotch size={32} className="animate-spin" />
      )}
    </button>
  );
};
