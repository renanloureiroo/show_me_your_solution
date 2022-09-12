import { SignOut } from "phosphor-react"
import { signOut } from "next-auth/react";


export  const Logout = () =>{
    return(
        <button onClick={() => signOut({callbackUrl: `/`})} className="transition-all flex w-full h-10 items-center pl-5 hover:bg-blackOpacity-2">
            <SignOut className="mr-2" size={22} />
            Sair
        </button>
    )
}