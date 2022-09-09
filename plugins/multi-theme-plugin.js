let plugin = require("tailwindcss/plugin");

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

let multiThemePlugin = plugin(function ({ addBase }) {
  addBase(generateForRoot());

  Object.keys(themes).forEach((themeName) => {
    addBase(generateForTheme(themeName));
  });
});

function generateForRoot() {
  let defaultThemeName = Object.keys(themes)[0];

  return Object.entries(themes[defaultThemeName]).map(([colourName, value]) => {
    return {
      ":root": {
        [`--color-${colourName}`]: value,
      },
    };
  });
}

function generateForTheme(themeName) {
  return Object.entries(themes[themeName]).map(([colourName, value]) => {
    return {
      [`[data-theme=${themeName}]`]: {
        [`--color-${colourName}`]: value,
      },
    };
  });
}

module.exports = multiThemePlugin;
