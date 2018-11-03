<template>      
    <div>
        <div class="left-introduce">
            <h1>归档</h1>

            <div id="contain-archives">
                <div class="archives-content" v-for="(item, index) of archives" :key="index">
                    <h3>{{item.date}}</h3>
                    <ul>
                        <li v-for="(singal, one) of item.article" :key="one">
                            <a :href="'#/Detail?aid='+singal.id">{{singal.title}}</a>
                            <span>{{singal.time}}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return{
            archives: []
        }
    },
    methods:{
        getArchives() {
            axios.get('api/archives.json')
            .then((res) => {
                this.archives = res.data.data
                console.log(this.archives)
            })
        }
    },
    mounted() {
        this.getArchives()
    }
}
</script>


<style>
a, a:hover{
    color: #2479CC;
    text-decoration: none;
    font-size: 20px;
}
.left-introduce{
    background: #fff;
    padding: 20px;
}
.left-introduce h1{
    padding: 10px 0;
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
} 
#contain-archives{
    margin-top:40px; 
}
.archives-content{
    padding: 30px 10px;
}
.archives-content h3{
    font-weight: 700;
    font-size: 22px;
    line-height: 43px;
    margin-bottom: 10px; 
    border-bottom: 1px dashed #E4E7ED;
}
.archives-content ul{
    list-style-type:disc;
}
.archives-content li{
    list-style-type:disc;
    margin-left:5px; 
    margin-bottom:5px; 
}
</style>
