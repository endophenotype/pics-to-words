const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
      publicPath: '/',
      filename: 'bundle.js',
  },
  entry: './src/pages/index.js',
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: [
                          ['@babel/preset-env', { modules: false }],
                          '@babel/preset-react',
                      ],
                      plugins: ['@babel/plugin-transform-modules-commonjs'],
                  },
              },
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
          },
          {
              test: /\.(png|jpe?g|gif|svg)$/i,
              type: 'asset/resource',
          },
      ],
  },
  resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
          '@': path.resolve(__dirname, 'src'),
      },
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'public/index.html',
      }),
  ],
  devtool: 'inline-source-map',
  devServer: {
      static: {
          directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      open: true,
      hot: true,
      devMiddleware: {
          publicPath: '/',
      },
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
  },
};