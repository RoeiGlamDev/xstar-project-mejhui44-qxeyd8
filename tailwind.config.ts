import type { Config } from 'tailwindcss'
/
 * Custom Tailwind CSS configuration for HouseIL, a luxurious dark-themed technology business.
 * The configuration includes a tailored color palette with a focus on pink and black,
 * along with animations for a high-end user experience.
 */
const config: Config = {
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FF007F', // Main pink color for accents
          light: '#FF66B2', // Lighter pink for highlights
          dark: '#C4005B', // Darker pink for depth
        },
        black: {
          DEFAULT: '#000000', // Primary black for backgrounds
        },
      },
      animation: {
        fadeIn: 'fade-in 0.5s ease-in',
        fadeOut: 'fade-out 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  variants: {
    extend: {
      // Extend variants for hover and focus states
      backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
      textColor: ['responsive', 'hover', 'focus', 'dark'],
    },
  },
  plugins: [],
}
export default config;