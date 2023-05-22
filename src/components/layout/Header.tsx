import React, { useState } from "react";
import styles from "@styles/components/layout/Header.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { scrollToAnchor } from "src/utils/scrollToAnchor";
import { Controls } from "./Controls";

const Header: React.FC = () => {
	const { t, i18n } = useTranslation("header");

	return (
		<header className={styles.container}>
			<a
				href="#hero"
				className={styles.logo}
				onClick={scrollToAnchor}
			>
				<Image
					src={"/images/logo.svg"}
					height={50}
					width={100}
					alt={t("logo_alt")}
				/>
			</a>
			<nav>
				<a
					onClick={scrollToAnchor}
					href="#about"
				>
					{t("about")}
				</a>
				<a
					onClick={scrollToAnchor}
					href="#printing"
				>
					{t("fdm_printing")}
				</a>
				<a
					onClick={scrollToAnchor}
					href="#services"
				>
					{t("services")}
				</a>
				<a
					onClick={scrollToAnchor}
					href="#sample"
				>
					{t("sample")}
				</a>
				<a
					onClick={scrollToAnchor}
					href="#algorithm"
				>
					{t("algorithm")}
				</a>
				{/* <a
					onClick={scrollToAnchor}
					href="#partnership"
				>
					{t("partnership")}
				</a> */}
				<a
					onClick={scrollToAnchor}
					href="#order"
				>
					{t("order")}
				</a>
			</nav>
			<div className={styles.controls}>
				<Controls />
			</div>
		</header>
	);
};

export default Header;
