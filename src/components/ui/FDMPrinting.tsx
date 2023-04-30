import React from "react";
import styles from "@styles/components/ui/FDMPrinting.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FDMPrinting: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="printing"
		>
			<div className={styles.image}>
				<Image
					src={"/images/FDMPrinting.png"}
					fill
					alt={t("fdm_printing.alt")}
				/>
			</div>
			<div className={styles.info}>
				<h2>{t("fdm_printing.heading")}</h2>
				<text>{t("fdm_printing.text")}</text>
				<button>{t("fdm_printing.button")}</button>
			</div>
		</div>
	);
};

export default FDMPrinting;
