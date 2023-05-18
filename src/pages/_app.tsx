import { type AppType } from "next/dist/shared/lib/utils";
import "@styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import MainLayout from "@components/layout/MainLayout";
import { Montserrat } from "next/font/google";
import { createContext, useCallback } from "react";
import { env } from "src/env.mjs";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<div className={montserrat.className}>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</div>
		</>
	);
};

export default appWithTranslation(MyApp);
