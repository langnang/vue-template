module.exports = {
  outputDir: "dist",
  publicPath:
    process.env.NODE_ENV === "production" ? "/{{name}}/" : "/",
  devServer: {
    port: 8080, // 自定义端口
  },
  pluginOptions: {
    i18n: {
      locale: "zh-CN",
      fallbackLocale: "zh-CN",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
};
