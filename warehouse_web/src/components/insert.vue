<template>
  <div class="insert">
    <div id="border">
      <div id="btn">
          <button id="btn_one" @click="back">返回</button>
      </div>
    <div class="listData">
      <span>货物号</span>
      <input type="text" v-model="goods.goodsId">
    </div>
    <div class="listData">
      <span>货物名</span>
      <input type="text" v-model="goods.goodsName">
    </div>
    <div class="listData">
      <span>货物数</span>
      <input type="text" v-model="goods.goodsNum">
    </div>
    <div class="listData">
      <span>货价格</span>
      <input type="text" v-model="goods.goodsPrice">
    </div>
    <div class="listData">
      <span>货物主</span>
      <input type="text" v-model="goods.goodsHoster">
    </div>
    <div class="listData">
      <span>仓库号</span>
      <input type="text" v-model="goods.wareHouseId">
    </div>
    <div class="listData">
      <button @click="insert">货物入库</button>
    </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return{
      goods:{
        goodsId:'',
        goodsName:'',
        goodsNum:'',
        goodsPrice:'',
        goodsHoster:'',
        wareHouseId:''
      }
    }
  },
  methods:{
        back(){
            this.$router.push('/')
        },
    insert(){
    axios.post('/api/insert',this.goods)
    .then(({data})=>{
      console.log(data)
      if(data.success === 'insert'){
        this.$message({
            type: 'success',
            message: '仓库入库完成'
        })        
      } 
      else if(data.success === 'addExist') {
        this.$message({
            type: 'info',
            message: '已存在同一货主的同种货物，将进行货物记录的追加'
        })  
      }
      else if(data.success === 'exist') {
        this.$message({
            type: 'error',
            message: '此货物号已存在'
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
