/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Navy Blue (trust, professionalism, stability)
        primary: '#1e40af',  // Deep blue
        
        // Secondary: Warm Gold (luxury, success, quality)
        secondary: '#d97706',  // Amber/gold
        
        // Accent: Fresh Teal (modern, growth, innovation)
        accent: '#0891b2',  // Cyan/teal
      }
    },
  },
  plugins: [],
}