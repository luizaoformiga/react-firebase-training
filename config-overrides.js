const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    components: path.resolve(__dirname, "src/components"),
    services: path.resolve(__dirname, "src/services"),
    routes: path.resolve(__dirname, "src/routes"),
    pages: path.resolve(__dirname, "src/pages"),
    __tests__: path.resolve(__dirname, "src/__tests__"),
    helpers: path.resolve(__dirname, "src/helpers"),
    assets: path.resolve(__dirname, "src/assets"),
    styles: path.resolve(__dirname, "src/styles"),
  })
);
