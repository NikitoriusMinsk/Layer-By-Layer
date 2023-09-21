import React from "react";
import styles from "@styles/components/blocks/Printer.module.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui";
import { useTranslation } from "react-i18next";
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
					<PrinterTab />
				</TabsContent>
				<TabsContent value="details">
					<PrinterTab />
				</TabsContent>
			</Tabs>
		</div>
	);
};

const PrinterTab: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={styles.printerTab}>
			<div className={styles.col}>
				<div className={styles.image}>
					<Image
						src={"/images/placeholder.png"}
						fill
						alt={t("printer.tabs.printer.img")}
					/>
				</div>
				<div className={styles.details}>
					<div>
						<h3>{t("printer.tabs.printer.dimensions")}</h3>
						<span>{t("printer.tabs.printer.width")}: 1325 mm</span>
						<span>{t("printer.tabs.printer.depth")}: 900 mm</span>
						<span>{t("printer.tabs.printer.height")}: 2000 mm</span>
						<span>{t("printer.tabs.printer.weight")}: 530 kg / 1170lbs</span>
					</div>
					<div>
						<h3>{t("printer.tabs.printer.volume")}</h3>
						<span>{t("printer.tabs.printer.width")}: 1325 mm</span>
						<span>{t("printer.tabs.printer.depth")}: 900 mm</span>
						<span>{t("printer.tabs.printer.height")}: 2000 mm</span>
					</div>
				</div>
			</div>
			<div className={styles.col}>
				<div className={styles.item}>
					<h4>{t("printer.tabs.printer.process.heading")}</h4>
					<span>{t("printer.tabs.printer.process.text")}</span>
				</div>
				<div className={styles.item}>
					<h4>{t("printer.tabs.printer.resolution.heading")}</h4>
					<span>{t("printer.tabs.printer.resolution.text")}</span>
				</div>
				<div className={styles.item}>
					<h4>{t("printer.tabs.printer.media.heading")}</h4>
					<span>{t("printer.tabs.printer.media.text")}</span>
				</div>
				<div className={styles.item}>
					<h4>{t("printer.tabs.printer.geometry.heading")}</h4>
					<span>{t("printer.tabs.printer.geometry.text")}</span>
				</div>
				<div className={styles.item}>
					<h4>{t("printer.tabs.printer.bed.heading")}</h4>
					<span>{t("printer.tabs.printer.bed.text")}</span>
				</div>
			</div>
		</div>
	);
};
export default Printer;
