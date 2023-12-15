import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E14A26",
        yellow: "#FFC424",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  // plugins: [
  //   plugin(function ({ matchUtilities, theme }) {
  //     matchUtilities(
  //       {
  //         // Class name
  //         "animate-path": (value) => {
  //           return {
  //             "stroke-dasharray": value,
  //           };
  //         },
  //       },
  //       { values: ["1000"] }
  //     );
  //   }),
  // ],
};
