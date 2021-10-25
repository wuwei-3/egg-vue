/*
 * @Description: 统一接口地址
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 15:52:19
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  require('./router/index')(app);
  require('./router/new')(app);
  require('./router/admin')(app);
  require('./router/file')(app);
};
