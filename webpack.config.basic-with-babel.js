const webpack = require('webpack');

module.exports = {
  entry: './basic-with-babel/index.js',
  output: {
      filename: './dist/basic-with-babel.bundle.js'
  },
  resolve: {
    extensions: ['.js']
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
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
