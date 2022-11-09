
import React from 'react'
import { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { ChallengerType } from "../../models/Challenger";
import { prismicClient } from "../../services/prismicClient";
import { useRouter } from "next/router";
import { ArrowLeft, DiscordLogo, Play } from "phosphor-react";


import { Loading } from "../../components/Loading"


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
				<title>SMYS | {challenger.title}</title>
			</Head>

			{	status === 'loading' ?
				<Loading size={60} />
			:

			status === 'authenticated' &&
			(

				<main className="space-y-7 container pt-28 mx-auto min-h-screen px-4 mb-4">

					<div>
						<button onClick={() => router.push("/challengers")} className='h-10 hover:text-green'>
							<ArrowLeft size={32} />
						</button>
					</div>
					<header className="bg-bastille-500/[0.2] rounded-xl p-4 ">

						<span>Exercício</span>

						<h1 className="text-4xl font-semibold ">{challenger.title}</h1>



					</header>

					<section className="bg-bastille-700/[0.4]   p-4 rounded-2xl space-y-7">

						<span className="font-bold underline text-xl">
							Objetivo
						</span>



						<div className='flex flex-col gap-3 xl:flex-row'>
							<p className="text-lg bg-bastille-600/[0.5] rounded-xl p-5">
								{challenger.description}
							</p>

						</div>


						<div className="flex w-full flex-col justify-center  items-center  gap-5  font-sans xl:flex-row  font-bold bg-bastille-400/[0.1] rounded-xl p-5">
							<Link href='https:discordapp.com/channels/697175475377930241/982323776593203210'>
								<a
									target='_blank'
									className="transition-all p-2  text-xl text-bastille-100/[0.2] gap-3  border border-bastille-400 flex  xl:max-w-[30%] items-center justify-center hover:text-green hover:border-green rounded-xl w-full">

									<DiscordLogo size={30} />

									SHOW ME YOUR SOLUTION

								</a>
							</Link>


							<Link  href={challenger.challenger_in_course.url}>
								<a

									target='_blank'
									className="transition-all p-2  text-xl text-bastille-100/[0.2] gap-3 border border-bastille-400 flex xl:max-w-[30%] items-center justify-center hover:text-green hover:border-green rounded-xl w-full">

									<Play size={30} />

									LINK DA AULA

								</a>
							</Link>
						</div>

					</section>

				</main>

			)

			}





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