import React, { DragEvent, FormEvent, Ref, useRef, useState } from "react";
import styles from "@styles/components/blocks/Contact.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import useParticles from "src/utils/useParticles";
import Particles from "react-tsparticles";
import { linkedCircles } from "src/utils/particleOptions";
import { motion } from "framer-motion";
import { FileInput } from "@components/ui";

const Contact: React.FC = () => {
	const { t } = useTranslation("common");
	const { init } = useParticles();

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const { name, phone, email, comment, file } = e.currentTarget
			.elements as typeof e.currentTarget.elements & {
			name: { value: string };
			phone: { value: string };
			email: { value: string };
			comment: { value: string };
			file: { files: File[] };
		};

		// TODO submit form
	}

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
			<form onSubmit={onSubmit}>
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
					<FileInput
						text={t("contact.upload.text")}
						textDrag={t("contact.upload.drag")}
						alt={t("contact.upload.alt")}
					/>
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
