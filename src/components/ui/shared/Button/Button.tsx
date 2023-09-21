import cn from "clsx";
import React, {
	forwardRef,
	ButtonHTMLAttributes,
	JSXElementConstructor,
	useRef,
} from "react";
import { mergeRefs } from "react-merge-refs";
import s from "./Button.module.css";
import { LoadingDots } from "../";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
	className?: string;
	variant?: "common" | "bordered" | "black" | "primary" | "transparent" | "naked";
	active?: boolean;
	type?: "submit" | "reset" | "button";
	Component?: string | JSXElementConstructor<any>;
	width?: string | number;
	loading?: boolean;
	disabled?: boolean;
	white?: true;
}

// eslint-disable-next-line react/display-name
const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
	const {
		className,
		white,
		variant = "common",
		children,
		active,
		width,
		loading = false,
		disabled = false,
		style = {},
		Component = "button",
		...rest
	} = props;
	const ref = useRef<typeof Component>(null);

	const rootClassName = cn(
		s.root,
		{
			[s.bordered as string]: variant === "bordered",
			[s.black as string]: variant === "black",
			[s.primary as string]: variant === "primary",
			[s.transparent as string]: variant === "transparent",
			[s.naked as string]: variant === "naked",
			[s.loading as string]: loading,
			[s.disabled as string]: disabled,
		},
		className,
		white && s.white
	);

	return (
		<Component
			aria-pressed={active}
			data-variant={variant}
			ref={mergeRefs([ref, buttonRef])}
			className={rootClassName}
			disabled={disabled}
			style={{
				width,
				...style,
			}}
			{...rest}
		>
			{children}
			{loading && (
				<i className="pl-2 m-0 flex">
					<LoadingDots />
				</i>
			)}
		</Component>
	);
});

export default Button;
