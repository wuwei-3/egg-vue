/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 14:37:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 14:38:48
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async user() {
    const { ctx } = this;
    ctx.body = 'hi, egg admin 1';
    console.log('ctx', ctx);
  }
  async log() {
    const { ctx } = this;
    ctx.body = 'hi, egg admin 2';
    console.log('ctx', ctx);
  }
}

module.exports = HomeController;
