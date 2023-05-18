import React, { type ReactElement } from "react";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import styles from "@styles/components/layout/MainLayout.module.scss";
import useWindowSize from "src/utils/useWindowSize";
import MobileHeader from "@components/layout/MobileHeader";

const MainLayout: React.FC<{ children?: ReactElement | ReactElement[] }> = (props) => {
	const { children } = props;
	const { width } = useWindowSize();

	return (
		<>
			{width > 768 ? <Header /> : <MobileHeader />}
			<main className={styles.container}>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
