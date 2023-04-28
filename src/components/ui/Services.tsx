import React from "react";
import styles from "@styles/components/ui/Services.module.scss";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Services: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={styles.container}>
			<h2>{t("services.heading")}</h2>
			<div>
				<Panel
					src="/images/services/1.png"
					alt={t("services.1.alt")}
					title={t("services.1.title")}
					text={t("services.1.text")}
				/>
				<Panel
					src="/images/services/2.png"
					alt={t("services.2.alt")}
					title={t("services.2.title")}
					text={t("services.2.text")}
				/>
				<Panel
					src="/images/services/3.png"
					alt={t("services.3.alt")}
					title={t("services.3.title")}
					text={t("services.3.text")}
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
			<Image
				src={src}
				alt={alt}
				height={350}
				width={350}
			/>
			<h3>{title}</h3>
			<text>{text}</text>
		</div>
	);
};

export default Services;
