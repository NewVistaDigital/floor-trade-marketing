/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffb8ad',
          DEFAULT: 'oklch(68.74% 0.2568 31.614)',
          dark: '#bb1800',
        },
        secondary: '#FDC148',
        tertiary: "#370617",
        maroon: '',
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
