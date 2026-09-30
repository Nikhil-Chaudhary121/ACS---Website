/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { yellow: "#f7c325", soft: "#fde28a", cream: "#fff3e3", dark: "#2b2b2b", stone: "#5b5852" },
      },
    },
  },
  plugins: [],
};
