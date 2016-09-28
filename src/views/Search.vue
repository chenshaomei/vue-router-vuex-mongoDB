<template>
	<div>
		<div class="header search-top">
			<div class="header-left"><a class="fc-white" v-link="{path:'/index'}">返回</a></div>
			<div class="header-title"><input type="text" class="search-ipt" v-model="keyword"  placeholder="搜索职位"  >
			</div>
			<div class="header-right"><a class="fc-white" @click="search" v-link="{path:'/list'}">搜索</a></div>
		</div>

		<div class="search-type">
			<p class="til">猜你要搜</p>
			<div class="type-list" @click="chooseType">
				<a>html5</a>
				<a>javascript</a>
				<a>node</a>
				<a>jquery</a>
				<a>css3</a>
				<a>MongoDB</a>
			</div>
		</div>
	</div>
</template>

<script>
	
	import { changeSearchValue } from '../vuex/actions'
	import { getList, getPageCount, getDataStatus } from '../vuex/getters'
	
	export default {
		data(){
			return {
				type:'',
				keyword:''
			}
		},
		
		vuex:{
			actions:{
				changeSearchValue
			}
		},
		methods:{
			chooseType(ev){
				if(ev.target.tagName == 'A'){
					this.type = ev.target.innerHTML;
					localStorage.setItem('type',this.type);
					localStorage.setItem('keyword','');
					this.changeSearchValue();
					this.$router.go('/list')
				}
			},
			search(){
				console.log(this.keyword)
				localStorage.setItem('keyword',this.keyword);
				localStorage.setItem('type','');
				this.changeSearchValue()
			}
		}
	}
</script>

<style>

.header{
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #3f4553;
    text-align: center;
    z-index: 100;
    display: flex;display: -webkit-flex;display: -webkit-box;

}
.search{
    display: block;
    width: 92%;
    height: 28px;
    border-radius: 50px;
    background: #fff;
    margin: 8px auto 0;
    text-align: left;
    padding:5px 10px;
    font-size: 12px;
    color: #999;
    line-height: 18px;

}
	.header-left{width: 50px;z-index: 102;text-align: center;line-height: 44px;font-size: 13px;}
	.header-right{width: 50px;z-index: 102;text-align: center;line-height: 44px;font-size: 13px;}
	.header-title{width: 100%;flex:1;-webkit-flex:1;-webkit-box-flex:1;text-align: center;line-height: 44px;font-size: 16px;position: relative;}
	.search-ipt{
		width: 100%;
    	height: 28px;
    	border: 0;
    	border-radius: 100px;
    	padding: 5px 10px;
    	color: #999;
    	font-family: "微软雅黑";
    	outline: none;
	}
	.search-a{
	    display: block;
    	background: #fff;
    	margin-top: 8px;
    	text-align: left;
    	font-size: 12px;
    	line-height: 18px;
    	margin-right: 10px;
    	width: auto;
	}
	.fc-white{color: #fff;}
	.type{
		position: absolute;
    	top: 10px;
    	left: 60px;
    	width: 100px;
    	color: #999;
    	font-family: "微软雅黑";
    	font-size: 12px;
    	background: #fff;
    	height: 24px;
    	line-height: 24px;
    	text-align: left;
	}

	.search-type{padding: 44px 10px 20px;}
	.search-type .til{padding-top: 20px;padding-bottom: 10px;font-size: 12px;color: #000;}
	.type-list a{padding: 5px 10px; color: #37af72;background: #fff;border: 1px solid #eee;border-radius: 100px;display: inline-block;margin-bottom: 5px;margin-right: 5px;}
</style>