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
    },
  },
  plugins: [require('@tailwindcss/typography')],
}