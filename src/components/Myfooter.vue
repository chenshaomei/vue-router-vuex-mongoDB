<template>
	<div class="nav">
		<ul>
			<li><a v-link="{ path: '/index'}" :class="0 ==chooseindex?'active' :''"><i></i><span>首页</span></a></li>
			<li><a v-link="{ path: 'list', query: { show: 'all' }}" :class="1 ==chooseindex?'active' :''"><i></i><span>文章</span></a></li>
			<li><a v-link="{ path: '/my'}" :class="2 ==chooseindex?'active' :''"><i></i><span>我的</span></a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['chooseindex']
	}
</script>
<style scoped>
/*	.footer{width: 100%;position: fixed;bottom: 0;left: 0;right: 0;height: 44px;background: #fff;z-index: 1000;}
	.footer ul{display: flex;display: -webkit-flex;display: -webkit-box;}
	.footer ul li{flex:1;-webkit-flex:1;-webkit-box-flex:1;text-align: center;line-height: 44px;}
	.footer ul li a{color: #666;}
	.footer ul li a.active{color: #24bdb6;}
	.footer:before{
		content: "";
		position: absolute;
		top:0;
		left: 0;
		right: 0;
		width: 100%;
		height: 1px;
		background: #dedede;
    	-webkit-transform-origin:0 0;
    	-webkit-transform:scaleY(0.5);
    	transform:scaleY(0.5);
	}
*/


	.nav {
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 49px;
	    line-height: 49px;
	    z-index: 1010;
	    background: #fff;
	}
	.nav:before{
	    content: "";
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    width: 100%;
	    height: 1px;
	    background: #dedede;
	    -webkit-transform-origin:0 0;
	    -webkit-transform:scaleY(0.5);
	    transform:scaleY(0.5);
	
	}
	.nav ul{
	    padding-left: 8px;
	    padding-right: 8px;
	    text-align: center;
	    overflow: hidden;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	}
	.nav ul li{
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    width: 25%;
	}
	
	.nav ul li i{
	    display: block;
	    vertical-align: middle;
	    height: 28px;
	    width: 28px;
	    margin: 4px auto 0;
	}
	.nav ul li:nth-child(1) i{
	    background: url(../assets/images/sy_ico.png) no-repeat;
	    background-size: 100%;
	}
	.nav ul li:nth-child(1) .active i{
	    background: url(../assets/images/sy_cur1.png) no-repeat;
	    background-size: 100%;
	}
	
	.nav ul li:nth-child(2) i{
	    background: url(../assets/images/wz_ico.png) no-repeat;
	    background-size: 100%;
	}
	.nav ul li:nth-child(2) .active i{
	    background: url(../assets/images/wz_cur1.png) no-repeat;
	    background-size: 100%;
	}
	.nav ul li:nth-child(3) i{
	    background: url(../assets/images/my_ico.png) no-repeat;
	    background-size: 100%;
	}
	.nav ul li:nth-child(3) .active i{
	    background: url(../assets/images/my_cur1.png) no-repeat;
	    background-size: 100%;
	}

	.nav ul li span{
	    padding-top: 2px;
	    line-height: 1;
	    font-size: 12px;
	    color: #4B4B4B;
	    display: block;
	    word-wrap: normal;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.nav ul li a.active span{color: #3897e7;}
</style>