/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '0', 
      screens: {
        sm: '768px',
        md: '1080px',
        lg: '1380px',
        xl: '1536px',
        '2xl': '1920px',
      },
    },
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
      colors: {
        dark : "#101010"
      }
    },
  },
  plugins: [],
}