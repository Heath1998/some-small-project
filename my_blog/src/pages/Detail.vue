<template>
    <div>
        <ctx-header></ctx-header>
    <div class="container" id="detail">
        <el-row :gutter="30"> 
            <el-col :sm="24" :md="16" class="left-col" >
                <ctx-detail :articleObject='Deliver'></ctx-detail>
            </el-col>
            <el-col :sm="24" :md="8" class="right-col">
                <right-list></right-list >
            </el-col>
        </el-row>
    </div>
            <ctx-footer></ctx-footer>
    </div>
</template>


<script>
import  front  from  '@/components/head'
import temDetail  from  '@/components/temDetail'
import rightlist  from  '@/components/rightlist'
import foot from '@/components/footer.vue'

import axios from 'axios'

export default{
    name:'Detail',
    data(){
        return{
            list:[],
            Deliver:[]
        }
    },
    components:{
        'ctx-header':front,
        'right-list':rightlist,
        'ctx-detail':temDetail,
                'ctx-footer':foot
    },

    mounted(){
            var anchor = document.querySelector("#detail");
            // console.log(anchor,anchor.offsetTop);
            var top = anchor.offsetTop-60;
            document.body.scrollTop = top;
             // Firefox
             document.documentElement.scrollTop = top;
             // Safari
             window.pageYOffset = top;
    }
}
</script>

<style>

</style>
