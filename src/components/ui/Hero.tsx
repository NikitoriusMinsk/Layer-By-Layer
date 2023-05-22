import { useTranslation } from "next-i18next";
import React from "react";
import styles from "@styles/components/ui/Hero.module.scss";
import Particles from "react-tsparticles";
import { linkedCircles } from "src/utils/particleOptions";
import useParticles from "src/utils/useParticles";
import { scrollToAnchorByString } from "src/utils/scrollToAnchor";

const Hero: React.FC = () => {
	const { t } = useTranslation("common");
	const { init } = useParticles();

	return (
		<div
			className={styles.container}
			id="hero"
		>
			<Particles
				id="particles1"
				className={styles.background}
				init={init}
				options={linkedCircles}
			/>
			<div className={styles.content}>
				<h1>{t("hero.heading")}</h1>
				<text>{t("hero.text")}</text>
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
