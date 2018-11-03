<template>
  <div>
    <div id="border">
    <div id="btn">
          <button id="btn_one" @click="back">返回</button>
      </div>
    <div class="listData">
      <span>货物号</span>
      <input type="text" v-model="goodsId">
    </div>
    <div class="listData">
      <span>货物数量</span>
      <input type="text" v-model="goodsNum">
    </div>
    <div class="listData">
      <span>货物种类</span>
      <input type="text" v-model="goodsName">
    </div>
    <div class="listData">
      <button @click="change">货物数据修改</button>
    </div>      
  </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return{
            goodsId:'',
            goodsNum:'',
            goodsName:''
        }
    },
    methods:{
        back(){
            this.$router.push('/')
        },
        change() {
            if(this.goodsId === '') {
                this.$message({
                type: 'info',
                message: '请输入货物号'
                })     
                return ;            
            }
            var obj = {}
            if(this.goodsId !== '') {
                obj.goodsId = this.goodsId
            }
            if(this.goodsNum !== '') {
                obj.goodsNum = this.goodsNum
            }
            if(this.goodsName !== '') {
                obj.goodsName = this.goodsName
            }
            console.log(obj)
            axios.post('/api/change', obj)
            .then(({data}) => {
                if(data.success) {
                    this.$message({
                    type: 'success',
                    message: '修改货物信息成功'
                })     
                } 
                else {
                    this.$message({
                    type: 'error',
                    message: '货物已出库，不可修改'
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
