/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'primary': '#7ac6b6',
        'secondary': '#dadad6',
        'optional': '#093333'
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

