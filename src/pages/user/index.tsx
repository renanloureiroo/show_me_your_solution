import { useSession } from "next-auth/react";
import { Avatar } from "../../components/Avatar";
import { CircleNotch, SignOut, SignIn } from "phosphor-react";
import { useRouter } from "next/router";

const User = () => {
	const { data: session, status } = useSession();


  const router = useRouter();
  const sessionPush = (status: string) => {
    if (status === "unauthenticated") {
      router.push("/")
    }
    return
  };
  sessionPush(status);


	return (
		<main className="pt-36 h-screen  container mx-auto flex flex-col  items-center lg:flex-row lg:items-start mb-10">
			{status === "loading" 
			?
				<div className="w-full h-screen flex items-center justify-center">
          <CircleNotch size={142} className="animate-spin" />
        </div>
			
			:  status === "authenticated" 
			?<>
				<div className="flex flex-col p-10 bg-bastille-800 text-center w-80 h-96 rounded-lg shadow-lg mb-10 lg:mr-10">
					<Avatar width={150} height={150} size={150} />

					<span className="font-semibold text-2xl">
						{session?.user?.name}
					</span>
				</div>

					<div className="bg-blackOpacity-1 h-[600px] w-80 md:flex-1">a</div>
			</>

			:        
			<div className="flex flex-col w-full h-2/4 items-center justify-center">
				<span className="text-2xl">Você não está logado!</span>
				<CircleNotch size={40} className="animate-spin text-white" />
			</div>
		
		}
		</main>
	);
};

export default User;
