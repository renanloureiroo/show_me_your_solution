import { useSession } from "next-auth/react";
import type { NextPage } from "next";

import Head from "next/head";
import { createClient } from "../../prismic";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [challengers, setChallengers] = useState();
  const fetchData = async () => {
    const client = createClient({});

    const challengers = await client.getAllByType("challenger");
    console.log(challengers);
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
      </div>
    </>
  );
};

export default Home;
