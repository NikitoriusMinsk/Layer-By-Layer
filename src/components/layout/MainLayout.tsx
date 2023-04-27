import React, { ReactElement } from "react";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import styles from "@styles/components/layout/MainLayout.module.scss";

const MainLayout: React.FC<{ children?: ReactElement | ReactElement[] }> = (props) => {
	const { children } = props;
	return (
		<>
			<Header />
			<main className={styles.container}>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
