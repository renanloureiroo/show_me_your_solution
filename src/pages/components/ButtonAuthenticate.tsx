import { useSession, signOut, signIn } from "next-auth/react";
import { CircleNotch, SignOut } from "phosphor-react";

import {GitHubLogo} from "./Github";

import { Avatar } from "./Avatar";



export const ButtonAuthenticate = () => {
  const ButtonStyle =  "flex flex-row  items-center justify-center bg-zinc-900 border border-gray-600 w-24 h-10 rounded-xl transition-all duration-100	 hover:bg-zinc-700"

  const { status, data } = useSession();
  const handleSignOut = () => {
    signOut();
  };

  const handleSignIn = () => {
    signIn('github');
  };
  return (
   <div className="flex">

      {status === "unauthenticated" 
      ?

        <>
          <button className={ButtonStyle} onClick={handleSignIn}>
              <GitHubLogo   />
              <span className="font-space font-lg text-white">Login</span>
          </button>
        </>

      : status === 'authenticated' 
      ?

        <div className="flex items-center">
          <Avatar source={data?.user!.image!}/>
          <button onClick={handleSignOut}>
            <SignOut weight="fill" size={20} className="opacity-20 transition-all  hover:opacity-80" />
          </button>
        </div>

      :

        <CircleNotch size={32} className="animate-spin" />

      }
   </div>
  );
};
