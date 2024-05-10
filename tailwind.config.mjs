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
        secondary: 'oklch(84.48% 0.1928 81.38)',
        tertiary: "#370617",
        maroon: '',
        tan: '#F2F0E9',
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.1em',
      wider: '.175em',
      widest: '.25em',
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      serif: ["Noto Serif Display", "Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
