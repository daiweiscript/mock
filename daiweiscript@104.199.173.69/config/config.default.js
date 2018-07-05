'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529918225167_5126';
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => true,
    },
  };
  config.bodyParser={

    formLimit: '100mb',
    jsonLimit: '100mb',
  }
  // add your config here
  config.middleware = [];

  return config;
};
