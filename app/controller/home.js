/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 15:17:50
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // app.mysql.query(sql, values);
    console.log('ctx', ctx);
    this.app.mysql.query('select * from user');
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
