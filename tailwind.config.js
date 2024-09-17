/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "gray-primary" : "#6C87AE",
        "blue-primary" : "#3A8EF6",
        "purple-primary" : "#6F3AFA",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #3A8EF6, #6F3AFA)',
      },
    },
  },
  plugins: [],
}