import React, { useContext } from "react";
import styles from "@styles/components/layout/Header.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { scrollToAnchor } from "src/utils/scrollToAnchor";
import { Controls } from "./Controls";
import { ThemeContext } from "src/pages/_app";

const Header: React.FC = () => {
	const { t } = useTranslation("header");
	const { theme } = useContext(ThemeContext);

	return (
		<header className={styles.container}>
			<a
				href="#hero"
				className={styles.logo}
				onClick={scrollToAnchor}
			>
				<Image
					src={`/images/logo-${theme}.svg`}
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
					href="#printer"
				>
					{t("printer")}
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
				<a
					onClick={scrollToAnchor}
					href="#faq"
				>
					{t("faq")}
				</a>
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
