
import Head from "next/head";
import { TeamPicture } from "../components/TeamPic";

export default function Home(){
  return(
    <>
      <Head>
        <title>Show me your solution</title>
      </Head>
      <main className="pt-40 container h-screen mx-auto flex flex-col text-center  lg:flex-row lg:text-start lg:items-center lg:pt-24">

        <div className="flex-1 space-y-7">

          <span className="text-lg font-roboto font-light text-gray-500 tracking-[0.4rem]">BEM-VINDOS(A) AO👋</span>

          <div className="flex flex-col">
            <span className="font-bold  font-space transition-all text-7xl 2xl:text-9xl">Show me</span>
            <span className="font-light font-space tracking-[0.5em] transition-all xl:text-3xl xl:tracking-[0.33em] 2xl:text-5xl"> Your solution</span>
          </div>

          <div className=" flex items-center p-9 md:p-0 ">
            <p className="font-roboto font-light md:text-2xl lg:text-lg  tracking-[0.1em] leading-tight">
              Bem-vindo(a) Show Me Your Solution, aqui você
              poderar compartilhat todo os seu desafios e 
              exercícios com a comunidade da Codar.me
            </p>
          </div>

        </div>

        <div className=" flex justify-end lg:w-7/12">
            <TeamPicture />
        </div>

      </main>

    </>
  )
}
