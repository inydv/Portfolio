/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        hello: "#040406",
        banner: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
