<template>
    <div>
        <div class="header">
        	<div class="header-left"><a class="fc-white" v-link="{path:'/index'}">返回</a></div>
        	<div class="header-title"><a class="search-ipt search-a" v-link="{path:'/search'}">搜索文章/问题</a></div>
        </div>
        <div class="wrap">
            <artli :articlelist="list" :home="false"></artli>
        </div> 
        <myfooter :chooseindex="1"></myfooter>  
    </div>
</template>

<script>
import store from '../vuex/store'
import Artli from '../components/Artli';
import Myfooter from '../components/Myfooter';
import { getArticleList } from '../vuex/actions'


export default {
	route:{
		data(){

			let type = '';
			let keyword = '' ;
			// 用query判断是否是从首页进来
			if(this.$route.query.show !='all'){
				type = localStorage.getItem('type') ;
				keyword = localStorage.getItem('keyword') ;
			}
			const reqData = {
				pageNo:1,
				type:type,
				keyWord:keyword 
			}

			this.getArticleList(reqData);
		}
	},
	ready(){
		console.log( document.referrer)
	},
	components:{
		Artli,
		Myfooter
	},
	vuex:{
		actions:{
			getArticleList
		},
		getters:{
			list: state => state.articlelist
		}
	}
}

</script>