/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        rotate: 'rotate 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        orangered: '#ff4500', // Adding the orangered color
      },
      gridTemplateColumns: {
        'footer': '2fr 1fr 1fr',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

