/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        "gray-primary" : "#6C87AE",
        "blue-primary" : "#3A8EF6",
        "purple-primary" : "#6F3AFA",
        "white-primary": "#F9FBFC",
        "blue-extralight":"#F2F7FF",
        "blue-light-gray":"#E2EDFF",
        "blue-dark":"#031432",
        "blue-dark-dark":"#0A0E31"
      },
      translate:{
        'double-full':'200%'
      },
    },
  },
  plugins: [],
};
