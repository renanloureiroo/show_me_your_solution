import { useSession, signOut, signIn } from "next-auth/react";
import { CircleNotch, SignOut, SignIn } from "phosphor-react";

import style from "./Style";


export const ButtonAuthenticate = () => {
  const { status, data } = useSession();
  console.log(style.button)
  return (
		<button>
			{status === "unauthenticated" ? (
				<SignIn onClick={() => signIn()} size={32} className={style.button}/>
			) : status === "authenticated" ? (
				<SignOut onClick={() => signOut()} size={32} className={style.button}/>
			) : (
				<CircleNotch size={32} className="animate-spin" />
			)}
		</button>
	);


};
