<template>
	<div class="article-details">
		<div class="header">
			<div class="header-left"><a class="fc-white" href="javascript:history.go(-1);">返回</a></div>
			<div class="header-title">详情</div>
			<div class="header-right"></div>
		</div>
		<div class="article-inn">
			<span :class="collectActive ?'sc sc-active': 'sc'" @click="collect"><i></i>收藏</span>
			<h2>{{title}}</h2>
			<div>
				{{{ content | marked }}}
				<!-- {{{article.content | marked }}} 这是错误的，要直接返回字符串，不能返回对象再读取，否则marked报错-->
			</div>
		</div>
	</div>
</template>

<script>
	import marked from '../js/marked.min'
	import hljs from '../js/highlight.min'
	import { getArticleDetails, changeCollectStatus } from '../vuex/actions'
	import { getList } from '../vuex/getters'
	// 加载样式文件
	import '../css/tomorrow-night-bright.css'

	export default {
		route:{
			data({ to: { params: { id } } }){
				this.getArticleDetails(id);
			}
		},

		// 定义为过滤器 
		filters:{
			marked
		},
		vuex:{
			actions:{
				getArticleDetails,
				changeCollectStatus
			},
			getters:{
				content: state =>state.content,
				title : state =>state.title,
				collectActive: state => state.collect
			}
		},

		// 实时监测
		watch: {
            content: hljs.initHighlighting
        },

        // 初始化高亮插件
        ready(){
        	hljs.initHighlighting()
            hljs.initHighlighting.called = false
        },

        methods:{
        	collect(){
        		let reqData = {};
        		const id = this.$route.params.id
        		let status = !this.collectActive;
        		reqData.id = id;

        		if(this.collectActive){
        			reqData.collectActive = false;
        		}else{
	        		reqData.collectActive = true;
        		}

        		// 要改变store中state,即getter 获得的值，需要通过actions来改变
        		this.changeCollectStatus(status);

        		this.$http.post('/api/collect', reqData).then((data)=>{
        			if(data.body.success){
        				if(this.collectActive){
        					alert('收藏成功')
        				}else{
        					alert('已取消收藏')
        				}	
        			}
        			
        		})
        	}
        }

        //两种方法：
  //       data(){
		// 	return {
		// 		title:'',
		// 		content:''
		// 	}
		// },
		// computed:{
		// 	content: {
		// 		get(){
		// 			return marked('>this.article.content')
		// 		}
		// 	}
		// },
  //       created(){
  //           let id = this.$route.params.id
  //           this.$http.get('/api/articlelist/details/'+id).then((data) => {
  //           	this.title = data.data.article.title;
		// 		this.content = data.data.article.content;
		// 		console.log(data.data.article)
		// 	})

  //       }
	}
</script>

<style scoped>
	.sc{ display: block; width: 100%; text-align: right; font-size: 15px; color: #b1b2b4; padding-bottom: 10px; }
	.sc img{ width: 20px; position: relative; top: 3px; right: 5px; }
	.sc i {padding:5px 10px;background: url(../assets/images/star-mr.png) no-repeat center center; background-size: 20px;margin-right: 5px;}
	.sc-active {color: #24bdb6;}
	.sc-active i {background: url(../assets/images/star-xz.png) no-repeat center center; background-size: 20px;}

	.article-details{padding-top: 44px;}
	.header-title{color: #fff;}
	.article-details .article-inn{
		padding: 10px;
		line-height: 22px;
	}
	.article-details h2{font-size: 16px;line-height: 32px;text-align: center;padding-bottom: 20px;padding-top: 10px;}
</style>
