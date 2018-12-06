const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

module.exports = (env = { development: true }) => {
  const devMode = env.development;
  return {
    entry: [path.resolve('src', 'index.tsx')],
    output: {
      filename: '[name].[hash:6].js',
      path: path.resolve('dist'),
    },

    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        pages: path.resolve(__dirname, 'src/pages'),
        store: path.resolve(__dirname, 'src/store'),
        common: path.resolve(__dirname, 'src/common'),
        components: path.resolve(__dirname, 'src/components'),
        reducers: path.resolve(__dirname, 'src/store/reducers'),
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.html'),
        title: 'TypeScript',
        filename: 'index.html',
      }),
      new webpack.DefinePlugin({
        INSTA_TOKEN: JSON.stringify(process.env.INSTA_TOKEN),
      }),

      ...(devMode
        ? [new webpack.HotModuleReplacementPlugin()]
        : [
            new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
            new MiniCssExtractPlugin({
              filename: '[name].css',
            }),
          ]),
    ],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        },

        {
          test: /\.js$/,
          loader: 'source-map-loader',
          enforce: 'pre',
        },

        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'node_modules'),
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },

        {
          test: /\.(sa|sc|c)ss$/,
          exclude: path.resolve(__dirname, 'node_modules'),
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
              },
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
        },

        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'media/[name].[ext]',
          },
        },
      ],
    },

    optimization: {
      namedModules: true,
      noEmitOnErrors: true,
      concatenateModules: true,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },

    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },

    devServer: {
      compress: true,
      host: 'localhost',
      port: 9000,
      historyApiFallback: true,
    },
  };
};
