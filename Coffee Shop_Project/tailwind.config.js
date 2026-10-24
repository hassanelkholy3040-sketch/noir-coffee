/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          charcoal: '#191715',
          deep: '#120F0D',
          espresso: '#241812',
          espressoLight: '#32231A',
          caramel: '#B87945',
          caramelHover: '#C98953',
          caramelLight: '#D49B6A',
          beige: '#DCCBB8',
          beigeLight: '#E8DDD0',
          cream: '#F5EFE6',
          creamLight: '#FAF7F2',
          border: '#3D2A20',
          borderLight: '#4F382B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'caramel-glow': '0 0 25px -5px rgba(184, 121, 69, 0.35)',
        'luxury': '0 20px 40px -15px rgba(18, 15, 13, 0.7)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

