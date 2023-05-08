import React from "react";
import styles from "@styles/components/ui/Sample.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Sample: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="sample"
		>
			<Image
				src={"/images/sample.jpg"}
				alt=""
				fill
			/>
			<div>
				<h2>{t("sample.heading")}</h2>
				<text>{t("sample.text")}</text>
				<button>{t("sample.button")}</button>
			</div>
		</div>
	);
};

export default Sample;
