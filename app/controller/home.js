/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 15:32:37
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // app.mysql.query(sql, values);
    // let users = await this.app.mysql.get('user', { id: 1 });

    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
