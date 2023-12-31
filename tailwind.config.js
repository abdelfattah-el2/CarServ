/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#D81324",
        "secondary": "#0B2154",
        "light ": "#F2F2F2",
        "dark": "#111111",
      },
      fontFamily: {
        'Ubuntu': ['Ubuntu, sans-serif'],
      },
      gridTemplateColumns:{
        "auto":'repeat(auto-fill, minmax(350px, 1fr))'
      }
    },
  },
  plugins: [],
};
