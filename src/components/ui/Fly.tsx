import React from "react";
import { useRef } from "react";
import { SpringOptions, Variants, motion } from "framer-motion";
import { useFollowPointer } from "src/utils/useFollowPointer";
import styles from "@styles/components/ui/Fly.module.scss";

const springOptionsOuter: SpringOptions = {
	stiffness: 100,
};

const springOptionsInner: SpringOptions = {
	stiffness: 50,
	damping: 9,
};

export const Fly: React.FC<{ visible: boolean }> = (props) => {
	const { visible } = props;
	const refOuter = useRef<HTMLDivElement>(null);
	const refInner = useRef<HTMLDivElement>(null);
	const { x: xOuter, y: yOuter } = useFollowPointer(refOuter, springOptionsOuter);
	const { x: xInner, y: yInner } = useFollowPointer(refInner, springOptionsInner);

	const flyVariants: Variants = {
		visible: {
			opacity: [0, 1],
		},
		hidden: {
			opacity: [1, 0],
		},
	};

	return (
		<>
			<motion.div
				ref={refOuter}
				className={styles.flyOuter}
				style={{ x: xOuter, y: yOuter }}
				variants={flyVariants}
				animate={visible ? "visible" : "hidden"}
			/>
			<motion.div
				ref={refInner}
				className={styles.flyInner}
				style={{ x: xInner, y: yInner }}
				variants={flyVariants}
				animate={visible ? "visible" : "hidden"}
			/>
		</>
	);
};
