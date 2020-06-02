import * as path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';
import { HtmlWebpackLinkTypePlugin } from 'html-webpack-link-type-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
  entry: {
    index: path.join(__dirname, 'src', 'index.tsx'),
  },
  target: 'web',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      inject: false,
      template: 'src/template.html',
    }),
    new HtmlWebpackLinkTypePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VideoforceWidget',
    libraryTarget: 'umd',
  },
};

export default config;
