/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        alata: ["Alata", "sans- serif"],
        jose: ["Josefin Sans", "sans- serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 12%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
