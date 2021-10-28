/*
 * @Author: your name
 * @Date: 2021-10-11 18:47:12
 * @LastEditTime: 2021-10-27 16:34:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /freedes/server/config/index.js
 */
module.exports = {
	port: 89,
	mongodb: {
		url: 'mongodb://localhost:27017/quark',
		options: {}
	},
	middleware:['handlerError'],
	jwt: {secret: 'huangwei9527'},
	crypto: {secret: '#*#*huangwei9527*#*#'},
	baseUrl: ''
}
