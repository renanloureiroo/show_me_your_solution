import { SignOut } from "phosphor-react"
import { signOut } from "next-auth/react";


export  const Logout = () =>{
    return(
        <button onClick={() => signOut({callbackUrl: `/`})} className="flex">
            <SignOut className="mr-2" size={22} />
            Sair
        </button>
    )
}