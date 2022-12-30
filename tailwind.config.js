/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#FF00A8",
        background: "#242424",
      },
    },
    fontFamily: {
      primary: ["Bebas Neue", "cursive"],
      secondary: ["Roboto Condensed", "sans-serif"],
    },
    height: {
      128: "32rem",
      144: "36rem",
      160: "40rem",
    },
    dropShadow: {
      pop4: "4px 4px 0px #000000",
      pop8: "8px 8px 0px #000000",
    },
  },
  plugins: [],
};
