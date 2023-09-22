import React from "react";
import styles from "@styles/components/blocks/Printer.module.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Printer: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="printer"
		>
			<Tabs defaultValue="printer">
				<TabsList className={styles.list}>
					<TabsTrigger
						value="printer"
						className={styles.trigger}
					>
						{t("printer.tabs.printer.heading")}
					</TabsTrigger>
					<TabsTrigger
						value="materials"
						className={styles.trigger}
					>
						{t("printer.tabs.materials.heading")}
					</TabsTrigger>
					<TabsTrigger
						value="details"
						className={styles.trigger}
					>
						{t("printer.tabs.details.heading")}
					</TabsTrigger>
				</TabsList>
				<TabsContent value="printer">
					<PrinterTab />
				</TabsContent>
				<TabsContent value="materials">
					<MaterialsTab />
				</TabsContent>
				<TabsContent value="details">
					<DetailsTab />
				</TabsContent>
			</Tabs>
		</div>
	);
};

const PrinterTab: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={`${styles.tab} ${styles.printer}`}>
			<div className={styles.col}>
				<div className={styles.image}>
					<Image
						src={"/images/printer/1.png"}
						fill
						alt={t("printer.tabs.printer.img")}
						style={{ objectFit: "scale-down" }}
					/>
				</div>
				<div className={styles.details}>
					<h3>{t("printer.tabs.printer.dimensions")}</h3>
					<span>{t("printer.tabs.printer.width")}: 85 cm</span>
					<span>{t("printer.tabs.printer.depth")}: 105 cm</span>
					<span>{t("printer.tabs.printer.height")}: 165 cm</span>
					<span>{t("printer.tabs.printer.weight")}: ~280 kg</span>
				</div>
			</div>
			<div className={styles.col}>
				<div className={styles.image}>
					<Image
						src={"/images/printer/2.png"}
						fill
						alt={t("printer.tabs.printer.img")}
						style={{ objectFit: "scale-down" }}
					/>
				</div>
				<div className={styles.details}>
					<h3>{t("printer.tabs.printer.volume")}</h3>
					<span>{t("printer.tabs.printer.width")}: 400 mm</span>
					<span>{t("printer.tabs.printer.depth")}: 450 mm</span>
					<span>{t("printer.tabs.printer.height")}: 400 mm</span>
				</div>
			</div>
			<div className={styles.col}>
				<div className={styles.item}>
					<h3>{t("printer.tabs.printer.process.heading")}</h3>
					<span>{t("printer.tabs.printer.process.text")}</span>
				</div>
				<div className={styles.item}>
					<h3>{t("printer.tabs.printer.resolution.heading")}</h3>
					<span>{t("printer.tabs.printer.resolution.text")}</span>
				</div>
				<div className={styles.item}>
					<h3>{t("printer.tabs.printer.media.heading")}</h3>
					<span>{t("printer.tabs.printer.media.text")}</span>
				</div>
				<div className={styles.item}>
					<h3>{t("printer.tabs.printer.geometry.heading")}</h3>
					<span>{t("printer.tabs.printer.geometry.text")}</span>
				</div>
				<div className={styles.item}>
					<h3>{t("printer.tabs.printer.bed.heading")}</h3>
					<span>{t("printer.tabs.printer.bed.text")}</span>
				</div>
			</div>
		</div>
	);
};

const MaterialsTab: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={`${styles.tab} ${styles.materials}`}>
			<h3>{t("printer.tabs.materials.heading")}</h3>
			<span>{t("printer.tabs.materials.1")}</span>
			<span>{t("printer.tabs.materials.2")}</span>
			<span>{t("printer.tabs.materials.3")}</span>
			<span>{t("printer.tabs.materials.4")}</span>
			<span>{t("printer.tabs.materials.5")}</span>
			<span>{t("printer.tabs.materials.6")}</span>
		</div>
	);
};

const DetailsTab: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={`${styles.tab} ${styles.details}`}>
			<span>{t("printer.tabs.details.heading")}</span>
			<p>{t("printer.tabs.details.text.1")}</p>
			<p>{t("printer.tabs.details.text.2")}</p>
			<p>{t("printer.tabs.details.text.3")}</p>
			<p>{t("printer.tabs.details.text.4")}</p>
			<p>{t("printer.tabs.details.text.5")}</p>
		</div>
	);
};

export default Printer;
