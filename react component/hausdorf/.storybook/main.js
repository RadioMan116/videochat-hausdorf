const { widgetWebpackRules } = require('@videoforce/webpack-widgets');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: widgetWebpackRules() },
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.ts', '.tsx'],
      },
    };
  },
};
