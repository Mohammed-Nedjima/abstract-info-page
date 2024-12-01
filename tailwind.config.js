/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/.{html,js}", "*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4C5FD5",
        secondary: "#191A1B",
      },
    },
  },
  plugins: [],
};
