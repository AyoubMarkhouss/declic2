const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "fr"], // English and French
    defaultLocale: "en", // Default language
    localePath: path.resolve("./public/locales"), // Translation files location
  },
};
