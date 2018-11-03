<template>      
    <div>
    <div class="detail-list-outer" v-for="(item,index) of articleObject" :key="index">
        <div class="detail-list-title" >
            <h1><a href="">{{item.title}}</a></h1>
            <div class="detail-list-introduce"><span>{{item.time}}</span></div>
        </div>
        <div class="detail-content-article" v-html="htmlStr"></div>
    </div>

    </div>
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return{
            Deliver:[],
            articleObject:[],
            list:[],
            htmlStr: ``
        }
    },
    methods:{
        getDataArticle(){
            axios.get('/api/article.json')
            .then((res)=>{
                this.list=res.data.article
                 this.getFilterArticle()
                 this.getHtmlStr()
            })
        },

        getFilterArticle(){
            this.Deliver=this.list.filter((x)=>{
                return x.id==this.$route.query.aid
            })
            this.articleObject = this.Deliver
            console.log(this.articleObject[0].id)
        },

        getHtmlStr() {
            var id = this.articleObject[0].id
            var mid = 'api/article?aid='+ id

            axios.get(mid)
            .then((res) => {
                var html = res.data.html
                this.htmlStr = html
            })
        }
    },
    mounted(){
       this.getDataArticle()
    }
}
</script>


<style >

@import '../assets/github.css'; /*引入公共样式*/

.detail-list-outer{
    background: #fff;
    padding-left:20px ;
    padding-right:20px ;
    padding-bottom:20px;
    margin-bottom:30px; 
}
.detail-list-title{
    height: 124px;
    text-align: center;
    color: #444;
    font-size: 28px;
}
.detail-list-introduce span{
    font-size:14px;
}
.detail-list-title h1{
  padding:10px 0;
}
.detail-list-title h1 a{
     color: #444;
     font-size: 28px;
}
.detail-list-introduce{
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
}
.detail-content-article{
    margin: 20px 0;
}
</style>
