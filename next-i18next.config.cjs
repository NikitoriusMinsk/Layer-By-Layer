const { initReactI18next } = require('react-i18next');
const path = require("path");

/** @type {import("next-i18next").UserConfig} */
module.exports = {
    debug: process.env.NODE_ENV === "development",
    reloadOnPrerender: process.env.NODE_ENV === "development",
    i18n: {
        locales: ["en", "ru", "default"],
        defaultLocale: "default",
    },
    fallbackLng: 'default',
    ns: ['common', 'footer', 'header'],
    localePath: path.resolve("./public/locales"),
    serializeConfig: false,
    use: [initReactI18next],
};