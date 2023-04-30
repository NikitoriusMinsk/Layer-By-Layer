import React from "react";
import styles from "@styles/components/ui/Algorithm.module.scss";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Algorithm: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="algorithm"
		>
			<h2>{t("algorithm.heading")}</h2>
			<div>
				<Panel
					src="/images/algorithm/1.png"
					alt={t("algorithm.1.alt")}
					title={t("algorithm.1.title")}
					text={t("algorithm.1.text")}
				/>
				<div className={styles.spacer} />
				<Panel
					src="/images/algorithm/2.png"
					alt={t("algorithm.2.alt")}
					title={t("algorithm.2.title")}
					text={t("algorithm.2.text")}
				/>
				<div className={styles.spacer} />
				<Panel
					src="/images/algorithm/3.png"
					alt={t("algorithm.3.alt")}
					title={t("algorithm.3.title")}
					text={t("algorithm.3.text")}
				/>
				<div className={styles.spacer} />
				<Panel
					src="/images/algorithm/4.png"
					alt={t("algorithm.4.alt")}
					title={t("algorithm.4.title")}
					text={t("algorithm.4.text")}
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
				<Image
					src={src}
					alt={alt}
					height={150}
					width={150}
				/>
			</div>
			<h3>{title}</h3>
			<text>{text}</text>
		</div>
	);
};

export default Algorithm;
