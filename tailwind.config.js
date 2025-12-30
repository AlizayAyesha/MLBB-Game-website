/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        general: ["general", "sans-serif"],
        "circular-web": ['"Circular Web"', "sans-serif"],
        robertMedium: ["robert-medium", "sans-serif"],
        robertRegular: ["robert-regular", "sans-serif"],
        zentry: ["Zentry", "sans-serif"],
      },
    },
  },
  plugins: [],
};
