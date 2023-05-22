import React, { useState } from "react";
import styles from "@styles/components/ui/Switcher.module.scss";
import { type Variants, motion } from "framer-motion";

interface SwitcherProps {
	onSwitch: () => void;
	defaultOn?: boolean;
}

export const Switcher: React.FC<SwitcherProps> = (props) => {
	const { onSwitch, defaultOn } = props;
	const [isOn, setIsOn] = useState(defaultOn);

	const variants: Variants = {
		on: {
			x: ["0%", "100%"],
		},
		off: {
			x: ["100%", "0%"],
		},
	};

	function handleClick() {
		onSwitch();
		setIsOn(!isOn);
	}

	return (
		<div className={styles.container}>
			<motion.div
				variants={variants}
				onClick={handleClick}
				animate={isOn ? "on" : "off"}
				initial={false}
			/>
		</div>
	);
};
