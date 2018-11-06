<template>      
    <div>
    <div class="left-list-outer" v-for="(item,index) of listItem" :key="index">
        <div class="left-list-title" >
            <h1><a href="www.baidu.com">{{item.title}}</a></h1>
            <div class="left-list-introduce"><span>{{item.time}}</span></div>
        </div>
        <div class="left-list-content" >
            <p style="text-indent:2em;">{{item.introduce}}
            </p>
            <p style="max-height:300px;width:100%; overflow:hidden;">
                <img style="width:100%;" :src="item.imgUrl" >
            </p>
        </div>
        <div class="left-list-footer" >
            <a :href="'#/Detail?aid='+item.id" target="_blank">阅读全文>></a>
        </div>
    </div>

    <div class="left-list-more" v-text="textMore" @click="checkHasMore"></div>
    </div>
</template>

<script>
import axios from 'axios'

export default{

    data(){
        return{
            listItem:[],
            listNum:0,
            textMore:'加载更多',
            articleObject:[],
            middleList:[]
        }
    },

    watch:{
        $route(newval,oldval){
            if(this.$route.query.keyword){
                this.getSearchData()
            }
            if(this.$route.query.classify){
                this.getListFilter()
            }
            this.checkHasMore()
        },

    },
    methods:{
        getSearchData(){
            this.middleList=this.articleObject.filter((x)=>{
                return x.title.indexOf(this.$route.query.keyword)>=0
            })
        },
        getListFilter(){
            this.middleList=this.articleObject.filter((x)=>{
                return x.classify==this.$route.query.classify
            })
        },
        checkHasMore(){
            if((this.listNum+5)>=this.middleList.length){
                this.listItem=this.middleList
                this.textMore='暂无更多数据'
            }
            else{
                this.textMore='加载更多'
                this.listNum+=5
                this.listItem=this.middleList.slice(0,this.listNum)
            }
        },
        getIndexJson(){
            axios.get('/api/index.json')
            .then((res)=>{
               this.articleObject=res.data.data
               this.middleList=this.articleObject
              if(this.$route.query.keyword){
                  this.getSearchData()
                this.checkHasMore() 
              }else if(this.$route.query.classify){
                this.getListFilter()
                this.checkHasMore() 
              }else{
                this.checkHasMore()
              }
            })
        }
    },
    activated(){
        this.listNum=0
        if(this.$route.path=='/'){
         this.middleList=this.articleObject
        }
        this.checkHasMore()
    },
    mounted(){
        this.getIndexJson()
    }
}
</script>


<style>
.left-list-outer{
    background: #fff;
    padding-left:20px ;
    padding-right:20px ;
    padding-bottom:20px;
    margin-bottom:30px; 
}
.left-list-title{
   
    text-align: center;
    color: #444;
    font-size: 28px;
}
.left-list-introduce span{
    font-size:14px;
}
.left-list-title h1{
  padding:10px 0;
}
.left-list-title h1 a{
     color: #444;
     font-size: 28px;
}
.left-list-introduce{
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
}
.left-list-content p{
    line-height: 24px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left:0px;
    margin-right:0px; 
}
.left-list-footer{
    margin-top:5px; 
    margin-bottom:5px; 
    text-align: center;
}
.left-list-footer a{
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    background: #97dffd;
}
.left-list-footer a:hover{
    background: #48456D;
}
.left-list-more{
    text-align: center;
    background: #97dffd;
    border-radius: 10px;
    padding:10px 0;
    cursor: pointer;
    color: #fff;
}
.left-list-more:hover{
    background:  #48456D;

}
</style>
