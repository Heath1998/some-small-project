<template>
    <div>
        <div class="right-list">
            <div class="right-list-img">
                <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537644100822&di=0eb23352d299eb5f234994854a2378cd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F26%2F20160326192608_5xTWd.jpeg">
            </div>
            <div class="right-list-body">
                <p>平凡的在校大学生</p>
                <div class="right-body-font">
                    <div>
                        <a href="https://github.com/zehongfan"  title="github">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="" title="QQ">
                            <i class="fa fa-qq" aria-hidden="true"></i>
                        </a>
                        <a href="" title="微博">
                           <i class="fa fa-weibo" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div>
                        <a href="" title="微信">
                            <i class="fa fa-weixin" aria-hidden="true"></i>
                        </a>
                        <a href="https://blog.csdn.net/qq_40646960" title="CSDN">
                            <i class="fa " aria-hidden="true">C</i>
                        </a>
                        <a href="" title="简历">
                           <i class="fa  fa-file-word-o" aria-hidden="true"></i>
                        </a>
                        <a href="#/Aboutme" title="更多">
                           <i class="fa  fa-ellipsis-h" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="right-like" @click="visit_add">
            <p style="font-size:28px;">Favour</p>
            <div>
                <span>{{this.data_num}}</span>
            </div>
        </div>
        <div class="addouter">

        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default{
        data(){
            return {
                data_num:Number
            }
        },
        methods:{
            visit_add() {
                this.data_num = this.data_num+1;
                this.addFavour()
            },
            getFavour() {
                axios.get('/api/getfavour')
                .then((res) => {
                    this.data_num = res.data.favour
                })
            },
            addFavour() {
                axios.get('/api/addfavour')
                .then((res) => {

                })
            }
        },
        mounted() {
            this.getFavour()
        }
    }
</script>


<style>
.addouter{
    height: 200px;
}
.right-list{
    padding: 15px;
    background: #fff;
    padding-bottom: 30px;
    margin-bottom:20px;
}
.right-list:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}
.right-list-img{
    width: 100%;
}

.right-list-img img{
    width: 100%;
    border-radius:50%; 
    overflow:hidden;
}
.right-list-body p{
    font-size: 14px;
    margin: 5px 0 8px 0;
    font-weight: 700;
    text-align: center;
}
.right-body-font div{
    text-align: center;
}
.right-body-font a{
    display: inline-block;
    margin-bottom: 7px;
    position: relative;
    color: #444;    
}
.right-body-font a i{
    height: 42px;
    width: 42px;
    font-size:18px;
    margin: 0 3.2px;
    line-height: 42px;
    text-align: center;
    border-radius: 42px;
    background: rgba(0, 0, 0, 0.1);
}
.right-body-font a i:hover{
     color:#fff;
    background: #F4692C;
}

.right-like{
    padding: 15px;
    margin-bottom: 20px;
    background: #fff;
    cursor: pointer;
}
.right-like:hover{
            transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}
.right-like p
{
    color: #DF2050;
    margin-top:10px;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
 
    margin-bottom: 10px; 
}
.right-like div {
    color: rgb(62, 58, 104);
    text-align: center;
    font-size: 40px;
    line-height: 100px;
}

</style>
