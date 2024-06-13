/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'md': '769px',
      'sm': '576px',
    },
    extend: {
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        },
        moveSlow: {
          "50%": {transform: 'translate(0, -.2rem)'
        }
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite',
        'social' : 'moveSlow .5s linear',
      },
      cursor: {
        'grab': 'grab'
      }
    },
  },
  plugins: [],
}

