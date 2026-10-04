import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#052e16",
          900: "#14532d",
          800: "#166534",
          700: "#15803d",
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          500: "#16a34a",
          400: "#22c55e",
          300: "#4ade80",
          200: "#86efac",
          100: "#bbf7d0",
          50: "#dcfce7",
        },
        dark: {
          DEFAULT: "#121212",
        },
        light: {
          DEFAULT: "#fafafa",
        },
        neutral: {
          DEFAULT: "#d4d4d4",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
