
import Head from "next/head";
import { TeamPicture } from "../components/TeamPic";
import { styles } from '../styles/home'


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
