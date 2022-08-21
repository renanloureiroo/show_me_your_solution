import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ChallengerType } from "../../models/Challenger";
import { prismicClient } from "../../services/prismicClient";

interface ChallengerProps {
  challenger: ChallengerType;
}

const Challenger: NextPage<ChallengerProps> = ({ challenger }) => {
  return (
    <>
      <Head>
        <title>Challengers | </title>
      </Head>
      <div className="space-y-8">
        <Image
          src={challenger.banner.url}
          width={challenger.banner.width}
          height={challenger.banner.height}
          alt={challenger.banner.alt}
          layout="responsive"
          className="shadow-md"
        />
        <main className="w-full max-w-5xl mx-auto space-y-4">
          <h1 className="text-4xl">{challenger.title}</h1>

          <p className="">{challenger.description}</p>

          <section></section>
        </main>
        |
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const [id] = params!.id as string[];

  const response = await prismicClient.getByID(id);

  const challenger = {
    id: response.id,
    slug: response.slugs[0],
    title: response.data.title,
    description: response.data.description,
    banner: {
      url: response.data.banner.url,
      alt: response.data.banner.alt,
      width: response.data.banner.dimensions.width,
      height: response.data.banner.dimensions.height,
    },
    thumbnail: {
      url: response.data.thumbnail.url,
      alt: response.data.thumbnail.alt,
      ...response.data.thumbnail.dimensions,
    },
    challenger_in_course: response.data.challenger_in_course,
  } as ChallengerType;

  return {
    props: {
      challenger,
    },
  };
};

export default Challenger;
