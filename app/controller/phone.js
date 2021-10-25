/*
 * @Description:
1.插入
await this.app.mysql.insert('users', {
    name: 'Jack',
    age: 18
  })
2.查询
  const result = await this.app.mysql.select('users', {
    columns: ['id', 'name'], //查询字段，全部查询则不写，相当于查询*
    where: {
        name: 'Jack'
    }, //查询条件
    orders: [
        ['id', 'desc'] //降序desc，升序asc
    ],
    limit: 10, //查询条数
    offset: 0 //数据偏移量（分页查询使用）
  })
3.修改
const result = await this.app.mysql.update('users', {
      age: 20 //需要修改的数据
  }, {
      where: {
        id: 1
      } //修改查询条件
  });
 4.删除
  const result = await this.app.mysql.delete('users', {
    name: 'Jack'
  })

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
    // let users = await this.app.mysql.insert('user', { name: name, age: age });
    let users = await this.app.mysql.select('user', { id: 15 });

    console.log('user', users);
    // await conn.commit();  //提交事务
    // await conn.rollback();//回滚事务
    ctx.body = { status: true, data: users, msg: '新增成功' };
  }
}

module.exports = HomeController;
