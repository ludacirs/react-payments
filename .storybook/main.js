const path = require("path");

module.exports = {
  stories: ["../src/components/", "../src/pages/"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules", "styles"];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "../src/styles/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@contexts": path.resolve(__dirname, "../src/contexts/"),
    };
    return config;
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
