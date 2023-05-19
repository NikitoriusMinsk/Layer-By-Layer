import React, { useState } from "react";
import styles from "@styles/components/ui/Contact.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import useParticles from "src/utils/useParticles";
import Particles from "react-tsparticles";
import { linkedCircles } from "src/utils/particleOptions";

const Contact: React.FC = () => {
	const { t } = useTranslation("common");
	const { init } = useParticles();
	const [fileCount, setFileCount] = useState<number | undefined>(0);

	return (
		<div
			className={styles.container}
			id="order"
		>
			<Particles
				id="particles3"
				className={styles.background}
				init={init}
				options={linkedCircles}
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
						placeholder={t<string>("contact.placeholder.name")}
					/>
					<input
						type="tel"
						name="phone"
						data-name="phone"
						placeholder={t<string>("contact.placeholder.phone")}
					/>
					<input
						type="email"
						name="email"
						data-name="email"
						placeholder={t<string>("contact.placeholder.email")}
					/>
					<input
						type="text"
						name="comment"
						data-name="comment"
						placeholder={t<string>("contact.placeholder.comment")}
					/>
					<label
						data-name="file"
						data-count={fileCount ?? 0}
					>
						<input
							type="file"
							name="file"
							onChange={(e) => setFileCount(e.target.files?.length)}
							multiple
						/>
						<Image
							src={"/images/contact/file-upload.svg"}
							alt={t("contact.upload.alt")}
							height={48}
							width={48}
						/>
						<text>{t("contact.upload.text")}</text>
					</label>
					<input
						type="submit"
						data-name="submit"
						value={t<string>("contact.submit")}
					/>
				</div>
			</form>
		</div>
	);
};

export default Contact;
