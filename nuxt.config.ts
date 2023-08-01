import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.css", "boxicons/css/boxicons.min.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/i18n"],
  googleFonts: {
    families: {
      Inter: true,
      Lexend: true,
      Montserrat: true,
      Poppins: true,
      Raleway: true,
      "Libre Baskerville": true,
      "Open Sans": true,
      "Playfair Display": true,
    },
  },
});
