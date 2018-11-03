<template>
  <div class="head">
    <div class="headBox">
      <el-row  class="header_row" type="flex" justify="center">
        <el-col :span="18">
    <el-menu
      :default-active="$route.path"
      :router='true'
      class="el-menu-demo"
      mode="horizontal"
      background-color="#282A2C"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="/Share">
      <template slot="title">分类</template>
      <el-menu-item index="/Share?classify=技术分享">技术分享</el-menu-item>
      <el-menu-item index="/Share?classify=小零件">小零件</el-menu-item>
      <el-menu-item index="/Share?classify=杂谈">杂谈</el-menu-item>
      <el-menu-item index="/Share" v-show=false></el-menu-item>
      </el-submenu>
      <el-menu-item index="/ArchivesDate" >归档</el-menu-item>
      <el-menu-item index="/Aboutme">关于我</el-menu-item> 
      <div index="" class="pcsearchbox" >
        <i class="el-icon-search pcsearchicon">
        </i>
        <div class="pcsearchinput" >
            <el-input placeholder="搜索" icon="search" v-model="input" @keyup.enter.native="searchEnterFun">
            </el-input>
        </div>
      </div>

    </el-menu>
    </el-col>
      </el-row>
    </div>
    <div class="header-img">
      <div class="header-img-scene">
        <span>社会后, 就不可再稚嫩了.</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'front',
  data(){
    return {
      index:'1',
      searchHide:false,
      input:''
    }
  },
  
  methods:{
    moveSearch(){
      this.searchHide=true
    },
    removeSearch(){
     this.searchHide=false
    },
    searchEnterFun(e){
      if(this.input){
        this.$router.push({path:'/Share?keyword='+this.input})
      }
      
    }
  }

}
</script>

<style>

.headBox .header_row .el-menu--horizontal>.el-menu-item{
  line-height: 38px;
  height: 38px;
}
.headBox .header_row .el-menu--horizontal>.el-submenu .el-submenu__title{
    line-height: 38px;
    height: 38px;
}
.headBox .header_row .el-menu.el-menu--horizontal{
  border-bottom: solid 1px rgba(40, 42, 44);
}

.header_row{
  background-color: rgba(40, 42, 44);
  
}
.headBox{
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 99;
}
.header-img {
	height: 150px;
	position: relative;
	width: 100%;
	background-size: cover;
	background-position: center 50%;
	background-repeat: no-repeat;
	margin-bottom: 90px;
  overflow: hidden;
  background-image: url("http://t2.hddhhn.com/uploads/tu/20150700/0aiouvl1eom.jpg");
}
.header-img img{
  width: 100%;
}
.header-img-scene{
  position: absolute;
  top: 50px;
  width: 100%;
  left: 0px;
  font-weight:150;
  font-size: 50px;
  text-align: center;
  font-family: 'Sigmar One', Arial;
  color: #000;
}
.header-img-scene span{
    font-family: 'Sigmar One', Arial;
    text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
}

/*pc搜索框*/

.pcsearchbox:hover .pcsearchinput{
  opacity: 1;
  visibility: visible;
}
.pcsearchbox{
    padding: 0;
    max-width: 170px;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    cursor: pointer;
    min-width: 70px;
    text-align: center;
}
.pcsearchbox .pcsearchicon{
  position: absolute;
  right: 0px;
  line-height: 38px;
  width: 100%;
}
.pcsearchinput{
  width: 180px;
  padding: 10px 20px 10px 20px;
  background: rgba(40, 42, 44, 0.6);
  border-radius: 0 0 2px 2px;
  position: absolute;
  top: 38px;
  right: 0;
  opacity: 0;
  visibility: hidden;
}
</style>


