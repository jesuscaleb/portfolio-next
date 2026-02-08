/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        'background-light': "#F8FAFC",
        'background-dark': "#0B0B15",
        'card-dark': "#161625",
        'accent-purple': "#7C3AED",
        'brand-purple': "#6D28D9",
        'brand-violet': "#4C1D95",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  // Add custom utilities for grid background
  safelist: [
    'grid-bg'
  ]
}

