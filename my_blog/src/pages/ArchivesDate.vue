<template>
    <div>
        <ctx-header></ctx-header>
    <div class="container">
        <el-row :gutter="30"> 
            <el-col :sm="24" :md="16" class="left-col" >
                <ctx-archives></ctx-archives>
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
import  archives  from  '@/components/archives'
import rightlist  from  '@/components/rightlist'
import foot from '@/components/footer.vue'
export default{
    name:'Aboutme',
    components:{
        'ctx-header':front,
        'ctx-archives': archives,
        'right-list':rightlist,
        'ctx-footer':foot
    },
    mounted() {
      console.log("a")  
    },
}
</script>

<style>

</style>
