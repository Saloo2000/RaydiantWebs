/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nova: ['Nova Klasse', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
        helvetica: ['helvetica', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
        gallient: ["Gallient", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
