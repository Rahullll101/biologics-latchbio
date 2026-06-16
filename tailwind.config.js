/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f269a',
        'text-primary': '#0e172c',
        'text-secondary': '#64748b',
        'section-alt': '#f8fafc',
        brand: {
          teal: '#5C9B8E',
          tealDark: '#497B71',
          tealLight: '#E8F1EF',
          mint: '#00A878',
          mintDark: '#008F66',
          mintLight: '#E6F6F1',
          navy: '#0B0F19',
          navyLight: '#1E293B',
          bgLight: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}

