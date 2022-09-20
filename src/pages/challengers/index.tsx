import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { CircleNotch } from "phosphor-react";
import { useState } from "react";
import { ChallengerType } from "../../models/Challenger";
import { CardChallenger } from "../../components/CardChallenger";
import { prismicClient } from "../../services/prismicClient";

import { Login } from "../../components/ButtoAuthenticate/Login";

interface ChallengersProps {
  challengers: ChallengerType[];
}

const Challengers: NextPage<ChallengersProps> = ({ challengers }) => {
  const [data] = useState<ChallengerType[]>(challengers);
  const { status } = useSession();
  const router = useRouter();

  const session = (status: any) => {
    if (status === "unauthenticated") {
      router.push("/");
    }

    return;
  };
  session(status);

  return (
    <>
      <Head>
        <title>Show Me Your Solution | Home</title>
      </Head>
      {status === "loading" 
			?
				<div className="w-full h-screen flex items-center justify-center">
          <CircleNotch size={142} className="animate-spin" />
        </div>
			
			:  status === "authenticated" ? (
        <main className="transition-all container mx-auto  w-full  h-screen pt-28 text-center">

          <span className="text-3xl font-semibold font-sans">Desafios</span>

          <div className="transition-all border border-bastille-600 rounded-2xl bg-blackOpacity-1  h-[80vh] mb-40">
            <div className=" transition-all flex  space-y-10 justify-center m-10 lg:justify-start flex-wrap lg:space-x-10 lg:space-y-0">
              {data.map((challenger) => (
                <CardChallenger
                  key={challenger.id}
                  data={{
                    ...challenger,
                    image: challenger.thumbnail,
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      ) 				
      : 
        <div className="h-screen pt-24 flex flex-col items-center justify-center">
          <span className="text-2xl">Você não está logado!</span>
          <CircleNotch size={40} className="animate-spin text-white" />
        </div>
      }
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismicClient.getAllByType("challenger");

  const challengers = response.map((challenger) => {
    return {
      id: challenger.id,
      slug: challenger.slugs[0],
      title: challenger.data.title,
      description: challenger.data.description,
      banner: {
        url: challenger.data.banner.url,
        alt: challenger.data.banner.alt,
        width: challenger.data.banner.dimensions.width,
        height: challenger.data.banner.dimensions.height,
      },
      thumbnail: {
        url: challenger.data.thumbnail.url,
        alt: challenger.data.thumbnail.alt,
        ...challenger.data.thumbnail.dimensions,
      },
      challenger_in_course: challenger.data.challenger_in_course,
    } as ChallengerType;
  });
  return {
    props: {
      challengers,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

export default Challengers;
