import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import common from './webpack.common';
import merge from 'webpack-merge';

export default merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].${process.env.npm_package_version}.css`,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
  output: {
    ...common.output,
    filename: `[name].${process.env.npm_package_version}.js`,
  },
} as any);
