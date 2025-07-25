/** @type {import("@babel/core").ConfigFunction} */
module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
      ["@babel/plugin-transform-runtime", { regenerator: true }],
      "@babel/plugin-transform-async-generator-functions",
    ],
  };
};
