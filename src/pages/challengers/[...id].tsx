import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChallengerType } from "../../models/Challenger";
import { prismicClient } from "../../services/prismicClient";

interface ChallengerProps {
	challenger: ChallengerType;
}

const Challenger: NextPage<ChallengerProps> = ({ challenger }) => {
	return (
		<>
			<Head>
				<title>SYS | {challenger.title}</title>
			</Head>
			<div className=" container pt-40 mx-auto h-screen">
				<main className="space-y-4">
					<header className="space-y-6">
						<h1 className="text-7xl font-semibold">{challenger.title}</h1>

						<p className="text-lg">{challenger.description}</p>

						<Link href={challenger.challenger_in_course.url}>
							<a target="_blank" className="font-roboto font-light transition-all hover:underline hover:text-green">
								Link para o vídeo do desafio
							</a>
						</Link>
					</header>

					<section></section>
				</main>
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
