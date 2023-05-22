import React from "react";
import { useTranslation } from "react-i18next";

export const Meta: React.FC = () => {
	return (
		<>
			<title>Layer By Layer</title>
			<meta
				property="title"
				content={"Layer By Layer"}
			/>
			<meta
				property="description"
				content={"3D-printing services"}
			/>
			<meta
				property="og:image"
				content="/images/logo.svg"
			/>
			<meta
				property="og:title"
				content={"Layer By Layer"}
			/>
			<meta
				property="og:description"
				content={"3D-printing services"}
			/>
			<meta
				property="og:url"
				content="layerbylayer.com"
			/>
			<meta
				property="twitter:image"
				content="/images/logo.svg"
			/>
			<meta
				property="twitter:card"
				content="summary"
			/>
			<meta
				property="twitter:description"
				content={"3D-printing services"}
			/>
		</>
	);
};
