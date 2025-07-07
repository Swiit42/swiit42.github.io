const path = require('path');
const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/home/' : '/',
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        assert: require.resolve('assert/'),
        util: require.resolve('util/'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    ]
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => tag.startsWith('Icon'),
        };
        return options;
      });
  },
};
