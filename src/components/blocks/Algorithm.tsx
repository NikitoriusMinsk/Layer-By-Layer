import React from "react";
import styles from "@styles/components/blocks/Algorithm.module.scss";
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
			<div className={styles.content}>
				<Panel
					src="/images/algorithm/1.svg"
					alt={t("algorithm.1.alt")}
					title={t("algorithm.1.title")}
					text={t("algorithm.1.text")}
				/>
				<Panel
					src="/images/algorithm/2.svg"
					alt={t("algorithm.2.alt")}
					title={t("algorithm.2.title")}
					text={t("algorithm.2.text")}
				/>
				<Panel
					src="/images/algorithm/3.svg"
					alt={t("algorithm.3.alt")}
					title={t("algorithm.3.title")}
					text={t("algorithm.3.text")}
				/>
				<Panel
					src="/images/algorithm/4.svg"
					alt={t("algorithm.4.alt")}
					title={t("algorithm.4.title")}
					text={t("algorithm.4.text")}
				/>
				<Panel
					src="/images/algorithm/5.svg"
					alt={t("algorithm.5.alt")}
					title={t("algorithm.5.title")}
					text={t("algorithm.5.text")}
				/>
				<Panel
					src="/images/algorithm/6.svg"
					alt={t("algorithm.6.alt")}
					title={t("algorithm.6.title")}
					text={t("algorithm.6.text")}
				/>
				<Panel
					src="/images/algorithm/7.svg"
					alt={t("algorithm.7.alt")}
					title={t("algorithm.7.title")}
					text={t("algorithm.7.text")}
				/>
				<Panel
					src="/images/algorithm/8.svg"
					alt={t("algorithm.8.alt")}
					title={t("algorithm.8.title")}
					text={t("algorithm.8.text")}
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
					height={50}
					width={50}
				/>
			</div>
			<div>
				<h3>{title}</h3>
				<text>{text}</text>
			</div>
		</div>
	);
};

export default Algorithm;
