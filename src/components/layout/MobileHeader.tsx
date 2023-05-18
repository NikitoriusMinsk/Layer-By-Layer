import React, { type MouseEvent, useState } from "react";
import styles from "@styles/components/layout/Header.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import scrollToAnchor from "src/utils/scrollToAnchor";

const menuVariants: Variants = {
	open: {
		left: ["100%", "0%"],
	},
	closed: {
		left: ["0%", "100%"],
	},
};

const MobileHeader: React.FC = () => {
	const { t } = useTranslation("header");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleNavigate(e: MouseEvent<HTMLAnchorElement>) {
		setIsMenuOpen(false);
		scrollToAnchor(e);
	}

	return (
		<header className={styles.container}>
			<a
				href="#hero"
				className={styles.logo}
				onClick={scrollToAnchor}
			>
				<Image
					src={"/images/logo.svg"}
					height={50}
					width={150}
					alt={t("logo_alt")}
				/>
			</a>
			<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<Image
					src={"/images/burger.svg"}
					height={24}
					width={24}
					alt={t("burger_alt")}
				/>
			</button>
			<AnimatePresence initial={false}>
				{isMenuOpen && (
					<motion.nav
						className={styles.mobile}
						variants={menuVariants}
						animate={"open"}
						exit={"closed"}
					>
						<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<Image
								src={"/images/burger.svg"}
								height={24}
								width={24}
								alt={t("burger_alt")}
							/>
						</button>
						<a
							onClick={handleNavigate}
							href="#about"
						>
							{t("about")}
						</a>
						<a
							onClick={handleNavigate}
							href="#printing"
						>
							{t("fdm_printing")}
						</a>
						<a
							onClick={handleNavigate}
							href="#services"
						>
							{t("services")}
						</a>
						<a
							onClick={handleNavigate}
							href="#sample"
						>
							{t("sample")}
						</a>
						<a
							onClick={handleNavigate}
							href="#algorithm"
						>
							{t("algorithm")}
						</a>
						<a
							onClick={handleNavigate}
							href="#partnership"
						>
							{t("partnership")}
						</a>
						<a
							onClick={handleNavigate}
							href="#order"
						>
							{t("order")}
						</a>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default MobileHeader;
