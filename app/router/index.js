/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 14:24:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 14:35:39
 */
module.exports = (app) => {
  app.router.get('/', app.controller.home.index);
  app.router.post('/home', app.controller.phone.index);
};
