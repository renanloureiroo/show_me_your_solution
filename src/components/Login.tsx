import { SignIn } from "phosphor-react"
import { signIn } from "next-auth/react";

export const Login = () =>{
    return(
        <button onClick={() => signIn('github', {callbackUrl: `/challengers`})} className="flex">
            <SignIn className="mr-2" size={22} />
			Login
        </button>
    )
}