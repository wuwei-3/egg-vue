/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 14:23:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 14:23:32
 */
module.exports = (app) => {
  app.router.get('/news/list', app.controller.news.list);
  app.router.get('/news/detail', app.controller.news.detail);
};
