/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffb8ad',
          DEFAULT: '#FF5C42',
          dark: '#bb1800',
        },
        secondary: '#FDC148',
        tertiary: "#370617",
        tan: '#F2F0E9',
      }
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
