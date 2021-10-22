/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 15:36:00
 */
'use strict';

const Controller = require('egg').Controller;

// 手机号校验

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let { name, age } = ctx.request.body;
    let users = await this.app.mysql.insert('user', { name: name, age: age });
    console.log('user', users);
    // await conn.commit();  //提交事务
    // await conn.rollback();//回滚事务
    ctx.body = { status: true, data: users, msg: '新增成功' };
  }
}

module.exports = HomeController;
