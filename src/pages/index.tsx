
import Head from "next/head";
import { TeamPicture } from "../components/TeamPic";

export default function Home(){
  return(
    <>
      <Head>
        <title>Show me your solution</title>
      </Head>
      <main className="pt-40 pl-12 mb-10 h-screen mx-auto container flex flex-col text-center  lg:flex-row lg:text-start lg:items-center lg:pt-24">
        
        <div className="flex-1 space-y-7 ">

          <span className="text-base font-roboto font-light text-gray-500 tracking-[0.2rem]">BEM-VINDOS(A) AO👋</span>

          <div className="flex flex-col">
            <span className="font-bold  font-space transition-all text-7xl 2xl:text-9xl">Show me</span>
            <span className="font-light font-space tracking-[0.5em] transition-all xl:text-3xl xl:tracking-[0.33em] 2xl:text-5xl"> Your solution</span>
          </div>

          <div className="transition-all flex items-center p-9 justify-center  md:p-0 lg:justify-start">
            <p className="transition-all w-[500px] font-roboto text-[1.2rem] font-light md:text-2xl lg:text-lg  tracking-[0.1em] leading-tight">
              Bem-vindo(a) Show Me Your Solution, aqui você
              poderar compartilhat todo os seu desafios e 
              exercícios com a comunidade da Codar.me
            </p>
          </div>

        </div>

        <div className="flex items-center justify-center lg:w-6/12">
            <TeamPicture />
        </div>

      </main>

    </>
  )
}
