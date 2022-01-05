const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UnoCSS = require('@unocss/webpack').default;
const { presetUno } = require('@unocss/preset-uno');

module.exports = (env, { mode = 'production' }) => {
  const isDev = mode === 'development';

  return {
    mode,
    output: {
      clean: true,
      publicPath: '',
    },
    cache: {
      type: 'filesystem',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react'],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new UnoCSS({
        include: [/\.js$/],
        exclude: [/node_modules/],
        presets: [presetUno()],
      }),
      !isDev && new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ].filter(Boolean),
  };
};
