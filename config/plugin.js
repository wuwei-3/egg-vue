/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-21 17:05:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 15:27:47
 */
'use strict';

// 使用 mysql 插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

/* session配置 */
exports.session = true; // enable by default
