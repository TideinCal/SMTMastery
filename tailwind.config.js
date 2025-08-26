/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#AD242A",
        "brand-black": "#111111",
        "brand-white": "#EEEEEE",
      },
      fontFamily: {
        brand: ["Point", "sans-serif"],
      },
    },
  },
  plugins: [],
}
