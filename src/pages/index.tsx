
import Head from "next/head";
import { TeamPicture } from "../components/TeamPic";



export default function Home(){

  return(
    <>
      <Head>
        <title>Show me your solution</title>
      </Head>
    
      <main className="pt-20 h-screen"> {/* Container */}

          <div className="container mx-auto flex h-5/6 items-center">

            <div className="w-6/12 h-64 flex-1 ">
              
              <div className="h-44">
                <span className="text-lg pb-2">BOAS-VINDAS AO 👋</span>
                <h1 className="text-7xl font-bold">Show me you</h1>
                <h2 className="text-5xl tracking-[1.4rem]">you solutin</h2>
              </div>

              <p className="h-36 flex font-light items-center text-3xl tracking-wider">
                Bem-vindo(a) ao Show Me Your Solution, 
                aqui você poderá compartilha todo os seu 
                desafios e exercícios com a comunidade 
                da Codar.me
              </p>

            </div>

            <div className="flex justify-center  w-6/12">
              <TeamPicture width={418} height={412}/>
            </div>
          </div>
          
      </main>

    </>
  )
}
