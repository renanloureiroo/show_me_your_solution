import { SignIn } from "phosphor-react"
import { signIn } from "next-auth/react";

export const Login = () =>{
    return(
        <button onClick={() => signIn('github', {callbackUrl: `/challengers`})} className="transition-all flex w-24 h-10 justify-center items-center hover:bg-blackOpacity-2 active:bg-blackOpacity-1">
            <SignIn className="mr-2" size={22} />
			Login
        </button>
    )
}