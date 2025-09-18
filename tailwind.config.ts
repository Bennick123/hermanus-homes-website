import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#006CFF", // Custom blue
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        sage: {
          50: "#f6f7f4",
          100: "#e9ebe4",
          200: "#d4d8ca",
          300: "#B7C4A1", // Sage accent
          400: "#9ba888",
          500: "#7f8c6f",
          600: "#647059",
          700: "#515a49",
          800: "#42493c",
          900: "#383d33",
        },
        gold: {
          50: "#fdfcf8",
          100: "#faf7ed",
          200: "#f4edda",
          300: "#C4AE6F", // Muted gold
          400: "#d4b96a",
          500: "#c9a96e",
          600: "#b8935f",
          700: "#997750",
          800: "#7c6144",
          900: "#655039",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
  require("tailwindcss-animate"),
  require("@tailwindcss/typography"),],
}
export default config
