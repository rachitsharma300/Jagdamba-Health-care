/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
    primary: "#00695c",    // Teal dark (Healthcare trust color)
    secondary: "#26a69a",  // Teal light (Accent)
    accent: "#f2f7fb",
    dark: "#333333",
      },
    },
  },
  plugins: [],
}
