import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	staffInfo: {},

	// 所有的需要显示tag的页面router
	tagsList: [],
	// 缓存的已打开过页面
	pageOpenedList: [{
      title: '苹果',
      path: 'manage/testApple',
      name: 'testApple',
	}],
	cachePage: [],
	
	currentPageName: '',
	// 面包屑数组
	currentPath: [{
		title: '苹果',
		path: 'manage/testApple',
		name: 'testApple',
	}],
	// 在这里定义你不想要缓存的页面的name属性值
	dontCache: [],
	openName:'',
	concatRouter:'',
}

export default new Vuex.Store({
	state,
	mutations,
})