import React, { FunctionComponent, JSXElementConstructor, CSSProperties } from "react";
import cn from "clsx";
import s from "./Text.module.css";

interface TextProps {
	variant?: Variant;
	className?: string;
	style?: CSSProperties;
	children?: React.ReactNode | any;
	html?: string;
	onClick?: () => any;
}

type Variant = "heading" | "body" | "h1" | "h2" | "h3";

const Text: FunctionComponent<TextProps> = ({
	style,
	className = "",
	variant = "body",
	children,
	html,
	onClick,
}) => {
	const componentsMap: {
		[P in Variant]: React.ComponentType<any> | string;
	} = {
		body: "div",
		heading: "h1",
		h1: "h1",
		h2: "h2",
		h3: "h5",
	};

	const Component:
		| JSXElementConstructor<any>
		| React.ReactElement<any>
		| React.ComponentType<any>
		| string = componentsMap![variant!];

	const htmlContentProps = html
		? {
				dangerouslySetInnerHTML: { __html: html },
		  }
		: {};

	return (
		<Component
			className={cn(
				s.root,
				{
					[s.body as string]: variant === "body",
					[s.heading as string]: variant === "heading",
					[s.pageHeading as string]: variant === "h1",
					[s.sectionHeading as string]: variant === "h2",
					[s.subHeading as string]: variant === "h3",
				},
				className
			)}
			onClick={onClick}
			style={style}
			{...htmlContentProps}
		>
			{children}
		</Component>
	);
};

export default Text;
