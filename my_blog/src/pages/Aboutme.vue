<template>
    <div>
        <ctx-header></ctx-header>
    <div class="container">
        <el-row :gutter="30" type="flex" justify="center"> 
            <el-col :span="13" class="left-col" >
               <ctx-introduce></ctx-introduce>
            </el-col>
            <el-col :span="6" class="right-col">
                <right-list></right-list >
            </el-col>
        </el-row>
    </div>
    </div>
</template>


<script>
import  header  from  '@/components/header'
import introduceMyself  from  '@/components/introduceMyself'
import rightlist  from  '@/components/rightlist'
export default{
    name:'Aboutme',
    components:{
        'ctx-header':header,
        'right-list':rightlist,
        'ctx-introduce':introduceMyself
    },
    mounted() {
      console.log("a")  
    },
}
</script>

<style>

</style>
