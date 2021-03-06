/*
 * @Description: eslint valid-jsdoc: "off"
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-12-08 15:45:04
 */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    /* 关闭csrf */
    security: {
      csrf: {
        enable: false,
      },
    },
    /* 开发apk文件支持 */
    multipart: {
      fileExtensions: ['.apk'], //whitelist: [ '.png' ],
    },

    /* 统一异常处理 */
    onerror: {
      errorPageUrl: (err, ctx) => ctx.errorPageUrl || '/500',
    },
  });

  /* 文件上传限制 */
  config.multipart = {
    fileSize: '1000mb',
    whitelist () {
      return true;
    },
  };

  /* 开启数据库链接 */
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'egg',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634807007019_5794';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/news',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
