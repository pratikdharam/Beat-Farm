/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: '#F5E6D3',
        darkBrown: '#4A3728',
        electricBlue: '#00A4E4',
        cream: '#E8D6C0',
        sageGreen: '#8DAA91',
        coral: '#FF6B5B',
      },
      fontFamily: {
        lufga: ['Lufga', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

