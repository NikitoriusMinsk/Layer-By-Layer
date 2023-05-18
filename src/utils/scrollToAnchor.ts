import { type MouseEvent } from "react";

export default function scrollToAnchor(e: MouseEvent<HTMLAnchorElement>) {
	e.preventDefault();
	const regex = new RegExp("#.*$", "gm");
	const selector = e.currentTarget.href.match(regex)?.[0];

	document.querySelector(selector ?? "")?.scrollIntoView({
		behavior: "smooth",
		block: "center",
	});
}
