import React, { useState, useEffect, FocusEvent } from "react";
import { motion } from "framer-motion";
import { useField, FieldProps, FieldHookConfig } from "formik";
import styles from "./TextField.module.css";
import DefaultTFuncReturn from "i18next";
interface TextFieldProps {
	theme?: string;
	textarea?: string;
	type?: string;
	name?: string;
	className?: string;
	classnamelabel?: string;
	placeholder?: string;
	label?: string | any;
	defaultValue?: string;
	symbolEnd?: string;
	priceField?: string;
	children?: string;
	disabled?: boolean;
}
const TextField = (props: TextFieldProps & FieldHookConfig<string>) => {
	const {
		theme = "",
		textarea,
		type,
		name,
		disabled,
		className,
		classnamelabel,
		placeholder = null,
		label = "",
		defaultValue = "",
		symbolEnd,
		priceField,
		children,
	} = props;

	const [field, meta] = useField(props);

	const [labelStyle, setLabelStyle] = useState(
		field.value && field.value?.length > 0 ? "header" : "title"
	);

	useEffect(() => {
		if (field.value?.length > 0 || placeholder) {
			labelStyle != "header" && setLabelStyle("header");
		} else {
			labelStyle != "title" && setLabelStyle("title");
		}
	}, [field.value, placeholder]);

	const variantsLabel = {
		title: {
			fontSize: "16px",
			left: "18px",
			top: "13px",
			lineHeight: "22px",
		},
		header: {
			fontSize: "14px",
			left: "0px",
			top: "-24px",
			lineHeight: "14px",
		},
	};

	function setLabel(e: any) {
		if (e.target.value.length == 0) {
			labelStyle != "title" && setLabelStyle("title");
		}
	}

	return (
		<div
			className={`${styles.fieldArea} ${
				styles[theme] ? styles[theme] : styles.light
			}`}
		>
			{label && (
				<motion.label
					variants={variantsLabel}
					initial={labelStyle}
					animate={labelStyle}
					onClick={() => {
						!disabled && setLabelStyle("header");
						!disabled && document.getElementsByName(name)[0]?.focus();
					}}
					htmlFor={name}
					className={
						classnamelabel
							? `${styles.textFieldLabel} ${classnamelabel}`
							: `${styles.textFieldLabel}`
					}
				>
					{label.toString()}
				</motion.label>
			)}
			{!textarea ? (
				<>
					{/* onBlur={(e: FocusEvent<HTMLInputElement>) => setLabelStyle('title')}*/}
					<input
						onFocus={(e: FocusEvent<HTMLInputElement>) =>
							setLabelStyle("header")
						}
						disabled={disabled}
						type={type}
						className={`${styles.textField} ${
							symbolEnd && styles.symbolEndPadding
						} ${className && className}`}
						placeholder={(labelStyle != "title" && placeholder) || ""}
						pattern={priceField && "^d*(([.,]{1}d{1,2})||([.,]{0}))$"}
						{...field}
						onBlur={(e: any) => !placeholder && setLabel(e)}
					/>
					{meta.error && (
						<div className="error text-primary text-xs font-golos">
							{meta.error}
						</div>
					)}
					{symbolEnd && <span className={styles.symbolEnd}>{symbolEnd}</span>}
				</>
			) : (
				<div></div>
				/* <textarea
          className={`${styles.textAreaField} ${className && className}`}
          type={type}
          name={name}
          placeholder={placeholder || ''}
          defaultValue={defaultValue}
          {...props}
        >
          {children}
        </textarea>*/
			)}
		</div>
	);
};
export default TextField;
