import { SpringOptions, useSpring } from "framer-motion";
import { RefObject, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>, options: SpringOptions) {
	const x = useSpring(0, options);
	const y = useSpring(0, options);

	useEffect(() => {
		if (!ref.current) return;

		const handlePointerMove = ({ pageX, pageY }: MouseEvent) => {
			const element = ref.current!;

			const _x = pageX - element.offsetLeft - element.offsetWidth / 2;
			const _y = pageY - element.offsetTop - element.offsetHeight / 2;
			requestAnimationFrame(async () => {
				x.set(_x);
				y.set(_y);
			});
		};

		window.addEventListener("pointermove", handlePointerMove, { passive: true });

		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, []);

	return { x, y };
}
