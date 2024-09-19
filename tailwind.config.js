module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Sora' : ['Sora', 'sans-serif'],
        'Sora-Bold' :['Sora-Bold', 'sans-serif']
      },
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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #3A8EF6, #6F3AFA)'
      },
      translate:{
        'double-full':'200%'
      },
    },
  },
  plugins: [],
};

