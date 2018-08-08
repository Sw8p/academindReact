const path = require('path');

const DIST_DIR = path.resolve(__dirname, "./dist");
const SRC_DIR = path.resolve(__dirname, "./src");

module.exports = {
  mode: 'development',
  entry: SRC_DIR + '/app/index.js',
  devServer: {
    contentBase: DIST_DIR
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR + "/app",
    publicPath : "/app"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'
            ]
          }
        }
      }
    ]
  }
};
