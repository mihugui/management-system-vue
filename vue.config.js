module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "迷糊鬼个人生活";
      return args;
    });
  }
};
