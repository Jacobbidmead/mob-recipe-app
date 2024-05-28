import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "desktop-text": "10px", // Custom text size for desktop
      },
      borderRadius: {
        custom: "20px", // Custom border radius
      },
      screens: {
        sm: "480px", // Custom screen size for mobile
        m: "1024px", // Custom screen size for desktop
        lg: "1440px", // Custom screen size for large screens
      },
    },
  },
  plugins: [],
};
export default config;
