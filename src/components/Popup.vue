<template>
	<div class="popup" v-if="popupshow">
		<div class="popup-inn">
			<p>{{popuptxt}}</p>
			<div class="btns">
				<button @click="cancel">取消</button>
				<button @click="sure">确定</button>
			</div>
		</div>
	</div>
</template>
<script>

	export default {
		props:['cancel','sure','popupshow','popuptxt']
	}
	
</script>

<style scoped>
	
	.popup{position: absolute;top:0;left: 0;bottom: 0;right: 0;background: #000;background: rgba(0, 0, 0, 0.4);
    z-index: 10000;}
    .popup .popup-inn{
    	width: 70%;
    	text-align: center;
    	font-size: 14px;
		min-height: 120px;
    	background: #fff;
    	border-radius: 8px;
	    position: absolute;
   		top: 120px;
   		left: 50%;
   		margin-left: -35%;
    }
    .popup .popup-inn p{padding: 30px 10px;}
    .popup .popup-inn .btns{
    	position: absolute;
    	bottom: 0;
    	width: 100%;
    	line-height: 38px;
    }
    .popup .popup-inn .btns button{
    	float: left;
    	width: 50%;
    	height: 38px;
    	background: none;
    	border: 0;
    	font-family: "微软雅黑";
    	position: relative;
	    color: #3897e7;
    }
    .popup .popup-inn .btns button:hover{
    	color: #0665B5;
    }
    .popup .popup-inn .btns:before{
    	content: "";
    	position: absolute;
    	top:0;
    	left: 0;
    	width: 100%;
    	height: 1px;
    	background: #ddd;
    	-webkit-transform-origin:0 0;
    	-webkit-transform:scaleY(0.5);
    	transform:scaleY(0.5);
    }
    .popup .popup-inn .btns button:nth-child(1):before{
    	content: "";
    	position: absolute;
    	right:0;
    	top: 0;
    	bottom: 0;
    	height: 100%;
    	width: 1px;
    	background: #ddd;
    	-webkit-transform-origin:0 0;
    	-webkit-transform:scaleX(0.5);
    	transform:scaleX(0.5);
    }
</style>