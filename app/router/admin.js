/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 14:23:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 14:36:07
 */
module.exports = (app) => {
  app.router.get('/admin/user', app.controller.admin.user);
  app.router.get('/admin/log', app.controller.admin.log);
};
