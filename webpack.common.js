 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: "./src/template.html",
     }),
     new MiniCssExtractPlugin({
       filename: '[name].css',
       chunkFilename: '[id].css',
     }),
   ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
      minimize: true,
      minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      ],
  },
 };