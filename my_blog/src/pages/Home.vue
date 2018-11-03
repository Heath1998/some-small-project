<template>
    <div class="a">
        <ctx-header></ctx-header>
        <div class="container">
        <el-row :gutter="30" type="flex" justify="center"> 
            <el-col :span="13" class="left-col" >
                <left-list :articleObject='articleObject' ref="leftMore"></left-list>
            </el-col>
            <el-col :span="6" class="right-col">
                <right-list></right-list >
            </el-col>
        </el-row>
        </div>
    </div>
</template>

<script>
import  front  from  '@/components/head'
import leftlist  from  '@/components/leftlist'
import rightlist  from  '@/components/rightlist'

import axios from 'axios'
export default{
    name:'Home',
    data(){
        return{
            articleObject:[]
        }
    },
    components:{
        'ctx-header':front,
        'left-list':leftlist,
        'right-list':rightlist
    },
    methods:{
        getIndexJson(){
            axios.get('/api/index.json')
            .then((res)=>{
                console.log(res.data)
               this.articleObject=res.data.data
               this.$refs.leftMore.checkHasMore()

            })
        }
    },

}
</script>

<style>
.left-col{
    height: 2000px;
}
</style>
