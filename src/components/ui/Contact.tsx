import React from "react";
import styles from "@styles/components/ui/Contact.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Contact: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="order"
		>
			<Image
				src={"/images/contact.png"}
				alt=""
				fill
			/>
			<form>
				<span>
					<h2>{t("contact.heading")}</h2>
					<text>{t("contact.text")}</text>
				</span>
				<div>
					<input
						type="text"
						name="name"
						data-name="name"
						placeholder={t("contact.placeholder.name") as string}
					/>
					<input
						type="tel"
						name="phone"
						data-name="phone"
						placeholder={t("contact.placeholder.phone") as string}
					/>
					<input
						type="email"
						name="email"
						data-name="email"
						placeholder={t("contact.placeholder.email") as string}
					/>
					<input
						type="text"
						name="comment"
						data-name="comment"
						placeholder={t("contact.placeholder.comment") as string}
					/>
					<label
						data-name="file"
						data-count="0"
					>
						<input
							type="file"
							name="file"
						/>
						<Image
							src={"/images/file-upload.png"}
							alt={t("contact.upload.alt")}
							height={48}
							width={48}
						/>
						<text>{t("contact.upload.text")}</text>
					</label>
					<input
						type="submit"
						data-name="submit"
						value={t("contact.submit") as string}
					/>
				</div>
			</form>
		</div>
	);
};

export default Contact;
