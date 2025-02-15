module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/home/' : '/',
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
