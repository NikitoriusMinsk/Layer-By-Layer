import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@components/ui";
import React from "react";
import styles from "@styles/components/blocks/FAQ.module.scss";
import { useTranslation } from "next-i18next";
import { scrollToAnchor } from "src/utils/scrollToAnchor";

const FAQ: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<div
			className={styles.container}
			id="FAQ"
		>
			<div className={styles.headings}>
				<h2>{t("faq.heading")}</h2>
				<div className={styles.subheading}>
					<h3>{t("faq.subheading")} </h3>
					<a
						href="#order"
						onClick={scrollToAnchor}
					>
						{t("faq.socialLink")}
					</a>
				</div>
			</div>

			<Accordion
				type="single"
				collapsible
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>{t("faq.questions.1")}</AccordionTrigger>
					<AccordionContent>{t("faq.answers.1")}</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>{t("faq.questions.2")}</AccordionTrigger>
					<AccordionContent>{t("faq.answers.2")}</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>{t("faq.questions.3")}</AccordionTrigger>
					<AccordionContent>{t("faq.answers.3")}</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>{t("faq.questions.4")}</AccordionTrigger>
					<AccordionContent>{t("faq.answers.4")}</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger>{t("faq.questions.5")}</AccordionTrigger>
					<AccordionContent>{t("faq.answers.5")}</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default FAQ;
