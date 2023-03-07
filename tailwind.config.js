/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseonce: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        pulseonce: 'pulseonce 0.5s cubic-bezier(0.4, 0, 0.6, 1)'
      }
    },
  },
  plugins: [
  ],
}
