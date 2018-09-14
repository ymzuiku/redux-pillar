const fs = require('fs-extra');
const tip = require('./webpack.tip')();
const resolve = require('path').resolve;

module.exports = {
  target: 'web',
  mode: tip.isDev ? tip.mode.development : tip.mode.production,
  devtool: tip.isDev ? tip.devtool.sourceMap : tip.devtool.none,
  entry: {
    index: tip.paths.entry,
  },
  output: {
    libraryTarget: 'umd',
    path: tip.paths.output,
    pathinfo: true,
    filename: 'index.js',
    chunkFilename: '[name]_.chunk.js',
  },
  resolve: {
    extensions: tip.resolve.extensions,
    alias: tip.resolve.alias,
    plugins: [],
  },
  // webpack4默认的chunks参数
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  externals: {},
  module: {
    rules: [
      tip.module.rules.eslint,
      tip.module.rules.cssLoader,
      tip.module.rules.stylusLoader,
      tip.module.rules.urlLoader,
      tip.module.rules.fileLoader,
      tip.module.rules.sourceMapLoader,
      tip.module.rules.tsLodaer,
      tip.module.rules.babelLoaderBuild,
    ],
  },
  devServer: tip.devServer,
  plugins: [
    tip.plugins.DefinePlugin,
    tip.plugins.FastUglifyJsPluginProd,
    tip.plugins.CopyWebpackPlugin,
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};
