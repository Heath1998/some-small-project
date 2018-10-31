<template>      
    <div>
    <div class="detail-list-outer" v-for="(item,index) of articleObject" :key="index">
        <div class="detail-list-title" >
            <h1><a href="www.baidu.com">{{item.title}}</a></h1>
            <div class="detail-list-introduce"><span>{{item.time}}</span></div>
        </div>
        <div class="detail-content-article" v-html="item.text"></div>
    </div>

    </div>
</template>

<script>
import axios from 'axios'

export default{
    props:{
        articleObject:[]
    },
    data(){
        return{
        }
    },
}
</script>


<style>
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
