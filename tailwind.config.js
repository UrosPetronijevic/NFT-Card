/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "hsl(217, 54%, 11%)",
        cardBg: "hsl(216, 50%, 16%)",
        menuBg: "hsl(216, 50%, 23%)",
        line: "hsl(215, 32%, 27%)",
        softBlue: "hsl(215, 51%, 70%)",
      },
    },
  },
  plugins: [],
};
