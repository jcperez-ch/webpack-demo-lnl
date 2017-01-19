const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./frontend/index.js'],
  output: {
      filename: './build/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'stage-3']
          }
        }]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'less-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};
