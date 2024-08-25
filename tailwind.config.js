/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cinemana-primary": "#030f17",
        "cinemana-secondary": "#051520",
        "cinemana-gray": "#91979d",
        "cinemana-red": "#c82127",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
