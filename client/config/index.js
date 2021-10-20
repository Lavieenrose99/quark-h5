/*
 * @Author: your name
 * @Date: 2021-10-11 18:47:12
 * @LastEditTime: 2021-10-19 22:35:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /quark-h5/client/config/index.js
 */
/**
 * 公共配置文件
 */
import $config from '../../config'


const configDict = {
	development: {
		baseURL: 'http://39.97.3.27:4000'
	},
	production: {
		baseURL: $config.baseURL
	}
}

const currentConfigKey = process.env.NODE_ENV
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'development'

const configObj = {
	isDevelop: (isDev || isTest),
	...configDict[currentConfigKey],
	// h5模式宽高
	canvasH5Width: 375,
	canvasH5Height: 644,
	pageModeList: [{
		value: 'h5',
		label: 'H5',
		disabled: false
	}, {
		value: 'longPage',
		label: '长页H5',
		disabled: false
	}, {
		name: 'relativePage',
		label: '排版图文',
		disabled: true
	}, {
		value: 'pc',
		label: 'PC页面',
		disabled: true
	}]
}

export default configObj
