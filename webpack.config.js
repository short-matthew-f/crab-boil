const path = require('path')

module.exports = {
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'server/public'),
    filename: 'bundle.js'
  }
};
