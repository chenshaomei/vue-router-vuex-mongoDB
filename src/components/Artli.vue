<template>
  <div class="atclist" id="atclist">
        <ul>
            <li v-for="article in articlelist">
                <a v-link="{name: 'details', params: {id: article._id}}">
                    <div class="infos">
                        <div class="article-name"><h6>{{article.title}}</h6><span>{{article.type}}</span></div>
                        <p class="article-intro">{{article.intro | formatIntro '45'}}</p>
                        <p class="article-time">{{article.createDat | formatTime}}</p>
                    </div>
                </a>
            </li>
        </ul>
        <div v-if="!home">
            <div class="tip" v-if="pageCount>0 && page!=pageCount" @click="nextPage">点击加载更多</div>
            <div class="tip" v-if="page==pageCount">没有更多了哦~</div>
            <div class="tip" v-if="pageCount==0">没有找到相关数据哦~</div>
        </div>
    </div>
</template>

<script>

import { getArticleList } from '../vuex/actions'
import { getList } from '../vuex/getters'

export default {
    props:['articlelist','home'],
    data(){
      return {
        page:1
      }
    },
    // watch:{
    //     page(val){
    //         this.get();
            
    //     }
    // },
    // computed:{
    //     articlelist:{
    //         get () {
    //             return this.list;
    //         },
    //         set (val){
    //             this.list = this.list.concat(val);
    //         }
    //     }
    // },
    methods:{
        nextPage(){
            this.page++;
            let type = '';
            let keyword = '';

            if(!this.home){
                type = localStorage.getItem('type') ;
                keyword = localStorage.getItem('keyword') ;
            }
            console.log(this.page)
            const url = '/api/articlelist?pageNo='+ this.page +'&type='+ type +'&keyWord='+ keyword;
            this.$http.get(url).then((data) => {
                this.articlelist = this.articlelist.concat(data.data.list)
            })
        }
    },
    vuex:{
        actions:{
            getArticleList
        },
        getters:{
            list:getList,
            pageCount:state => state.pageCount,
            nodata:state => state.nodata 
        }
    },

    ready(){
       
  
    }  
}
</script>

