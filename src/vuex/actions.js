
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/**
 * 获取文章列表
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 * @param  {Object} reqData          参数
 * @param  {Number} pageNo           页数
 * @param  {String} type             类型
 * @param  {String} keyWord          查询关键字
 */
export const getArticleList = ({ dispatch },reqData) => {
	reqData.pageSize = reqData.pageSize? reqData.pageSize: ''
	reqData.type = reqData.type? reqData.type: ''
	reqData.keyWord = reqData.keyWord? reqData.keyWord: ''
	const url = '/api/articlelist?pageNo='+reqData.pageNo+'&type='+reqData.type+'&keyWord='+reqData.keyWord+'&pageSize='+reqData.pageSize;

	return Vue.http.get(url).then((data) => {
        dispatch('GETARTICLELIST', data)
    }, (err) => {
        console.log(err)
    });
}

export const changeSearchValue = ({ dispatch } ) =>{
	dispatch('CHANGESEARCHVALUE')
}


export const getArticleDetails = ({ dispatch }, id ) => {

	return Vue.http.get('/api/articlelist/details/'+id).then((data) => {
		dispatch('ARTICLEDETAILS', data)
	})
}

export const changeCollectStatus = ({ dispatch }, status) => {
	dispatch('CHANGECOLLECTSTATUS', status)
}


export const fetchCollectList = ({ dispatch },reqData) => {
	reqData.pageSize = reqData.pageSize? reqData.pageSize: ''

	const url = '/api/collectlist?pageNo='+reqData.pageNo+'&pageSize='+reqData.pageSize;

	return Vue.http.get(url).then((data) => {
		console.log(data.body.list)
        dispatch('COLLECTLIST', data.body)
    }, (err) => {
        console.log(err)
    });
}

