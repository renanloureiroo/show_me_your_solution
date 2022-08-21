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
      onClick={handleSignIn}
      disabled={status === "authenticated"}
      className=" group flex items-center gap-2 h-12 px-4 rounded-full font-bold bg-teal-900 hover:bg-teal-700 transition-colors"
    >
      {status === "unauthenticated" ? (
        <>
          <GithubLogo
            size={32}
            weight="fill"
            className="group-hover:text-gray-50"
          />
          Login com Github
        </>
      ) : status === "authenticated" ? (
        <>
          <Avatar source={data.user!.image!} /> <span>{data.user?.name}</span>
          <button
            onClick={handleSignOut}
            className="w-0 opacity-0 transition-all group-hover:w-6 group-hover:opacity-100"
          >
            <SignOut size={24} weight="fill" />
          </button>
        </>
      ) : (
        <CircleNotch size={32} className="animate-spin" />
      )}
    </button>
  );
};
