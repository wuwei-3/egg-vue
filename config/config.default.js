/*
 * @Description: eslint valid-jsdoc: "off"
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 15:01:59
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
    /* mysqlp 配置 */
    mysql: {
      client: {
        // host
        host: '47.98.55.236',
        // port
        port: '3306',
        // username
        user: 'root',
        // password
        password: 'root',
        // database
        database: 'egg',
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634807007019_5794';

  // add your middleware config here
  config.middleware = [];

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
