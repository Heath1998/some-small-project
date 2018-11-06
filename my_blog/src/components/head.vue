<template>
  <div class="head">
    <div class="headBox">
      <el-row  class="header_row container" type="flex" justify="center">
        <el-col :span="24">
          <!-- pc端导航 -->
          <div class="pcMenu" >
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
            </div>
          <!-- 移动端 -->
          <div class='mobileBox' >
            <div class="hideMenu">
						<i @click="pMenu=!pMenu" class="el-icon-menu" ></i>

							<el-menu :default-active="$route.path" 
              class="mlistmenu" 
              v-show="!pMenu" 
              theme="dark"  
              background-color="#303030"
              :router="true">
								<el-menu-item index="/"><i class="fa fa-wa fa-home"></i> 首页</el-menu-item>
								<el-submenu index="/Share">
									<template slot="title"><i class="fa fa-wa fa-archive"></i> 分类</template>
                  <el-menu-item index="/Share?classify=技术分享" @click="pMenu=!pMenu">技术分享</el-menu-item>
                  <el-menu-item index="/Share?classify=小零件" @click="pMenu=!pMenu">小零件</el-menu-item>
                  <el-menu-item index="/Share?classify=杂谈" @click="pMenu=!pMenu">杂谈</el-menu-item>
                  <el-menu-item index="/Share" v-show=false></el-menu-item>
								</el-submenu>
								<el-menu-item index="/ArchivesDate">
									<i class="fa fa-calendar"></i> 归档
								</el-menu-item>
								<el-menu-item index="/Aboutme">
									<i class="fa fa-info"></i> 关于我
								</el-menu-item>
							</el-menu>

						<div class="searchBox">
							<el-input  placeholder="请输入搜索内容" icon="search" v-model="input" @keyup.enter.native="searchEnterFun"  >
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
							</el-input>
						</div>
					</div>
          </div>
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
      pMenu:true,
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
.header_row{
  background-color: rgba(40, 42, 44);
}
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


.headBox{
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 99;
  background: rgba(40, 42, 44);
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
  background-image: url("../../static/img/竹子.jpg");
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

/*移动端*/
.hideMenu .el-menu .el-menu-item {
  color: #fff;
}

.hideMenu  .el-submenu__title{
  color: #fff;
}
.hideMenu > i{
    position: absolute;
    left: 10px;
    top: 12px;
    width: 30px;
    height: 30px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
}
.mobileBox .searchBox {
	padding-left: 40px;
	width: 100%;
	box-sizing: border-box;
}

.hideMenu ul.mlistmenu {
	width: 100%;
	position: absolute;
	left: 0;
	top: 100%;
	box-sizing: border-box;
	z-index: 999;
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12), 0 0 8px 0 rgba(0, 0, 0, .04);
	background: #48456C;
	color: #fff;
	border-right: none;
}
</style>


