/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 15:49:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 15:49:00
 */
module.exports = (app) => {
  app.router.post('/saveFile', app.controller.file.saveFile);
};
