<template>
  <div class="atclist collect-list" >
        <div class="header">
            <div class="header-left"><a class="fc-white" href="javascript:history.go(-1);">返回</a></div>
            <div class="header-title">收藏</div>
            <div class="header-right"></div>
        </div>
        <ul>
            <li v-for="article in collectdata.list">
                <a v-link="{name: 'details', params: {id: article._id}}">
                    <div class="infos">
                        <div class="article-name"><h6>{{article.title}}</h6><span>{{article.type}}</span></div>
                        <p class="article-intro">{{article.intro | formatIntro '45'}}</p>

                        <p class="article-time">{{article.createDat | formatTime}}</p>
                    </div>
                </a>
                <div class="cancel-collect" @click="cancelCollect(article._id)"><span>取消收藏</span></div>
            </li>
        </ul>
        
        <div class="tip" v-if="collectdata.totalPage>0 && page!=collectdata.totalPage" @click="nextPage">点击加载更多</div>
        <div class="tip" v-if="page==collectdata.totalPage">没有更多了哦~</div>
        <div class="tip" v-if="collectdata.totalPage==0">没有找到相关数据哦~</div>
        
    </div>
</template>

<script>

import { fetchCollectList } from '../vuex/actions'
import { getCollectList } from '../vuex/getters'

export default {

    created(){
        let data = {pageNo:1,pageSize:8}
        this.fetchCollectList(data)
    },

    data(){
      return {
        page:1
      }
    },

    methods:{
        nextPage(){
            this.page++;

            console.log(this.page)
            const url = '/api/collectlist?pageNo='+ this.page;
            this.$http.get(url).then((data) => {
                console.log(data.body)
                this.collectdata.list = this.collectdata.list.concat(data.body.list)
            })
        },

        cancelCollect(id){

            let reqData = {
                collectActive: false,
                id: id
            }

            this.$http.post('/api/collect', reqData).then((data)=>{
                if(data.body.success){
                    alert('已取消收藏');
                    location.reload();   
                }
                
            })
        }
    },
    vuex:{
        actions:{
            fetchCollectList
        },
        getters:{
            collectdata:getCollectList
        }
    }
  
}
</script>

<style scoped>
    .header-title{color: #fff;}
    .collect-list{padding-top: 44px;}
    .collect-list ul{background: none;}
    .collect-list ul li{margin-bottom: 12px;background: #fff;box-shadow: 0 1px 2px rgba(212, 212, 212, 0.29);}
    .collect-list ul li:after{
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        width: 100%;
        height: 1px;
        background: #fff;
        -webkit-transform-origin:0 0;
        -webkit-transform:scaleY(0.5);
        transform:scaleY(0.5);
    
    }
    .cancel-collect{
        text-align: center;
    }
    .cancel-collect span{
        display: inline-block;
        width: 40%;
        font-size: 15px;
        color: #c7c7c7;
        line-height: 42px;
        position: relative;

    }
    .cancel-collect span:before{
        content:'';
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        width: 100%;
        height: 1px;
        background: #e7e7e7;
        -webkit-transform-origin:0 0;
        -webkit-transform:scaleY(0.5);
        transform:scaleY(0.5);
    }
</style>

