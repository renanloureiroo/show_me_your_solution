import { useSession, signOut, signIn } from "next-auth/react";
import { CircleNotch, SignOut } from "phosphor-react";
import Image from "next/image";

import {Arrow} from './Arrow';
import { Avatar } from "./Avatar";


export const ButtonAuthenticate = () => {
  const { status, data } = useSession();
  const handleSignOut = () => {
    signOut();
  };

  const handleSignIn = () => {
    signIn('github');
  };
  return (
   <div className="flex ">
      <Avatar source={data?.user!.image!} />
      <button
      className="ml-2"
        onClick={
          status == "unauthenticated"
            ? handleSignIn
            : status === "authenticated"
            ? handleSignOut
            : () => {}
        }>
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
            
            <span className="block w-6 opacity-10  transition-all hover:opacity-100">
              <SignOut size={20} weight="fill" />
            </span>


          </>
        ) : (
          <CircleNotch size={32} className="animate-spin" />
        )}
      </button>
   
   </div>
  );
};
