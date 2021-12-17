/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 15:48:00
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-12-09 13:50:22
 */
'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

let uploadPath = '../../app/public/upload'; // 默认存储路径

class HomeController extends Controller {
  /* 删除文件 */
  async deleteFile () { }

  /* 文件保存 */
  async saveFile () {
    const { ctx } = this;
    const stream = await ctx.getFileStream(); // multipart() 接收多个文件
    const filename = stream.filename;
    const target2 = path.join(__dirname, uploadPath);
    const target = path.join(__dirname, uploadPath, filename);
    /* 判断文件夹是否存在 */
    if (!fs.existsSync(target2)) {
      fs.mkdirSync(target2);
    }
    /* 判断文件是否存在 */
    try {
      let access = await this.isFileExisted(target);
      if (access == 'existed') {
        return (ctx.body = { msg: '上传失败,文件已存在', filename: filename });
      }
      // 遇到异常主动处理
    } catch (error) { }
    // 写入流
    const writeStream = fs.createWriteStream(target);
    let res = await this.saveStream(stream, writeStream);
    writeStream.end(); // 保存后关闭流
    if (res) {
      ctx.body = { msg: '上传成功', filename: filename };
    } else {
      ctx.body = { msg: '上传失败', filename: filename };
      ctx.status = 500;
    }
  }
  /* 判断文件是否存在 */
  async isFileExisted (target) {
    return new Promise(function (resolve, reject) {
      fs.access(target, (err) => {
        if (err) {
          reject();
        } else {
          resolve('existed');
        }
      });
    });
  }

  /* 文件上传 */
  async saveStream (stream, writeStream) {
    return new Promise((res, rej) => {
      stream
        .pipe(writeStream)
        .on('finish', () => {
          res(true);
        })
        .on('error', () => {
          rej(false);
        });
    });
  }
}

module.exports = HomeController;
