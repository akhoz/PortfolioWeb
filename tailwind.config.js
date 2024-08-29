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

        // New Dark Mode 
        mySecondary: 'hsl(230, 17%, 20%)',
        myAquamarine: 'hsl(163, 96%, 45%)',
        myGray: 'hsl(217, 15%, 41%)',
        myDarkGray: 'hsl(217, 15%, 35%)',

        // Dark mode
        darkBlue: 'hsl(230, 17%, 14%)', //Dark mode header background
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
