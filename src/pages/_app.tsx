import { type AppType } from "next/dist/shared/lib/utils";
import "@styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import MainLayout from "@components/layout/MainLayout";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { Fly } from "@components/ui/Fly";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const MyApp: AppType = ({ Component, pageProps }) => {
	const [shouldDisplayFly, setShoudDisplayFly] = useState(false);

	return (
		<>
			<div
				className={montserrat.className}
				onMouseEnter={() => setShoudDisplayFly(true)}
				onMouseLeave={() => setShoudDisplayFly(false)}
			>
				<Fly visible={shouldDisplayFly} />
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</div>
		</>
	);
};

export default appWithTranslation(MyApp);
