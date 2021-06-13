var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
      },
      mode: 'development',

      devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 2705,
        overlay: true,
        writeToDisk: true,
        open: true,
      },

      module: {
        rules: [
    
          {
            test: require.resolve('jquery'),
            loader: 'expose-loader',
            options: {
              exposes: ['$', 'jQuery'],
            }
          },
    
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
                  {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                      publicPath: '../' 
                    }
                  },
                  'css-loader',
                  'sass-loader'
                ]
          },
          
          {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [
              {
                loader: "file-loader", 
                options: {
                  name: '[name].[ext]',
                  outputPath: "images",
                }
              }
            ]
          },
    
          {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: [
              {
                loader: "file-loader", 
                options: {
                  name: '[name].[ext]',
                  outputPath: "fonts",
                  esModule: false,
                }
              }
            ]
          },
    
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                // options: {
                //   minimize: true,
                // }
              }
            ]
          }
        ]
      },

      plugins: [
          new HtmlWebpackPlugin({
              filename: "index.html",
              template: "./src/index.html",
          }),
          new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
          }),
          new HtmlWebpackPlugin({
            filename: "menu.html",
            template: "./src/menu.html",
          }),
          new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html",
          }),
          new HtmlWebpackPlugin({
            filename: "jobs.html",
            template: "./src/jobs.html",
          }),
          new HtmlWebpackPlugin({
            filename: "privacy.html",
            template: "./src/privacy.html",
          }),
          new HtmlWebpackPlugin({
            filename: "margherita.html",
            template: "./src/margherita.html",
          }),
          new HtmlWebpackPlugin({
            filename: "veggie.html",
            template: "./src/veggie.html",
          }),
          new HtmlWebpackPlugin({
            filename: "chicken.html",
            template: "./src/chicken.html",
          }),

          new MiniCssExtractPlugin({filename: "css/style.css"}),

          new OptimizeCssAssetsPlugin({}),
        ],
};