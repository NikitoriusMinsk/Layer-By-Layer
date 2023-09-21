import { type AppType } from "next/dist/shared/lib/utils";
import "@styles/global.scss";
import { appWithTranslation } from "next-i18next";
import MainLayout from "@components/layout/MainLayout";
import { Montserrat } from "next/font/google";
import nextI18nextConfig from "next-i18next.config.cjs";
import { Dispatch, SetStateAction, createContext, useState } from "react";
// import { useState } from "react";
// import { Fly } from "@components/ui/Fly";

interface ThemeContext {
	theme: "dark" | "light";
	mutate?: Dispatch<SetStateAction<ThemeContext["theme"]>>;
}

const montserrat = Montserrat({ subsets: ["cyrillic"] });
export const ThemeContext = createContext<ThemeContext>({ theme: "dark" });

const MyApp: AppType = ({ Component, pageProps }) => {
	// const [shouldDisplayFly, setShoudDisplayFly] = useState(false);
	const [theme, setTheme] = useState<ThemeContext["theme"]>("dark");

	return (
		<>
			<ThemeContext.Provider value={{ theme, mutate: setTheme }}>
				<div
					className={montserrat.className}
					// onMouseEnter={() => setShoudDisplayFly(true)}
					// onMouseLeave={() => setShoudDisplayFly(false)}
				>
					{/* <Fly visible={shouldDisplayFly} /> */}
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
				</div>
			</ThemeContext.Provider>
		</>
	);
};

export default appWithTranslation(MyApp, nextI18nextConfig);
