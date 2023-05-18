import { type IOptions, type RecursivePartial } from "tsparticles-engine";

export const linkedCircles: RecursivePartial<IOptions> = {
	background: {
		color: {
			value: "transparent",
		},
	},
	style: {
		position: "relative",
	},
	fpsLimit: 60,
	particles: {
		color: {
			value:
				typeof window !== "undefined"
					? getComputedStyle(document.documentElement).getPropertyValue(
							"--decorative-element-color"
					  )
					: "#fff",
		},
		links: {
			color:
				typeof window !== "undefined"
					? getComputedStyle(document.documentElement).getPropertyValue(
							"--decorative-element-color"
					  )
					: "#fff",
			distance: 200,
			enable: true,
			opacity: 0.2,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: "none",
			enable: true,
			outModes: {
				default: "bounce",
			},
			random: true,
			speed: 2,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 600,
			},
			value: 40,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: "circle",
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
} as const;
