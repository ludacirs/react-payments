const path = require('path');

module.exports = {
  "stories": ['../src/components/', '../src/pages/'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async config => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules', 'styles'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, '../src/styles/'),
      '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules/')
    };
    return config;
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}