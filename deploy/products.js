/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: your name
 * @Date: 2021-10-26 10:47:53
 * @LastEditTime: 2021-10-26 13:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /FreeDesign/deploy/product.js
 */

/*
 *读取env环境变量
 */
const fs = require('fs');
const path = require('path');
// env 文件 判断打包环境指定对应的服务器id
const envfile = process.env.NODE_ENV === 'prod' ? '../.env.prod' : '../.env.test';
// env环境变量的路径
const envPath = path.resolve(__dirname, envfile);
// env对象
const envObj = parse(fs.readFileSync(envPath, 'utf8'));
const SERVER_ID = parseInt(envObj.VUE_APP_SERVER_ID);

function parse(src) {
  // 解析KEY=VAL的文件
  const res = {};
  src.split('\n').forEach(line => {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    // eslint-disable-next-line no-useless-escape
    const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1];
      let value = keyValueArr[2] || '';

      // expand newlines in quoted values
      const len = value ? value.length : 0;
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n');
      }

      // remove any surrounding quotes and extra spaces
      value = value.replace(/(^['"]|['"]$)/g, '').trim();

      res[key] = value;
    }
  });
  return res;
}

/*
  *定义多个服务器账号 及 根据 SERVER_ID 导出当前环境服务器账号
  */
const SERVER_LIST = [
  {
    id: 0,
    name: '生产环境',
    domain: 'www.test.com', // 域名
    host: '39.97.3.27', // ip
    port: 22, // 端口
    username: 'root', // 登录服务器的账号
    password: 'Htc1382980123', // 登录服务器的账号
    path: '/var/www/html/dist'// 发布至静态服务器的项目路径
  },
  {
    id: 1,
    name: '正式环境',
    domain: 'prod.xxx.com',
    host: '39.97.3.27',
    port: 22,
    username: 'root',
    password: 'Htc1382980123',
    path: '/var/www/html/dist'
  }
];

module.exports = SERVER_LIST[SERVER_ID];
