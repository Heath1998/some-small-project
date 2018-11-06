<template>
    <div>
        <ctx-header></ctx-header>
    <div class="container">
        <el-row :gutter="30"> 
            <el-col :sm="24" :md="16" class="left-col" >
               <ctx-introduce></ctx-introduce>
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
import introduceMyself  from  '@/components/introduceMyself'
import rightlist  from  '@/components/rightlist'
import foot from '@/components/footer.vue'
export default{
    name:'Aboutme',
    components:{
        'ctx-header':front,
        'right-list':rightlist,
        'ctx-introduce':introduceMyself,
                'ctx-footer':foot
    },
    mounted() {
      console.log("a")  
    },
}
</script>

<style>

</style>
