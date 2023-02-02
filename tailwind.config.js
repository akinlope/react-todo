/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mainTxt: "Caveat, cursive"
    },
    colors: {
      txtColor: "#F7444E",
      priColor: "#D4D4CE",
      secColor: "#F6F6F6"
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    extend: {},
  },
  plugins: [],
}