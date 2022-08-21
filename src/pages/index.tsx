import { useSession } from "next-auth/react";
import type { NextPage } from "next";

import Head from "next/head";

const Home: NextPage = () => {
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
