/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#D11313',
        secondary: '#FAA307',
        tertiary: "370617",
        black: '#222222',
      }
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
