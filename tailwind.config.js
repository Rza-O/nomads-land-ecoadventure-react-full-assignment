/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'primary': '#FFE6E6',
        'secondary': '#E1AFD1',
        'optional': '#AD88C6',
        'Tertiary': '#7469B6'
      },
      fontFamily: {
        funnel: "Funnel Display",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

