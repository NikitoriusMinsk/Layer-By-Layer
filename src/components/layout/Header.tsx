import React, { useState } from "react";
import styles from "@styles/components/layout/Header.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { scrollToAnchor } from "src/utils/scrollToAnchor";
import { Switcher } from "@components/ui/Switcher";
import { Dropdown } from "@components/ui/Dropdown";
import { useRouter } from "next/router";

const languages = [
	{ title: "EN", value: "en" },
	{ title: "RU", value: "ru" },
];

const Header: React.FC = () => {
	const { t, i18n } = useTranslation("header");
	const router = useRouter();
	const [theme, setTheme] = useState<"dark" | "light">("dark");

	function toggleScheme() {
		switch (theme) {
			case "dark":
				document.documentElement.style.setProperty("--primary-color", "#010101");
				document.documentElement.style.setProperty(
					"--secondary-color",
					"#fefefe"
				);
				document.documentElement.style.setProperty(
					"--secondary-button-color",
					"#ccc"
				);
				document.documentElement.style.setProperty("--accent-color", "#ccc");
				setTheme("light");
				break;
			case "light":
				document.documentElement.style.setProperty("--primary-color", "#fefefe");
				document.documentElement.style.setProperty(
					"--secondary-color",
					"#010101"
				);
				document.documentElement.style.setProperty(
					"--secondary-button-color",
					"#181818"
				);
				document.documentElement.style.setProperty("--accent-color", "#181818");
				setTheme("dark");
				break;
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
					items={languages}
					onSelected={(lang) =>
						router.push(
							{ pathname: router.pathname, query: router.query },
							router.asPath,
							{ locale: lang }
						)
					}
					defaultSelected={languages.findIndex(
						(lang) => lang.value === i18n.language
					)}
				/>
				<Switcher onSwitch={toggleScheme} />
			</div>
		</header>
	);
};

export default Header;
