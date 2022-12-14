/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bastille: {
          100: '#FFFFFF',
          200: '#F6F4F6',
          300: '#D6D4E2',
          400: '#787490',
          500: '#49445F',
          600: '#2E2A3C',
          700: '#262331',
          800: '#1d1b26',
          900: '#18161F',
        },
        green: '#00d9c0',
        blue: '#00a8e8'
      },
      backgroundImage:{
        'blur': "url('/blur.png')",
        'blur-desktop': "url('/blur-1.svg')"
      },
      
      fontFamily: {
        'space': ['Space Grotesk', 'system-ui'],
        'roboto': ['Roboto', 'system-ui']
      }
    },
  },
  plugins: [],
};