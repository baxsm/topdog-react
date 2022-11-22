/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primaryColor': '#ffcad4',
      'primary2Color': '#f4acb7',
      'secondaryColor': '#d8e2dc',
      'secondary2Color': '#9d8189',
      'backgroundColor': '#f8edeb',
      'background2Color': '#ffe5d9',
    }
  },
  plugins: [],
}
