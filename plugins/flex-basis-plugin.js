let plugin = require("tailwindcss/plugin");

let flexBasisPlugin = plugin(function ({ addBase, addUtilities }) {
  let values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  values.forEach((value) => {
    addUtilities({ [`.flex-basis-${value}`]: { flexBasis: `${value}%` } });
  });
});

module.exports = flexBasisPlugin;
