import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import styles from "@styles/components/ui/Hero.module.scss";

const Hero: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={styles.container}>
			<Image
				src={"/images/hero_bg.png"}
				fill
				alt=""
			/>
			<div>
				<h2>{t("hero.heading")}</h2>
				<span>{t("hero.text")}</span>
				<div className={styles.buttons}>
					<button>{t("hero.quote")}</button>
					<button>{t("hero.contact")}</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
