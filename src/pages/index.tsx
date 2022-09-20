
import Head from "next/head";
import { TeamPicture } from "../components/TeamPic";



export default function Home(){

  return(
    <>
      <Head>
        <title>Show me your solution</title>
      </Head>
    
      <main className="transition-all pt-20 h-screen bg-blur-desktop bg-cover"> {/* Container */}

          <div className="transition-all container mx-auto flex h-screen items-center flex-col xl:flex-row xl:h-5/6">

            <div className="transition-all  flex-1 flex  flex-col justify-center text-center xl:pl-10 xl:w-6/12 xl:text-start xl:block">
              
              <div className="transition-all h-44 flex flex-col">
                <span className="text-lg pb-2 tracking-widest opacity-80 font-roboto font-light">BOAS-VINDAS AO 👋</span>
                <h1 className="text-6xl xl:text-8xl font-bold">Show me you</h1>
                <h2 className="text-5xl xl:text-5xl xl:tracking-[1.1rem]">you solutoin</h2>
              </div>

              <p className="transition-all h-44 px-4 flex font-light items-center text-xl md:text-2xl xl:px-0 xl:text-2xl xl:tracking-widest">
                Bem-vindo(a) ao Show Me Your Solution, 
                aqui você poderá compartilha todo os seu 
                desafios e exercícios com a comunidade 
                da Codar.me
              </p>

            </div>

            <div className="transition-all flex justify-center   md:w-6/12">
              <TeamPicture width={418} height={412} styles='blur-md invert drop-shadow-xl md:filter-none'/>
            </div>
          </div>
          
      </main>

    </>
  )
}
