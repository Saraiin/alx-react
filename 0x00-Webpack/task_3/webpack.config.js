// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    header: './src/js/header.js',
    body: './src/js/body.js',
    footer: './src/js/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  devServer: {
    port: 8564,
    open: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
      template: './src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
  watchOptions: {
    poll: true,
  },
};

