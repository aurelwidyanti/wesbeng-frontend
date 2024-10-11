/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A0D683',
      },
      backgroundImage: {
        'wave': "url('/src/assets/img/wave.svg')"
      }
    },
  },
  plugins: [],
}