<template>
  <div >
      <div id="border">
    <div class="listData">
      <button   class="btn" @click="goInsert" >货物入库</button>
    </div>
    <div class="listData">
      <button  class="btn" @click="goDeliver">货物出库</button>
    </div>
    <div class="listData">
      <button  class="btn" @click="goSearch">货物查询</button>
    </div>
    <div class="listData">
      <button  class="btn" @click="goChange">货物修改</button>
    </div>
    </div>
  </div>
</template>

<script>


export default {
    methods:{
        goInsert() {
           this.$router.push('/insert')
        },
        goDeliver() {
             this.$router.push('/deliver')
        },
        goSearch() {
             this.$router.push('/goods')
        },
        goChange() {
             this.$router.push('/change')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listData{
  padding-top:20px; 
}
.listData span {
  padding: 0px 20px;
}
.btn{
    height: 80px;
}
#border{
    width: 400px;
    background: #ccc;
    margin: 0 auto;
        padding: 30px 10px;
}
</style>
