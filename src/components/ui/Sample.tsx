import React, { useCallback, useContext } from "react";
import styles from "@styles/components/ui/Sample.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { linkedCircles } from "src/utils/particleOptions";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { env } from "src/env.mjs";
import { loadFull } from "tsparticles";

const Sample: React.FC = () => {
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
			id="sample"
		>
			<Particles
				id="particles2"
				className={styles.background}
				init={particlesInit}
				options={linkedCircles}
			/>
			<div className={styles.content}>
				<h2>{t("sample.heading")}</h2>
				<text>{t("sample.text")}</text>
				<button>{t("sample.button")}</button>
			</div>
		</div>
	);
};

export default Sample;
