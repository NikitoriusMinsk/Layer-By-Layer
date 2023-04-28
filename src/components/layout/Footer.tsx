import React from "react";
import styles from "@styles/components/layout/Footer.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Footer: React.FC = () => {
	const { t } = useTranslation("footer");

	return (
		<footer className={styles.container}>
			<div className={styles.info}>
				<Image
					src={"/images/logo.svg"}
					height={50}
					width={150}
					alt={t("logo_alt")}
				/>
				<span>{t("slogan")}</span>
				<div className={styles.socials}>
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
				</div>
				<div className={styles.hours}>
					<h4>{t("hours.heading")}</h4>
					<span>{t("hours.text")}</span>
				</div>
				<span>+658 75 49-82-147</span>
			</div>
			<div className={styles.links}>
				<a href="#about">{t("about")}</a>
				<a href="#printing">{t("fdm_printing")}</a>
				<a href="#services">{t("services")}</a>
				<a href="#sample">{t("sample")}</a>
				<a href="#algorithm">{t("algorithm")}</a>
				<a href="#order">{t("order")}</a>
				<a href="#contacts">{t("contact")}</a>
				<a href="#partnership">{t("partnership")}</a>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21421.90645960415!2d44.81410641647915!3d41.69570049089088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf966877377%3A0x5982a28de6451cda!2sAvlabari!5e0!3m2!1sru!2sge!4v1682679064033!5m2!1sru!2sge"
					style={{ border: 0 }}
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div className={styles.copyright}>
				<span>©2023 All Right reserverd. Layer By Layer Inc.</span>
				<a href="/terms">Terms & Conditions</a>
			</div>
		</footer>
	);
};

const SocialBubble: React.FC<{ src: string; alt: string; href: string }> = (props) => {
	const { alt, href, src } = props;

	return (
		<a
			href={href}
			rel="noreferrer noopener"
			target="_blank"
			className={styles.socialBubble}
		>
			<Image
				src={src}
				alt={alt}
				height={36}
				width={36}
			/>
		</a>
	);
};

export default Footer;
