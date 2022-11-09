import { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { ChallengerType } from "../../models/Challenger";
import { prismicClient } from "../../services/prismicClient";
import { useRouter } from "next/router";


interface ChallengerProps {
	challenger: ChallengerType;
}



const Challenger: NextPage<ChallengerProps> = ({ challenger }) => {

	const { status, data } = useSession();

	const router = useRouter();

	const session = (status: any) =>{
		if(status === "unauthenticated"){
			router.push('/')
			return
		}
	}
	session(status)

	return (
		<>

			<Head>
				<title>SYS | {challenger.title}</title>
			</Head>


				<main className="space-y-7 container pt-40 mx-auto min-h-screen px-4 mb-4">

					<header className="">
						<span>Exercício</span>
						<h1 className="text-4xl font-semibold ">{challenger.title}</h1>

						<Link  href={challenger.challenger_in_course.url}>
							<a className="transition-all uppercase text-bastille-100/[0.4] hover:text-bastille-100 hover:underline"  target='_blank'>
								LINK DA AULA
							</a>
						</Link>
					</header>





					<section className="bg-bastille-700/[0.4] h-full p-4 rounded-2xl space-y-7">

						<span className="font-bold underline text-xl">
							Objetivo
						</span>



						<p className="text-lg">
							{challenger.description}
						</p>





					</section>
				</main>

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