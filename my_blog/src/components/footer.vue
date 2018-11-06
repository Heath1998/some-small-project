<template>
    <div>
        <div class="fcontainer">
            <p>
                <span>博客已运行</span>
            </p>
            <p>
                托管于 <a href="https://github.com/" target="_blank" >GitHub</a>. <a href="" target="_blank">百度统计</a> 提供网站统计服务. <a href="" target="_blank">CloudXNS</a> 提供 DNS 解析服务.
            </p>
            <p>
                © 2018 <a href="#">Mango Ya</a>. 由 <a href="https://cn.vuejs.org/" target="_blank">Vue</a> 强力驱动. Theme By <a href="" target="_blank">diygod.me</a>. 京ICP备17071595号-1.
            </p>
            <p>
                <span>Made with</span> <img class="fheart" src=""/>  
            </p>
        </div>
    </div>    
</template>

<script>
export default {
    name:'foot'
}
</script>

<style scoped>
 .fcontainer{
    width:100%;
    margin-top: 50px;
    background: #232323;
    /*top:294px;*/
    /*left:0;*/
    /*position: absolute;*/
    padding:15px 10px 10px 10px;
    box-sizing: border-box;
    /*z-index: 1;*/
    width: 100%!important;
}
.fcontainer{
    text-align: center;
}
.fcontainer p a {
    color: blue;
}
</style>
