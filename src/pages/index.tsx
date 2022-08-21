import type { NextPage } from "next";
import Head from "next/head";
import { createClient } from "../../prismic";
import { useEffect, useState } from "react";
import { ChallengerType } from "../models/Challenger";
import { CardChallenger } from "./components/CardChallenger";

const Home: NextPage = () => {
  const [challengers, setChallengers] = useState<ChallengerType[]>(
    [] as ChallengerType[]
  );
  const fetchData = async () => {
    const client = createClient({});

    const challengers = await client.getAllByType("challenger");
    console.log(challengers);
    const challengersFormatted = challengers.map((challenger) => {
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
      } as Challenger;
    });

    setChallengers(challengersFormatted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Show Me Your Solution | Home</title>
      </Head>
      <div>
        <h1>Show me your solution</h1>
        <main className="flex w-full max-w-5xl mx-auto">
          {challengers.map((item) => (
            <CardChallenger
              key={item.id}
              data={{
                ...item,
                image: item.thumbnail,
              }}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
