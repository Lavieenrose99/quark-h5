/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = app => ({
	/**
	 * 我的页面列表
	 * @returns {Promise<void>}
	 */
	async myPages() {
		const { ctx, $service, $helper } = app;
		let {pageMode, type} = ctx.request.query;
		const pages = await $service.page.getMyPages(pageMode, type);
		const myPageCount = await $service.page.getMyPagesCount(pageMode);
		const myCooperationPageCount = await $service.page.getCooperationPagesCount(pageMode);
		$helper.returnBody(true, {
			pages: pages,
			myPageCount: myPageCount,
			myCooperationPageCount: myCooperationPageCount
		})
	},
	/**
	 * 获取我的模板列表
	 * @returns {Promise<void>}
	 */
	async getMyTemplates(){
		const { ctx, $service, $helper } = app;
		let {pageMode} = ctx.request.query;
		const pages = await $service.page.getMyTemplates(pageMode);
		$helper.returnBody(true, pages)
	},
	/**
	 * 创建页面
	 * @returns {Promise<void>}
	 */
	async create(){
		const { ctx, $service, $helper } = app;
		let newPageData = ctx.request.body;
		const page = await $service.page.create(newPageData);
		$helper.returnBody(true, page)
	},
	/**
	 * 修改更新页面
	 * @returns {Promise<void>}
	 */
	async updatePage(){
		const { ctx, $service, $helper } = app;
		let {pageData} = ctx.request.body;
		await $service.page.update(pageData);
		$helper.returnBody(true)
	},
	/**
	 * 删除页面
	 */
	async deletePage() {
		const { ctx, $service, $helper } = app;
		let {id} = ctx.request.body;
		await $service.page.deletePage(id);
		$helper.returnBody(true)
	},
	/**
	 * 复制页面
	 * @returns {Promise<void>}
	 isPublish: false,
	 isTemplate: false,
	 members: [],
	 author: author,
	 */
	async copyPage(){
		const { ctx, $service, $helper } = app;
		let {id} = ctx.request.body;
		let page = await $service.page.getPageDetail(id);
		page._id = undefined;
		page.isPublish = false;
		page.isTemplate = false;
		page.members = [];
		let newPage = await $service.page.create(page);
		$helper.returnBody(true, {_id: newPage._id});
	},

	/**
	 *  发布页面
	 * @returns {Promise<void>}
	 */
	async publish(){
		const { ctx, $service, $helper } = app;
		let {id} = ctx.request.body;
		await $service.page.setPublish(id);
		$helper.returnBody(true);
	},
	/**
	 * 设为我的模板
	 * @returns {Promise<void>}
	 */
	async setTemplate(){
		const { ctx, $service, $helper } = app;
		let userData = ctx.userData
		let {id} = ctx.request.body;
		let page = await $service.page.getPageDetail(id);
		page = page.toObject();
		page._id = undefined;
		page.isPublish = false;
		page.isTemplate = true;
		page.members = [];
		page.author = userData._id;
		let newPage = await $service.page.create({...page});
		$helper.returnBody(true, {_id: newPage._id});
	},
	/**
	 * 获取模板市场所有模板
	 * @returns {Promise<void>}
	 */
	async getPublishTemplates(){
		const { ctx, $service, $helper } = app;
		let {pageMode} = ctx.request.query;
		const pages = await $service.page.getPublishTemplates(pageMode);
		$helper.returnBody(true, pages)
	},
	/**
	 * 获取页面详情
	 * @returns {Promise<void>}
	 */
	async pageDetail(){
		const { ctx, $service, $helper } = app;
		let {pageId} = ctx.request.query;
		const pageData = await $service.page.getPageDetail(pageId);
		$helper.returnBody(true, pageData)
	},
	/**
	 * 渲染页面
	 * @returns {Promise<void>}
	 */
	async view(){
		console.log(121)
		const { ctx } = app;
		// let pageId = ctx.params._id;
		// const pageData = await $service.page.getPageDetail(pageId);
		const pageData =  {
			shareConfig: {
			  coverImage: '',
			  title: '这是#分享者#的大力推荐',
			  description: '这是#分享者#大力推荐的H5'
			},
			title: '未命名场景',
			coverImage: '',
			description: '我用FreeDesign，快来看看吧。',
			script: '',
			width: 375,
			height: 644,
			pageMode: 'h5',
			flipType: 0,
			slideNumber: false,
			status: 1,
			isPublish: true,
			isTemplate: false,
			members: [],
			version: 1,
			_id: '620c9e7bd88cbe4cc2b70bfb',
			pages: [
			  {
				uuid: '8e0488de-fafe-42a5-8e1b-f2ffa30d8c3d',
				name: '',
				elements: [
				  {
					uuid: 'c4b580ba-aaf6-4e43-b15d-b12f1f68bc0e',
					elName: 'qk-image',
					animations: [],
					commonStyle: {
					  position: 'absolute',
					  width: 296,
					  height: 167,
					  top: 81,
					  left: 44,
					  rotate: 0,
					  paddingTop: 0,
					  paddingLeft: 0,
					  paddingRight: 0,
					  paddingBottom: 0,
					  marginTop: 0,
					  marginLeft: 0,
					  marginRight: 0,
					  marginBottom: 0,
					  borderWidth: 0,
					  borderColor: '',
					  borderStyle: 'solid',
					  borderRadius: 0,
					  boxShadow: '',
					  fontSize: 16,
					  fontWeight: 500,
					  lineHeight: 1.4,
					  letterSpacing: 0,
					  textAlign: 'center',
					  color: '#000000',
					  backgroundColor: '',
					  backgroundImage: '',
					  backgroundSize: 'cover',
					  opacity: 1,
					  zIndex: 1
					},
					events: [],
					propsValue: {
					  imageSrc: 'http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg'
					},
					valueType: 'String'
				  },
				  {
					uuid: 'e1bc088d-2673-4042-a436-f46a5e9342da',
					elName: 'qk-rectangle-border',
					animations: [],
					commonStyle: {
					  position: 'absolute',
					  width: 120,
					  height: 100,
					  top: 341,
					  left: 64,
					  rotate: 0,
					  paddingTop: 0,
					  paddingLeft: 0,
					  paddingRight: 0,
					  paddingBottom: 0,
					  marginTop: 0,
					  marginLeft: 0,
					  marginRight: 0,
					  marginBottom: 0,
					  borderWidth: 2,
					  borderColor: '#999999',
					  borderStyle: 'solid',
					  borderRadius: 0,
					  boxShadow: '',
					  fontSize: 16,
					  fontWeight: 500,
					  lineHeight: 1.4,
					  letterSpacing: 0,
					  textAlign: 'center',
					  color: '#000000',
					  backgroundColor: '',
					  backgroundImage: '',
					  backgroundSize: 'cover',
					  opacity: 1,
					  zIndex: 2
					},
					events: [],
					valueType: 'String'
				  },
				  {
					uuid: 'f5a676b9-f83a-45ee-97f4-822ebd024e23',
					elName: 'qk-button',
					animations: [],
					commonStyle: {
					  position: 'absolute',
					  width: 140,
					  height: 40,
					  top: 273,
					  left: 102,
					  rotate: 0,
					  paddingTop: 10,
					  paddingLeft: 0,
					  paddingRight: 0,
					  paddingBottom: 10,
					  marginTop: 0,
					  marginLeft: 0,
					  marginRight: 0,
					  marginBottom: 0,
					  borderWidth: 1,
					  borderColor: '#999999',
					  borderStyle: 'solid',
					  borderRadius: 4,
					  boxShadow: '',
					  fontSize: 16,
					  fontWeight: 500,
					  lineHeight: 1.4,
					  letterSpacing: 0,
					  textAlign: 'center',
					  color: '#000000',
					  backgroundColor: '',
					  backgroundImage: '',
					  backgroundSize: 'cover',
					  opacity: 1,
					  zIndex: 3
					},
					events: [],
					propsValue: {
					  text: '按 钮'
					},
					valueType: 'String'
				  }
				],
				commonStyle: {
				  backgroundColor: '',
				  backgroundImage: '',
				  backgroundSize: 'cover'
				}
			  }
			],
			author: '620b8e59d88cbe4cc2b70bea',
			created: '2022-02-16T06:49:31.067Z',
			updated: '2022-02-16T06:50:07.069Z',
			__v: 0
		  }
		let pageMode = {
			'h5': 'h5-swiper',
			'longPage': 'h5-long',
			'relativePage': 'h5-relative',
			'pc': 'pc'
		};
		ctx.status = 200;
		await ctx.render(pageMode[pageData.pageMode], {pageData: pageData})
		console.log(pageMode)
	}
})
