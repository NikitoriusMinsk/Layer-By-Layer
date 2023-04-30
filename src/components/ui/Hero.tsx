import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import styles from "@styles/components/ui/Hero.module.scss";

const Hero: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="hero"
		>
			<Image
				src={"/images/hero_bg.png"}
				fill
				alt=""
			/>
			<div>
				<h1>{t("hero.heading")}</h1>
				<text>{t("hero.text")}</text>
				<div className={styles.buttons}>
					<button>{t("hero.quote")}</button>
					<button>{t("hero.contact")}</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
