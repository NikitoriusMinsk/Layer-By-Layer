import React from "react";
import styles from "@styles/components/layout/Header.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { scrollToAnchor } from "src/utils/scrollToAnchor";
import { Switcher } from "@components/ui/Switcher";
import { Dropdown } from "@components/ui/Dropdown";
import { changeLanguage } from "i18next";
import { useRouter } from "next/router";

const Header: React.FC = () => {
	const { t, i18n } = useTranslation("header");
	const router = useRouter();

	function getDefaultLanguage() {
		switch (true) {
			case i18n.language === "ru":
				return 1;
			case i18n.language === "en":
				return 0;
			default:
				return 0;
		}
	}

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
				<Dropdown
					items={[
						{ title: "EN", value: "en" },
						{ title: "RU", value: "ru" },
					]}
					onSelected={(lang) =>
						router.push(
							{ pathname: router.pathname, query: router.query },
							router.asPath,
							{ locale: lang }
						)
					}
					defaultSelected={getDefaultLanguage()}
				/>
				<Switcher />
			</div>
		</header>
	);
};

export default Header;
