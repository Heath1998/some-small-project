<template>
  <div class="goods">
      <div id="outer">
      <div id="btn">
          <button id="btn_one" @click="back">返回</button>
          <button id="btn_two" @click="search">查询</button>
      </div>
     <div class="listData">
      <span>货物名称查询</span>
      <input type="text" v-model="goodsName">
     </div>  
     <div class="listData">
      <span>货物主人查询</span>
      <input type="text" v-model="goodsHoster">
     </div>    
     <div class="listData">
      <span>仓库查询</span>
      <input type="text" v-model="wareHouseId">
     </div>    

    <div id="contain">
    <el-table :data="tableData" border  style="margin:0 auto;" >
        <el-table-column prop="goodsId" label="货物号"  width="70"></el-table-column>
        <el-table-column prop="goodsName" label="货物名" width="70"></el-table-column>
        <el-table-column prop="goodsNum" label="货物数" width="70"></el-table-column>
        <el-table-column prop="goodsPrice" label="货价格" width="70"></el-table-column>
        <el-table-column prop="goodsHoster" label="货物主" width="70"></el-table-column>
        <el-table-column prop="wareHouseId" label="仓库号" width="70"></el-table-column>
        <el-table-column prop="time" label="出库时间" width="90"></el-table-column>
        <el-table-column prop="state" label="状态" ></el-table-column>
        </el-table-column>
    </el-table>
  </div>
  </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            goodsName: '',
            goodsHoster: '',
            wareHouseId: '',
            tableData:[],

        }
    },
    methods:{
      back(){
            this.$router.push('/')
        },
    search() {
            var findObj = {}
            if(this.goodsName !== '')
                findObj.goodsName = this.goodsName
            console.log(findObj)
            if(this.goodsHoster !== '')
                findObj.goodsHoster = this.goodsHoster
            if(this.wareHouseId !== '')
                findObj.wareHouseId = this.wareHouseId
            axios.post('/api/goods', findObj)
            .then(({data}) => {
                this.tableData = data
                console.log(data)
            })    
        }
    },
    mounted() {
      axios.post('/api/goods', {})
      .then(({data}) => {
          this.tableData = data
          console.log(data)
      })  
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table--border, .el-table--group {
    border: 2px solid #0d4ee7;
}
.listData{
  padding-top:20px; 
}
.listData span {
  padding: 0px 20px;
}
#btn_one{
    left: 0;
    position: absolute;
    width: 100px;
}
#btn_two{
    right: 0;
    position: absolute;
    width: 100px;
}
#btn{
    position: relative;
    padding-bottom:30px; 
    width:70%;
    margin:  0 auto;

}
#contain{
    padding-top:30px; 
    width:80%;
    margin:  0 auto;
    text-align: centre;
    
}

</style>
