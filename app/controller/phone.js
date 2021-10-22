/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 10:47:25
 */
'use strict';

const Controller = require('egg').Controller;

// 手机号校验

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 解密后的数据为
    ctx.body = { status: true, data: '', msg: '解密成功' };
  }
}

module.exports = HomeController;
