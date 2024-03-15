const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {},
      backgroundImage: {
        "starry-night": "url('/purple_bg.jpg')",
      },

      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
        pro: { min: "1024px", max: "1366px" },
        fold: { min: "280px", max: "653px" },
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },

      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        wiggle: "wiggle 1s ease-in-out 100ms",
        color: "color 15s ease-in-out infinite",
        slidein300: "slidein 1s ease 300ms",
        slidein500: "slidein 1s ease 500ms",
        slidein700: "slidein 1s ease 700ms",
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        color: {
          "0%": {
            "background-position": " 0 50%",
          },

          "50%": {
            "background-position": " 100% 50%",
          },
          "100%": {
            "background-position": " 0 50%",
          },
        },

        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },

    plugins: [],
  },
};
