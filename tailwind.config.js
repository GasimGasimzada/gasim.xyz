module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': null,
            'code::after': null,
            'code': {
              background: '#f5f2f0'
            }
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}