const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');

const outputPath = path.resolve(__dirname, '../static/');

module.exports = {
  entry: {
    main1: path.resolve(__dirname, 'app/main1.js'),
    main2: path.resolve(__dirname, 'app/main2.js'),
    main3: path.resolve(__dirname, 'app/main3.js')
  },
  output: {
    filename: 'javaScript/[name].[chunkhash].bundle.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        include: [path.resolve(__dirname, 'app')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: path.resolve(__dirname, 'node_modules/babel-loader'),
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'allCommon',
      chunks: ['main1', 'main2', 'main3']
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: '23Common', chunks: ['main2', 'main3'] }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
    new CleanObsoleteChunks(),
    new webpack.HashedModuleIdsPlugin(),
    new AssetsPlugin({ filename: 'assetMapping.json', path: path.resolve(__dirname, '../') }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.css']
  },
  watch: true
};
