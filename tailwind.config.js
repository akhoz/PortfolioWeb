/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
        colors: {

        // Dark mode
        darkBlue: 'hsl(232, 19%, 15%)', //Dark mode header background
        darkGradientInit: 'hsl(331, 93%, 48%)',
        darkGradientEnd: 'hsl(25, 100% ,50%)',

        // Light mode
        lightGray: 'hsl(225, 100%, 98%)', //Light mode header background
        lightGradientInit: 'hsl(210, 78%, 56%)',
        lightGradientEnd: 'hsl(146, 68%, 55%)',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}