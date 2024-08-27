/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./presets/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "cinemana-primary": "#030f17",
        "cinemana-secondary": "#051520",
        "cinemana-gray": "#91979d",
        "cinemana-red": "#c82127",
      },
      screens: {
        "custom-761": "761px",
        "custom-630-730": { min: "630px", max: "730px" },
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
