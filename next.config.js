/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: false,
  },
  // remove image optimization
  images: {
    unoptimized: true,
  },
};
