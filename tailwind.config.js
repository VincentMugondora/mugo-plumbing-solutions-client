/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      primary: "#5f6FFF",
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
  corePlugins: {
    textDecoration: false,
  },
};
