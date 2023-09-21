import styles from "@styles/pages/Home.module.scss";
import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@components/ui/Hero";
import About from "@components/ui/About";
import FDMPrinting from "@components/ui/FDMPrinting";
import Services from "@components/ui/Services";
import Sample from "@components/ui/Sample";
import Algorithm from "@components/ui/Algorithm";
import Contact from "@components/ui/Contact";
import { Meta } from "@components/layout/Meta";
import { useContext } from "react";
import { ThemeContext } from "./_app";
import Contacts from "@components/ui/ContactsMap";
// import Partnership from "@components/ui/Partnership";

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
				<Services />
				<Sample />
				<Algorithm />
				{/* <Partnership /> */}
				{/* <Contact /> */}
				<Contacts />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "ru", [
				"common",
				"header",
				"footer",
				"meta",
			])),
			// Will be passed to the page component as props
		},
		revalidate: 600,
	};
};

export default Home;
