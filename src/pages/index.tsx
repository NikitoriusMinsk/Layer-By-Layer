import styles from "@styles/pages/Home.module.scss";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
	About,
	Algorithm,
	ContactMap,
	FAQ,
	FDMPrinting,
	Hero,
	Sample,
	Services,
} from "@components/blocks";
import { Meta } from "@components/layout/Meta";
import { useContext } from "react";
import { ThemeContext } from "./_app";
import Printer from "@components/blocks/Printer";

const Home: NextPage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Head>
				<title>{"Layer By Layer"}</title>
				<Meta />
				<link
					rel="icon"
					href={`/images/logo-${theme}.svg`}
				/>
			</Head>
			<div className={styles.container}>
				<Hero />
				<About />
				<FDMPrinting />
				<Printer />
				<Services />
				<Sample />
				<Algorithm />
				<FAQ />
				<ContactMap />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "default", [
				"common",
				"header",
				"footer",
			])),
			// Will be passed to the page component as props
		},
		revalidate: 600,
	};
};

export default Home;
