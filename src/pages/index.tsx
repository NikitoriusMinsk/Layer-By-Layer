import styles from "@/styles/pages/Home.module.scss";
import { GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Hero from "@/components/ui/Hero";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Layer By Layer</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<div className={styles.container}>
				<Hero />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "ru", ["common"])),
			// Will be passed to the page component as props
		},
	};
};

export default Home;
