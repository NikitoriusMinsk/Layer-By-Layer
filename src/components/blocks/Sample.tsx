import React from "react";
import styles from "@styles/components/blocks/Sample.module.scss";
import { useTranslation } from "next-i18next";
import { linkedCircles } from "src/utils/particleOptions";
import Particles from "react-tsparticles";
import useParticles from "src/utils/useParticles";
import { scrollToAnchorByString } from "src/utils/scrollToAnchor";

const Sample: React.FC = () => {
	const { t } = useTranslation("common");
	const { init } = useParticles();

	return (
		<div
			className={styles.container}
			id="sample"
		>
			<Particles
				id="particles2"
				className={styles.background}
				init={init}
				options={linkedCircles}
			/>
			<div className={styles.content}>
				<h2>{t("sample.heading")}</h2>
				<text>{t("sample.text")}</text>
				<button onClick={() => scrollToAnchorByString("#order")}>
					{t("sample.button")}
				</button>
			</div>
		</div>
	);
};

export default Sample;
