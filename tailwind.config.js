let flexBasisPlugin = require("./plugins/flex-basis-plugin");
let multiThemePlugin = require("./plugins/multi-theme-plugin");

let colors = {
  black: "#333333",
  blue: "#334982",
  grey: "#f3f3f3",
  orange: "#fdb913",
  pink: "#e40087",
  purple: "#782b8f",
  red: "#dd372f",
  teal: "#00857d",
  white: "#fff",
};

let themes = {
  blue: {
    quaternary: colors.red,
    quinary: colors.red,
    primary: colors.blue,
    secondary: colors.red,
    tertiary: colors.white,
  },

  purple: {
    quaternary: colors.white,
    quinary: colors.purple,
    primary: colors.purple,
    secondary: colors.orange,
    tertiary: colors.purple,
  },

  teal: {
    quaternary: colors.pink,
    quinary: colors.pink,
    primary: colors.teal,
    secondary: colors.pink,
    tertiary: colors.white,
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,

      quaternary: "var(--color-quaternary)",
      quinary: "var(--color-quinary)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      tertiary: "var(--color-tertiary)",
    },
  },
  plugins: [flexBasisPlugin, multiThemePlugin({ themes })],
};
