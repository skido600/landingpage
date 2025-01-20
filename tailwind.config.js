/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Prosto: ["Prosto One", "serif"],
        jost: ["Jost", "serif"],
      },
      backgroundImage: {
        "nachos-bg": "url('/svg/pexels-willoworld-3768012.jpg') ",
      },
      backgroundPosition: {
        "center-right": "80% 30%;", // This will align the image to the right but keep it within bounds
      },
    },
  },
  plugins: [],
};
