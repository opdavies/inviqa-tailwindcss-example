let plugin = require("tailwindcss/plugin");

let multiThemePlugin = plugin.withOptions(
  function (options) {
    return function ({ addBase }) {
      let themes = options?.themes ?? [];

      addBase(generateForRoot(themes));

      Object.keys(themes).forEach((themeName) => {
        addBase(generateForTheme(themes, themeName));
      });
    };
  },

  function (options) {
    return {
      themes: options?.themes ?? [],
    };
  }
);

function generateForRoot(themes) {
  let defaultThemeName = Object.keys(themes)[0];

  return Object.entries(themes[defaultThemeName]).map(([colourName, value]) => {
    return {
      ":root": {
        [`--color-${colourName}`]: value,
      },
    };
  });
}

function generateForTheme(themes, themeName) {
  return Object.entries(themes[themeName]).map(([colourName, value]) => {
    return {
      [`[data-theme=${themeName}]`]: {
        [`--color-${colourName}`]: value,
      },
    };
  });
}

module.exports = multiThemePlugin;
