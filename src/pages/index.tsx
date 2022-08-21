import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { createClient } from "../../prismic";
import { useState } from "react";
import { ChallengerType } from "../models/Challenger";
import { CardChallenger } from "./components/CardChallenger";

interface HomeProps {
  challengers: ChallengerType[];
}

const Home: NextPage<HomeProps> = ({ challengers }) => {
  const [data] = useState<ChallengerType[]>(challengers);

  return (
    <>
      <Head>
        <title>Show Me Your Solution | Home</title>
      </Head>
      <div>
        <h1>Show me your solution</h1>
        <main className="flex w-full max-w-5xl mx-auto">
          {data.map((challenger) => (
            <CardChallenger
              key={challenger.id}
              data={{
                ...challenger,
                image: challenger.thumbnail,
              }}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({});

  const response = await client.getAllByType("challenger");

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
  };
};

export default Home;
