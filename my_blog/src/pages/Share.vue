<template>
    <div>
        <ctx-header></ctx-header>
    <div class="container">
        <el-row :gutter="30" type="flex" justify="center"> 
            <el-col :span="13" class="left-col" >
                <left-list ></left-list>
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
    name:'Share',
    data(){
        return {
            list:[],
            filstr:'',
            listDeliver:[]
        }
    },
    components:{
        'ctx-header':front,
        'right-list':rightlist,
        'left-list':leftlist,
    },
    watch:{
        $route(){
            if(this.$route.query.keyword){
                this.getSearchData()
            }
            else{
                if(this.$route.query.classify=='1'){
                    this.filstr='技术分享'
                }
                else if(this.$route.query.classify=='2'){
                    this.filstr='小零件'
                }
                else if(this.$route.query.classify=='3'){
                    this.filstr='杂谈'
                }
                this.getListFilter()
            }
        }
    },
    methods:{
        getJsonClassify(){
            axios.get("/api/index.json")
            .then((res)=>{
              this.list=res.data.data
              if(this.$route.query.keyword){
                  this.getSearchData()
              }else{
                this.getListFilter()
              }
            })
        },
        getListFilter(){
            this.listDeliver=this.list.filter((x)=>{
                return x.classify==this.filstr
            })
        },
        getSearchData(){
            this.listDeliver=this.list.filter((x)=>{
                return x.title.indexOf(this.$route.query.keyword)>=0
            })
        }
    },
    mounted(){
        if(!this.$route.query.keyword){
            if(this.$route.query.classify=='1'){
                this.filstr='技术分享'
            }
            else if(this.$route.query.classify=='2'){
                this.filstr='小零件'
            }
            else if(this.$route.query.classify=='3'){
                this.filstr='杂谈'
            }
        }
       this.getJsonClassify()
    }
}
</script>

<style>

</style>
