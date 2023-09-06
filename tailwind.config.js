/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#040406",
        secondary: "#fafafa",
        customWhite: "#dedede"
      },
    },
  },
  plugins: [],
};
