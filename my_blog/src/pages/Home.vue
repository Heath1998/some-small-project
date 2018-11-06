<template>
    <div class="a">
        <ctx-header></ctx-header>
        <div class="container">
        <el-row :gutter="30" > 
            <el-col :sm="24" :md="16" class="left-col" >
                <left-list :articleObject='articleObject' ref="leftMore"></left-list>
            </el-col>
            <el-col :sm="24"  :md="8" class="right-col">
                <right-list></right-list >
            </el-col>
        </el-row>
        </div>
        <ctx-footer></ctx-footer>
    </div>
</template>

<script>
import  front  from  '@/components/head'
import leftlist  from  '@/components/leftlist'
import rightlist  from  '@/components/rightlist'
import foot from '@/components/footer.vue'

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
        'right-list':rightlist,
        'ctx-footer':foot
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


</style>
