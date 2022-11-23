/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'primaryColor': '#edf2f4',
      'primary2Color': '#e63946',
      'secondaryColor': '#a8dadc',
      'secondary2Color': '#457b9d',
      'secondary3Color': '#1d3557',
      'textColor': 'rgba(0, 0, 0, 0.85)',
    },
  },
  plugins: [],
}
