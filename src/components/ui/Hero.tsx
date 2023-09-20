import { useTranslation } from "next-i18next";
import React from "react";
import styles from "@styles/components/ui/Hero.module.scss";
import Particles from "react-tsparticles";
import { linkedCircles } from "src/utils/particleOptions";
import useParticles from "src/utils/useParticles";
import { scrollToAnchorByString } from "src/utils/scrollToAnchor";
import Image from 'next/image';
const Hero: React.FC = () => {
	const { t } = useTranslation("common");
	const { init } = useParticles();

	return (
		<div
			className={styles.container}
			id="hero"
		>
			{/*<Particles
				id="particles1"
				className={styles.background}
				init={init}
				options={linkedCircles}
	/>*/}
			<Image fill alt="bg" src="/images/header2.jpg" style={{objectFit: "contain"}}/>
			<div className={styles.content}>
				
				<h1 className={styles.headerText}>{t("hero.heading")}</h1>
				<p className={styles.description}>{t("hero.text")}</p>
				<div className={styles.buttons}>
					<button onClick={() => scrollToAnchorByString("#order")}>
						{t("hero.contact")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
