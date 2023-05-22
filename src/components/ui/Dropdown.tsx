import React, { useState } from "react";
import styles from "@styles/components/ui/Dropdown.module.scss";
import { type Variants, motion } from "framer-motion";

interface DropdownProps<T> {
	items: {
		title: string;
		value: T;
	}[];
	defaultSelected?: number;
	onSelected: (value: DropdownProps<T>["items"][number]["value"]) => void;
}

export const Dropdown = <T,>(props: DropdownProps<T>) => {
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

	function handleSelect(item: DropdownProps<T>["items"][number]) {
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
					.map((item, index) => (
						<div
							className={styles.item}
							onClick={() => handleSelect(item)}
							key={`dropdown_${index}`}
						>
							{item.title}
						</div>
					))}
			</motion.div>
		</div>
	);
};
