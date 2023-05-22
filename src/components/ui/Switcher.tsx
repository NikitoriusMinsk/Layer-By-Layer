import React, { useState } from "react";
import styles from "@styles/components/ui/Switcher.module.scss";
import { Variants, motion } from "framer-motion";

export const Switcher: React.FC = () => {
	const [isOn, setIsOn] = useState(false);

	const variants: Variants = {
		on: {
			x: ["0%", "100%"],
		},
		off: {
			x: ["100%", "0%"],
		},
	};

	function handleClick() {
		// TODO: change theme

		setIsOn(!isOn);
	}

	return (
		<div className={styles.container}>
			<motion.div
				variants={variants}
				onClick={handleClick}
				animate={isOn ? "on" : "off"}
			/>
		</div>
	);
};
