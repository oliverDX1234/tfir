/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arupala: ["var(--font-arupala)", ...defaultTheme.fontFamily.sans],
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "midnight-blue": {
          light: "#0A0A2B",
          dark: "#060625",
        },
        purple: "#5152FB",
        "p-color": "#CACAFF",
        "brand-yellow": "#FDBC42",
        "brand-pink": "#F05371",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3.5rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },
    },
  },
  plugins: [],
};
