<template>
	<div>
		<div>
			<div class="top-part">
				<div class="avatar"><img src="../assets/images/my-avatar.png" alt=""></div>
				<p class="username" v-if="username">{{username}}</p>

				<div class="unlogin" v-if="!username">
					<p>请登录，收藏你喜欢的文章</p>
					<a class="login" v-link="{path:'/login'}">登陆</a>
				</div>
			</div>
			<div class="my-list">
				<ul>
					<li @click="checkCollect"><a><img src="../assets/images/star.png" alt=""><span>我的收藏</span></a></li>
					<li><a><img class="bi-ico" src="../assets/images/clipboard.png" alt=""><span>我的笔记</span></a></li>
				</ul>

				<div  class="layout" v-if="username" @click="layout">退出登陆</div>
				
				<!-- 弹框 -->
				<popup 
					:popupshow="popupshow" 
					:cancel="cancel" 
					:sure ="sureLayout" 
					:popuptxt="popuptxt">
				</popup>

			</div>
		</div>
		<myfooter :chooseindex="2"></myfooter> 
	</div>
</template>
<script>

	import Myfooter from '../components/Myfooter';
	import Popup from '../components/Popup';

	
	export default {
		create(){
			const username = localStorage.getItem('username');
		},

		data(){
			return{
				username: localStorage.getItem('username'),
				popupshow: false,
				popuptxt: '确定退出登陆？'
			}
		},

		components:{
			Myfooter,
			Popup
		},

		methods: {
			checkCollect() {
				if(this.username){
					this.$router.go('/collect');
				}else{
					this.$router.go('/login');
				}
			},
			layout() {
				// this.$http.post('/api/layout',{}).then((data)=>{
				// 	localStorage.removeItem('username');
				// 	location.reload();
				// })
				this.popupshow = true;
				
			},
			sureLayout(){
				this.popupshow = false;
				localStorage.removeItem('username');
				location.reload();
			},
			cancel(){
				this.popupshow = false;
			}
		}
	}
</script>
<style scoped>
	.top-part{
		width: 100%;
	    font-size: 14px;
	    color: #fff;
	    text-align: center;
	    background: url(../assets/images/my-bg.png);
	    background-size: cover;
	    background-repeat: no-repeat;
	    padding-top: 40px;
	}
	.top-part p{line-height: 38px;}
	.avatar{width: 70px;height:70px;border-radius:100px;margin:0 auto;overflow: hidden;border: 3px solid rgba(255, 255, 255, 0.2);}
	.username{padding-bottom: 25px;padding-top: 5px;}
	.unlogin {padding-bottom: 30px;}
	.login{width: 32%;line-height: 28px;text-align: center;background: #ffa800;border-radius: 100px;display:block;color: #fff;margin:0 auto;margin-top: 20px;border: 1px solid rgba(255, 255, 255, 0.8);}
	
	.my-list ul{}
	.my-list ul li{padding:0 10px;background: #fff;line-height: 48px;}
	.my-list ul li a{display: block;position: relative;background: url(../assets/images/arrow-right.png) no-repeat right center;background-size: 10px;}
	.my-list ul li a img{width: 20px;vertical-align: middle;position: relative;top:-4px;}
	.my-list ul li a img.bi-ico{width: 16px;}
	.my-list ul li a span{padding-left: 10px;color: #2a2f44;font-size: 15px;}
	
	.my-list ul li a:after{
		content: "";
		position: absolute;
		bottom:0;
		left: 0;
		right: 0;
		width: 100%;
		height: 1px;
		background: #dedede;
    	-webkit-transform-origin:0 0;
    	-webkit-transform:scaleY(0.5);
    	transform:scaleY(0.5);

	}

	.layout{
		margin-top: 30px;
        text-align: center;
        background: #fff;
        line-height: 46px;
        color: #FFB1B1;
        font-size: 15px;
	}


	
</style>