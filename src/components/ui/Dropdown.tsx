import React, { useState } from "react";
import styles from "@styles/components/ui/Dropdown.module.scss";
import { Variants, motion } from "framer-motion";

interface DropdownProps {
	items: {
		value: any;
		title: string;
	}[];
	defaultSelected?: number;
	onSelected: (value: DropdownProps["items"][number]["value"]) => void;
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
	const { items, defaultSelected, onSelected } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(items[defaultSelected ?? 0]);

	const variants: Variants = {
		open: {
			height: ["0%", "100%"],
			paddingTop: ["0px", "6px"],
			paddingBottom: ["0px", "6px"],
		},
		closed: {
			height: ["100%", "0%"],
			paddingTop: ["6px", "0px"],
			paddingBottom: ["6px", "0px"],
		},
	};

	function handleSelect(item: DropdownProps["items"][number]) {
		onSelected(item.value);
		setSelectedItem(item);
		setIsOpen(false);
	}

	return (
		<div className={styles.container}>
			<div
				className={styles.selected}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedItem?.title}
			</div>
			<motion.div
				className={styles.items}
				variants={variants}
				animate={isOpen ? "open" : "closed"}
				transition={{
					ease: "easeInOut",
					duration: 0.3,
				}}
				initial={false}
			>
				{items
					.filter((item) => item.value !== selectedItem?.value)
					.map((item) => (
						<div
							className={styles.item}
							onClick={() => handleSelect(item)}
							key={item.value}
						>
							{item.title}
						</div>
					))}
			</motion.div>
		</div>
	);
};
