<template>
	<div class="login">
		<div class="logo"><img src="../assets/images/logo.png" alt=""></div>
		<div class="form">
			<div><input v-model="username" name="username" required  type="text" placeholder="用户名"></div>
			<div><input v-model="password" name="password" required  type="number" placeholder="密码"></div>
			<div class="login-btn"><button @click="login">登陆</button></div>
		</div>

		<div id="J_tip" class="show-tip" v-show="showtip"></div>
	</div>
</template>
<script>

	export default{
		data(){
			return {
				username : '',
				password : '',
				showtip: false
			}
		},

		methods: {
			login(){
				const reqData = {
					username: this.username,
					password: this.password
				}

				if(!this.username || !this.password){
					alert('用户名或密码不能为空')
					return;
				}
				console.log(reqData)

				let oTip = document.getElementById('J_tip');

				this.$http.post('/api/login', reqData).then((data)=>{

					const returnData = data.data;
					returnData.user && localStorage.setItem('username', returnData.user.username);
					if(returnData.code == 0) {
						oTip.innerHTML = '登陆成功';
						this.showtip = true;
						setTimeout(() =>{
							this.showtip = false;
							this.$router.go('/my')
						}, 1000)

					}else{

						oTip.innerHTML = '用户名或密码有误，请重新登陆~';
						this.showtip = true;
						setTimeout(() =>{
							this.showtip = false;
							this.$router.go('/login')
						}, 1000)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.login{width: 100%;height: 100%;background: #fff;position: absolute;top: 0;left: 0;bottom: 0;right: 0;
		background: url(../assets/images/my-bg.png);
	    background-size: cover;
	}
	.login > div{width: 72%;margin:0 auto;}
	.login > div.logo{width: 60%;margin:0 auto;}
	.login .logo{padding-top: 70px;padding-bottom: 60px;}

	.login .form div{width: 100%;line-height: 42px;border-radius: 100px;margin-bottom: 18px;background: #3f4553;background: #fff;}
	.login .form div input{width: 100%;height: 100%;border: 0;outline: none;background: none;font-family: '微软雅黑';padding: 5px 10px;text-align: center;color: #fff;color: #3f4553;}
	.login .form div.login-btn{background: #24bdb6;border: 0;margin-top: 30px;}
	.login .form div.login-btn:hover{background: #20a9a3;}
	
	.login .form div button{width: 100%;height: 100%;border: 0;outline: none;background: none;font-family: '微软雅黑';padding: 5px 10px;color: #fff;font-size: 16px;}
	
	.login .form div input::-webkit-input-placeholder{
		text-align: center;
		color: rgba(255, 255, 255, 0.81);
		color: #999;

	}

	.login .show-tip{
	    width: 56%;
    	margin: 0 auto;
    	padding: 35px 10px;
    	border-radius: 8px;
    	line-height: 22px;
    	font-size: 16px;
    	color: #24BDB6;
    	text-align: center;
    	position: absolute;
    	top: 150px;
    	left: 50%;
    	margin-left: -28%;
    	background: #fff;
	    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.13);
	}
</style>