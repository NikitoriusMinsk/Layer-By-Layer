import React from "react";
import styles from "@styles/components/layout/Header.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
	const { t } = useTranslation("header");

	return (
		<header className={styles.container}>
			<Image
				src={"/images/logo.svg"}
				height={50}
				width={150}
				alt={t("logo_alt")}
			/>
			<nav>
				<a href="#about">{t("about")}</a>
				<a href="#printing">{t("fdm_printing")}</a>
				<a href="#services">{t("services")}</a>
				<a href="#sample">{t("sample")}</a>
				<a href="#algorithm">{t("algorithm")}</a>
				<a href="#order">{t("order")}</a>
				<a href="#contacts">{t("contact")}</a>
				<a href="#partnership">{t("partnership")}</a>
			</nav>
		</header>
	);
};

export default Header;
