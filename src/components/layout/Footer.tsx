import React, { useContext } from "react";
import styles from "@styles/components/layout/Footer.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { scrollToAnchor } from "src/utils/scrollToAnchor";
import { ThemeContext } from "src/pages/_app";

const Footer: React.FC = () => {
	const { t } = useTranslation("footer");
	const { theme } = useContext(ThemeContext);

	return (
		<footer className={styles.container}>
			<div className={styles.info}>
				<Image
					src={`/images/logo-${theme}.svg`}
					height={50}
					width={100}
					alt={t("logo_alt")}
				/>
				<span>{t("slogan")}</span>
				{/* <div className={styles.socials}>
					<h4>{t("contact")}</h4>
					<div>
						<SocialBubble
							alt="Facebook"
							href="facebook.com"
							src="/images/social/facebook.svg"
						/>
						<SocialBubble
							alt="Instagram"
							href="instagram.com"
							src="/images/social/instagram.svg"
						/>
						<SocialBubble
							alt="Twitter"
							href="twitter.com"
							src="/images/social/twitter.svg"
						/>
						<SocialBubble
							alt="Telegram"
							href="t.me"
							src="/images/social/telegram.svg"
						/>
						<SocialBubble
							alt="Email"
							href="mailto:lbl@lbl.com"
							src="/images/social/email.svg"
						/>
					</div>
				</div> */}
				<div className={styles.hours}>
					<b>{t("hours.heading")}</b>
					<span>{t("hours.text")}</span>
				</div>
				<span>+658 75 49-82-147</span>
			</div>
			<div className={styles.links}>
				<a
					href="#about"
					onClick={scrollToAnchor}
				>
					{t("about")}
				</a>
				<a
					href="#printing"
					onClick={scrollToAnchor}
				>
					{t("fdm_printing")}
				</a>
				<a
					href="#services"
					onClick={scrollToAnchor}
				>
					{t("services")}
				</a>
				<a
					href="#sample"
					onClick={scrollToAnchor}
				>
					{t("sample")}
				</a>
				<a
					href="#algorithm"
					onClick={scrollToAnchor}
				>
					{t("algorithm")}
				</a>
				<a
					href="#order"
					onClick={scrollToAnchor}
				>
					{t("order")}
				</a>
			</div>
			<div className={styles.copyright}>
				<span>©2023 All Right reserverd. Layer By Layer Inc.</span>
				<a href="#">Terms & Conditions</a>
			</div>
		</footer>
	);
};

export default Footer;
