
import Head from "next/head";
import { TeamPicture } from "../components/TeamPic";


const styles = {
  main: 'transition-all pt-32 h-screen bg-blur-desktop bg-cover',
  container: 'transition-all container mx-auto flex h-screen items-center flex-col xl:flex-row xl:h-5/6',
  contents: 'transition-all  flex-1 flex  flex-col justify-center text-center xl:pl-10 xl:w-6/12 xl:text-start xl:block',

  contaienrTitle: 'transition-all h-44 flex flex-col',
  headerTitle: 'text-lg pb-2 tracking-widest opacity-80 font-roboto font-light',
  title: 'text-6xl 2xl:text-8xl font-bold',
  subTitle: 'font-roboto font-light text-4xl 2xl:text-5xl xl:tracking-[1.1rem]',
  text: 'transition-all h-44 px-4 flex font-light items-center text-xl md:text-2xl xl:px-0 xl:text-2xl xl:tracking-widest',

  containerPicture: 'transition-all flex justify-center md:w-6/12',
}

export default function Home(){

  return(
    <>
      <Head>
        <title>Show me your solution</title>
      </Head>

      <main className={styles.main}>

          <div className={styles.container}>

            <div className={styles.contents}>

              <div className={styles.contaienrTitle}>
                <span className={styles.headerTitle}>BOAS-VINDAS AO 👋</span>
                <h1 className={styles.title}>Show me you</h1>
                <h2 className={styles.subTitle}>you solutoin</h2>
              </div>

              <p className={styles.text}>
                Bem-vindo(a) ao Show Me Your Solution,
                aqui você poderá compartilha todo os seu
                desafios e exercícios com a comunidade
                da Codar.me
              </p>

            </div>

            <div className={styles.containerPicture}>
              <TeamPicture width={418} height={412} />
            </div>
          </div>

      </main>

    </>
  )
}
