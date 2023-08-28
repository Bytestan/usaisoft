/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // primary: "#8EC152",
      // "primary-light": "#C7D64F",
      // "primary-dark": "#3A4032",
      // secondary: "#FDC300",
      // "secondary-light": "#E9B400",
      // "secondary-dark": "#D84116",
      // tertiary: "#253166",
      // "tertiary-light": "#3A5BA7",
      // "tertiary-dark": "#121628",
      primary: "#253166",
      "primary-light": "#3A5BA7",
      "primary-dark": "#121628",
      secondary: "#FDC300",
      "secondary-light": "#E9B400",
      "secondary-dark": "#D84116",
      tertiary: "#8EC152",
      "tertiary-light": "#C7D64F",
      "tertiary-dark": "#3A4032",
      white: "#ffffff",
      transparent: "transparent",
      grey: "#79799a",
    },
    fontFamily: {
      sans: ["Fluro"],
    },
    extend: {},
  },
  plugins: [],
};
