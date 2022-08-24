
import Head from "next/head";
import Image from "next/image"

export default function Home(){
  return(
    <>
      <Head>

      </Head>
      <div className="w-full h-screen bg-blur-desktop bg-no-repeat space-y-20">
     
        <div className="w-full">
          <div className="flex flex-col justify-center items-center text-center space-y-2">
            <span className="font-roboto tracking-[0.4rem]  font-normal text-xs">BEM-VINDOS(A) AO👋</span>
            <div className="flex flex-col">
              <h1 className="font-space font-bold tracking-widest text-6xl">Show me</h1>
              <h3 className="font-roboto font-normal tracking-[0.39rem] text-2xl leading-3text-white">Your solution</h3>
            </div>
            <div className="w-[400px] h-44 flex items-center">
                <p className="px-4 tracking-[0.16rem]  font-roboto font-normal text-sm">
                  No Show Me Your Solution, 
                  ficou mais facil de você 
                  compartilhar todos os seu 
                  desafios e exercícios 
                  com a comunidade da CodarMe.
                </p>
            </div>
          </div>
          <div className="w-full flex justify-center  ">
            <Image src="/team-home-mobile.svg" alt="Team" width={414} height={394} />
          </div>
        </div>
        <footer className="h-14 bg-bastille-900 flex items-center justify-center shadow-lg shadow-cyan-500/50 ">
            <Image src='/codarme-commuty-logo.svg' alt="Logo codarme" width={100} height={40}/>
        </footer>
      </div>


    </>
  )
}
