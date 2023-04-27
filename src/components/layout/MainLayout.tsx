import React, { ReactElement } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const MainLayout: React.FC<{ children?: ReactElement | ReactElement[] }> = (props) => {
	const { children } = props;
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
