import React from "react";
import styles from "@styles/components/ui/Partnership.module.scss";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Partnership: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="partnership"
		>
			<div>
				<h2>{t("partnership.heading.1")}</h2>
				<ul>
					<li>{t("partnership.points.1")}</li>
					<li>{t("partnership.points.2")}</li>
					<li>{t("partnership.points.3")}</li>
				</ul>
				<h2>{t("partnership.heading.2")}</h2>
				<text>{t("partnership.text")}</text>
			</div>
			<Image
				src={"/images/partnership.png"}
				alt={t("partnership.alt")}
				height={500}
				width={500}
			/>
		</div>
	);
};

export default Partnership;
