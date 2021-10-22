/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 14:44:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 14:44:48
 */
const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.ctx.db.query(
      'select * from user where uid = ?',
      uid
    );
    return user;
  }
}

module.exports = UserService;
