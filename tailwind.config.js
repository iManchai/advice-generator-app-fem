module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(193, 38%, 86%)',
          200: 'hsl(150, 100%, 66%)'
        },
        neutral: {
          100: 'hsl(217, 19%, 38%)',
          200: 'hsl(217, 19%, 24%)',
          300: 'hsl(218, 23%, 16%)'
        }
      },
      fontFamily: {
        main: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
