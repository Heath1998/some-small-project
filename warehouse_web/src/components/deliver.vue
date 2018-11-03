<template>
  <div class="hello">
          <div id="border">
    <div id="btn">
          <button id="btn_one" @click="back">返回</button>
      </div>
    <div class="listData">
      <span>货物号</span>
      <input type="text" v-model="goodsDeliver.goodsId">
    </div>
    <div class="listData">
      <span>出货时间</span>
      <input type="text" v-model="goodsDeliver.time">
    </div>
    <div class="listData">
      <button @click="deliver">货物出库</button>
    </div>
  </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
 data(){
     return{
         goodsDeliver:{
         time:'',
         goodsId:''
         }
     }
 },
 methods:{
             back(){
            this.$router.push('/')
        },
     deliver() {
         axios.post('/api/deliver', this.goodsDeliver)
         .then(({data}) => {
             if(data.success === 'deliver') {
                this.$message({
                type: 'success',
                message: '货物出货成功'
                })  
             }
             else if(data.success === 'exist'){
                this.$message({
                type: 'info',
                message: '货物已出库'
                })  
             }
            else if(data.success === 'error'){
                this.$message({
                type: 'info',
                message: '货物号不存在'
                })  
             }
         })
     }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listData{
  padding-top:20px; 
  position: relative;
}
.listData span {
  padding: 0px 20px;
}
#btn_one{
    left: 0;
    position: absolute;
    width: 100px;
    padding-bottom:10px; 
    padding-top:10px; 
}
#btn{
    position: relative;
    margin-bottom:30px; 

}
#border{
    width: 400px;
    background: #ccc;
    margin: 0 auto;
    padding: 30px 10px; 
    position: relative;
}
</style>
