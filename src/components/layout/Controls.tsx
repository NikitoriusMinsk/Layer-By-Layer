import React, { useState } from "react";
import { Switcher } from "@components/ui/Switcher";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Dropdown = dynamic(
	async () => (await import("@components/ui/Dropdown")).Dropdown<string>,
	{ ssr: false }
);

const languages = [
	{ title: "EN", value: "en" },
	{ title: "RU", value: "ru" },
];

export const Controls: React.FC = () => {
	const { i18n } = useTranslation();
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
					"#ededed"
				);
				document.documentElement.style.setProperty("--accent-color", "#ededed");
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
		<>
			<Dropdown
				items={languages}
				onSelected={(lang) => {
					void router.push(
						{ pathname: router.pathname, query: router.query },
						router.asPath,
						{ locale: lang }
					);
				}}
				defaultSelected={languages.findIndex(
					(lang) => lang.value === i18n.language
				)}
			/>
			<Switcher onSwitch={toggleScheme} />
		</>
	);
};
