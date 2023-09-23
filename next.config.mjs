/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
*/
await import("./src/env.mjs");

import i18nConfig from "./next-i18next.config.cjs";
const { i18n } = i18nConfig

// inject env to use because .cjs/.mjs is not supported by default
process.env.I18NEXT_DEFAULT_CONFIG_PATH = `./next-i18next.config.cjs`;

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: false,
  
    /**
     * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
     * out.
     *
     * @see https://github.com/vercel/next.js/issues/41980
     */
    i18n
};
export default config;
