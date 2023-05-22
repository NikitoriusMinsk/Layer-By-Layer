import React from "react";
import styles from "@styles/components/ui/FDMPrinting.module.scss";
import { useTranslation } from "next-i18next";
import { Player } from "@lottiefiles/react-lottie-player";
import { scrollToAnchorByString } from "src/utils/scrollToAnchor";

const FDMPrinting: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="printing"
		>
			<div className={styles.image}>
				<Player
					src={"/images/fdm-printing/FDM.json"}
					autoplay
					loop
					style={{ height: "100%", width: "100%" }}
				/>
			</div>
			<div className={styles.info}>
				<h2>{t("fdm_printing.heading")}</h2>
				<text>{t("fdm_printing.text")}</text>
				<button onClick={() => scrollToAnchorByString("#order")}>
					{t("fdm_printing.button")}
				</button>
			</div>
		</div>
	);
};

export default FDMPrinting;
