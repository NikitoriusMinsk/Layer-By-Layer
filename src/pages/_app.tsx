import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import MainLayout from "@/components/layout/MainLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
};

export default appWithTranslation(MyApp);
