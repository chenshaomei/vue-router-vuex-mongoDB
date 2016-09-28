import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * @param  {Object} articlelist    文章列表
 * @param  {Number} pageCount      页数
 * @param  {Boolean} nodata        是否有数据
 */

const state = {
	articlelist:[],
	pageCount:0,
	nodata:false,
	content:'',
	title: '',
	collect:'',
	collectdata:{}
	// searchtype:'',
	// searchkeyword:''
}

const mutations = {
	GETARTICLELIST (state,list) {
		console.log(list.data.list.length)	
		console.log(list.data.totalPage)	
		state.pageCount = list.data.totalPage;						 //页数
		state.articlelist = list.data.list;
		// state.articlelist = state.articlelist.concat(list.data.list) //列表
		// state.nodata = state.articlelist.length ? false : true ;     //是否有数据
	},

	// 改变搜索条件时 清空原来的数据
	CHANGESEARCHVALUE(state, value) {
		state.articlelist = [];
	},

	ARTICLEDETAILS(state, article) {
		state.title = article.data.article.title
		state.content = article.data.article.content
		state.collect = article.data.article.collect
	},

	CHANGECOLLECTSTATUS (state, status) {
		state.collect = status;
	},

	COLLECTLIST (state, data){
		console.log(data)
		state.collectdata = data
	}


}

const store = new Vuex.Store({
  state,
  mutations
})

// // 一下写法只能监听一个属性
// store.watch(
//     // 监听的属性 
//     (state) => state.articlelist,
//     // val改变后的state.chatList值
//     (val) => {
//         console.log('改变的: ', val);
//         const list = state.articlelist;
//         // state.articlelist = list.concat(val)
//     },
//     {
//         deep: true
//     }
// );

export default store;