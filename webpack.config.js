const path = require('path');

module.exports = {
  bail: true,
  stats: 'detailed',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'ui-kit.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@gulag/ui-kit',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'prop-types': 'prop-types',
    'styled-components': 'styled-components',
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            noquotes: true
          }
        }
      }
    ]
  }
};
