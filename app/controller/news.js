/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 14:37:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 14:37:35
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = 'hi, egg new 1';
    console.log('ctx', ctx);
  }
  async detail() {
    const { ctx } = this;
    ctx.body = 'hi, egg new 2';
    console.log('ctx', ctx);
  }
}

module.exports = HomeController;
