import { useTranslation } from "next-i18next";
import React from "react";
import styles from "@styles/components/ui/About.module.scss";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

const About: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="about"
		>
			<h2>{t("about.heading")}</h2>
			<div>
				<Panel
					src="/images/about/1.json"
					alt={t("about.1.alt")}
					title={t("about.1.title")}
					text={t("about.1.text")}
				/>
				<Panel
					src="/images/about/2.json"
					alt={t("about.2.alt")}
					title={t("about.2.title")}
					text={t("about.2.text")}
				/>
				<Panel
					src="/images/about/3.json"
					alt={t("about.3.alt")}
					title={t("about.3.title")}
					text={t("about.3.text")}
				/>
			</div>
		</div>
	);
};

const Panel: React.FC<{ src: string; alt: string; title: string; text: string }> = (
	props
) => {
	const { alt, src, text, title } = props;

	return (
		<div className={styles.panel}>
			<div className={styles.image}>
				{/* <Image
					src={src}
					alt={alt}
					fill
				/> */}
				<Player
					src={src}
					autoplay
					loop
				/>
			</div>
			<h3>{title}</h3>
			<text>{text}</text>
		</div>
	);
};

export default About;
