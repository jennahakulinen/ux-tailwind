/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "beau-blue": "rgba(194, 211, 227, 1)",
        "musta-onyx": "rgba(54, 59, 68, 1)",
        "shadow-blue": "rgba(110, 130, 155, 1)",
        "alice-blue": "rgba(227, 235, 238, 1)",
        "rich-black-fogra-39": "rgba(12, 13, 18, 1)",
      },
    },
  },
  plugins: [],
};
