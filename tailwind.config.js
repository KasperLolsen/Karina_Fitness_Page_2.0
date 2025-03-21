/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff80ab",    // Light pink
        "primary-dark": "#c94f7c", // Darker pink for hover states
        secondary: "#f48fb1",  // Medium pink
        dark: "#bf5f82",       // Dark pink
        light: "#ffffff",      // Pure white for contrast
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 