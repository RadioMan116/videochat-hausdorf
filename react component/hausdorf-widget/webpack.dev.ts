import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common from './webpack.common';
import merge from 'webpack-merge';

export default merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '../../deployments/whitewater-dev.com.js',
          to: 'env.js',
        },
      ],
    }),
  ],
} as any);
