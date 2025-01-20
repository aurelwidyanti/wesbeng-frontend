/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
import preline from "preline/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content,
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A0D683",
        second: "#679369",
      },
      backgroundImage: {
        wave: "url('/src/assets/img/wave.svg')",
      },
    },
  },
  plugins: [preline, flowbite.plugin],
};
