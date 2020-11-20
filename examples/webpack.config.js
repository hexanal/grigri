const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  mode: env.NODE_ENV,
  devtool: !env.production && 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/i,
        exclude: /(node_modules)/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
              publicPath: 'assets/images',
              name: () => '[name].[ext]'
            },
          },
          { loader: 'image-webpack-loader' }
        ]
      },
    ]
  },

  entry: {
    'app.js': './src/js/index.js',
  },

  output: {
    filename: 'app.js',
    publicPath: 'dist',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        js: {
          name: 'js',
          test: /\.js$/,
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
        css: {
          name: 'css',
          test: /\.s?css$/,
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      hmr: env.NODE_ENV === 'development'
    })
  ],

});
