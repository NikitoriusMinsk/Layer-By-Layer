import React from "react";
import styles from "@styles/components/blocks/Services.module.scss";
import { useTranslation } from "next-i18next";
import { Player } from "@lottiefiles/react-lottie-player";

const Services: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="services"
		>
			<h2>{t("services.heading")}</h2>
			<div>
				<Panel
					src="/images/services/1.json"
					title={t("services.1.title")}
					text={t("services.1.text")}
				/>
				<Panel
					src="/images/services/2.json"
					title={t("services.2.title")}
					text={t("services.2.text")}
				/>
				<Panel
					src="/images/services/3.json"
					title={t("services.3.title")}
					text={t("services.3.text")}
				/>
			</div>
		</div>
	);
};

const Panel: React.FC<{ src: string; title: string; text: string }> = (props) => {
	const { src, text, title } = props;

	return (
		<div className={styles.panel}>
			<div className={styles.image}>
				<Player
					src={src}
					autoplay
					loop
				/>
			</div>
			<h3>{title}</h3>
			<text>{text}</text>
		</div>
	);
};

export default Services;
