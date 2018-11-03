<template>
    <div>
        <ctx-header></ctx-header>
    <div class="container">
        <el-row :gutter="30" type="flex" justify="center"> 
            <el-col :span="13" class="left-col" >
                <ctx-archives></ctx-archives>
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
import  archives  from  '@/components/archives'
import rightlist  from  '@/components/rightlist'
export default{
    name:'Aboutme',
    components:{
        'ctx-header':front,
        'ctx-archives': archives,
        'right-list':rightlist,

    },
    mounted() {
      console.log("a")  
    },
}
</script>

<style>

</style>
