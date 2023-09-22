import React, { useContext, useState } from "react";
import { Switcher } from "@components/ui";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import { ThemeContext } from "src/pages/_app";

const Dropdown = dynamic(async () => (await import("@components/ui")).Dropdown<string>, {
	ssr: false,
});

const languages = [
	{ title: "EN", value: "en" },
	{ title: "RU", value: "ru" },
];

export const Controls: React.FC = () => {
	const { i18n } = useTranslation();
	const router = useRouter();
	// const { theme, mutate: setTheme } = useContext(ThemeContext);

	// function toggleScheme() {
	// 	switch (theme) {
	// 		case "dark":
	// 			document.documentElement.className = "light";
	// 			setTheme!("light");
	// 			break;
	// 		case "light":
	// 			document.documentElement.className = "dark";
	// 			setTheme!("dark");
	// 			break;
	// 	}
	// }

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
			{/* <Switcher onSwitch={togg    leScheme} /> */}
		</>
	);
};
