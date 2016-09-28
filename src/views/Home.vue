<template>
    <div>
        <div class="header"><a class="search" v-link="{path:'/search'}">搜索文章/问题</a></div>
        <div class="wrap">
            <banner :list="bannerlist"></banner>
            <artli :articlelist="list" :home="true"></artli>
        </div>
        <myfooter :chooseindex="0"></myfooter>   
    </div>
</template>

<script>
import store from '../vuex/store'
import Banner from '../components/Banner';
import Artli from '../components/Artli';
import Myfooter from '../components/Myfooter';
import { getArticleList } from '../vuex/actions'
import { getList, getPageCount, getDataStatus } from '../vuex/getters'

let blist = [
    {imgSrc:require('../assets/images/b2.png')},
    {imgSrc:require('../assets/images/b1.png')}
]

export default {
    route: {
        data (){
            const reqData = {pageNo:this.pageNo,pageSize:3}
            this.getArticleList(reqData); 
        }
    },
    data(){
        return {
            bannerlist:blist,
            pageNo:1
        }
    },
    components: {
        Banner,
        Artli,
        Myfooter
    },
    vuex:{
        actions:{
            getArticleList
        },
        getters:{
            list:getList,
            pageCount:getPageCount,
            nodata:getDataStatus
        }
    },
    computed:{

    },
    methods:{
        nextPage(){
            this.pageNo++
            console.log(this.pageNo)
        }
    }

    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*.header{
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #4e5e6d;
    text-align: center;
    z-index: 100;

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

}*/
.atclist ul{background: #fff;}
.atclist li{width: 100%;position: relative;}
.atclist li a{width: 100%;display: flex;display: -webkit-flex;display: -webkit-box;

    -webkit-box-pack: center;/*旧版本 垂直居中*/
    -webkit-align-items:center;
    align-items:center;/*flex项目垂直居中显示*/
}
.atclist li a .imgs{padding: 10px;}
.atclist li a .imgs img{width: 80px;}
.atclist li a .infos{width: 100%;padding:15px 10px;-webkit-flex:1;flex:1;-webkit-box-flex:1;font-size: 12px;}
.atclist li a .infos .article-name{width: 100%;position: relative;padding-bottom: 10px;}
.atclist li a .infos .article-name h6{font-size: 14px;color: #000;}
.atclist li a .infos .article-name span{font-size: 12px;position: absolute;top:0;right: 0;color: #fff;background: #3897e7;padding:2px 5px;border-radius: 100px;}
.atclist li a .infos .article-intro{padding-bottom: 8px;color: #666;}
.atclist li a .infos .article-time{color: #999;/*text-align: right;*/}

.atclist li:after{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: #eee;
    -webkit-transform-origin:0 0;
    -webkit-transform:scaleY(0.5);
    transform:scaleY(0.5);

}



.tip{font-size: 14px;color: #999;text-align: center;padding: 10px;}
</style>
