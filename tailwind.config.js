/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sora' : ['Sora', 'sans-serif'],
        'Sora-Bold' :['Sora-Bold', 'sans-serif']
      },
    },
  },
  plugins: [],
}

