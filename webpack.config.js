const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = (env = { development: true }) => {
  const devMode = env.development;
  return {
    entry: [path.resolve('src', 'index.tsx')],
    output: {
      filename: '[name].[hash:6].js',
      path: path.resolve('dist')
    },

    devtool: "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [

      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.html'),
        title: 'TypeScript',
        filename: 'index.html',
      }),

      ...(
        devMode
          ? [
            new webpack.HotModuleReplacementPlugin(),
          ]
          : [
            new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
            new MiniCssExtractPlugin({
              filename: "[name].css",
            }),
          ]
      ),
    ],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.js$/,
          loader: "source-map-loader",
          enforce: "pre",
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true,
                alias: {
                  common: path.resolve(__dirname, 'src/common'),
                },
                importLoaders: 3,
                localIdentName: '[name]_[local]__[hash:base64:5]',
              }
            },
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: path.resolve(__dirname, 'src/common/css/variables/**/*.scss'),
              },
            },
          ],
        }
      ]
    },

    // optimization: {
    //   namedModules: true,
    //   noEmitOnErrors: true,
    //   concatenateModules: true,
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.css$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },

    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },

    devServer: {
      compress: true,
      open: true,
      host: 'localhost',
      port: 3000,
    }
  };
};
