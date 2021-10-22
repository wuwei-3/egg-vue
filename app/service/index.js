/*
 * @Description: 这里用于处理复杂逻辑
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2021-10-22 14:15:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 14:16:24
 */
// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const { data: idList } = await this.ctx.curl(
      `${serverUrl}/topstories.json`,
      {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`,
        },
        dataType: 'json',
      }
    );

    // parallel GET detail
    const newsList = await Promise.all(
      Object.keys(idList).map((key) => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );
    return newsList.map((res) => res.data);
  }
}

module.exports = NewsService;
