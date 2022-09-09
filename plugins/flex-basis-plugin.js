let plugin = require("tailwindcss/plugin");

let flexBasisPlugin = plugin.withOptions(
  function (options) {
    return function ({ addUtilities }) {
      let values = options?.values ?? [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

      values.forEach((value) => {
        addUtilities({ [`.flex-basis-${value}`]: { flexBasis: `${value}%` } });
      });
    };
  },

  function (options) {
    return {
      values: options?.values ?? [],
    };
  }
);

module.exports = flexBasisPlugin;
