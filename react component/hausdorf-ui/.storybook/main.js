module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config) => {
    // Use @svgr/webpack instead of file loader
    const fileLoader = config.module.rules.find(
      (rule) => rule.loader && rule.loader.indexOf('file-loader') >= 0,
    );
    const fileLoaderExp = fileLoader.test.source.replace('svg|', '');
    fileLoader.test = new RegExp(fileLoaderExp);

    config.module.rules.unshift({
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: '/node_modules/',
    });
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
