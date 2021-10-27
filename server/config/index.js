module.exports = {
	port: 88,
	mongodb: {
		url: 'mongodb://localhost:27017/quark',
		options: {}
	},
	middleware:['handlerError'],
	jwt: {secret: 'huangwei9527'},
	crypto: {secret: '#*#*huangwei9527*#*#'},
	baseUrl: ''
}
