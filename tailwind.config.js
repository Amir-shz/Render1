/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iranSans: ["var(--font-IranSans)"],
      },
      colors: {
        primary: "#E3AE7E",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(80%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
