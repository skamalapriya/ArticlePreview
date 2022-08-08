/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /*heebar: [
          "Heebo",
          "Barlow",
          "Lobster",
          "Helvetica",
          "Fantasy",
          "Cursive",
        ],
        ngs: ["Ngs"],*/
        fraunces: ["Fraunces, serif"],
      },
    },
  },
  plugins: [],
};
