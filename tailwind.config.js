/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A0D683',
        second: '#679369',
      },
      backgroundImage: {
        'wave': "url('/src/assets/img/wave.svg')"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}