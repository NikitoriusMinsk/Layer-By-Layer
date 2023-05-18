import { useCallback } from "react";
import { env } from "src/env.mjs";
import { loadFull } from "tsparticles";
import { type Engine } from "tsparticles-engine";

export default function useParticles() {
	const particlesInit = useCallback(async (engine: Engine) => {
		env.NEXT_PUBLIC_NODE_ENV === "development" && console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	return { init: particlesInit };
}
