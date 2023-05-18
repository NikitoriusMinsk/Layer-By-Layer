import { useTranslation } from "next-i18next";
import React, { useCallback, useContext } from "react";
import styles from "@styles/components/ui/Hero.module.scss";
import Particles from "react-tsparticles";
import { linkedCircles } from "src/utils/particleOptions";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { env } from "src/env.mjs";

const Hero: React.FC = () => {
	const { t } = useTranslation("common");
	const particlesInit = useCallback(async (engine: Engine) => {
		env.NEXT_PUBLIC_NODE_ENV === "development" && console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	return (
		<div
			className={styles.container}
			id="hero"
		>
			<Particles
				id="particles1"
				className={styles.background}
				init={particlesInit}
				options={linkedCircles}
			/>
			<div className={styles.content}>
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
