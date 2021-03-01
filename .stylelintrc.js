module.exports = {
  plugins: ["stylelint-order"],
  extends: [
    "stylelint-config-standard",
  ],
  ignoreFiles: ["**/node_modules/**"],
  rules: {
    indentation: 2,
    "string-quotes": "single",
    "order/properties-alphabetical-order": true,
  },
};
