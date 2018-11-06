<template>
<div>
    <hea-der></hea-der>
	<div class="mymusic-bg">
		<div class="mymusic-ph"></div>
		<div class="mymusic-name">
			<h1>lala</h1>
			<li></li>
		</div>	
		<div class="mymusic-fs">
			<li class="mymusic-fs1"> 
				<p>0</p>
				<p>关注</p>
			</li>
			<li>
				<p>0</p>
				<p>粉丝</p>
			</li>
		</div>
	</div>
	<div class="mymusic-like">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我喜欢" @click="ajaxGet" name="first">
                 <el-tabs type="border-card">
                    <el-tab-pane label="歌曲0">
                    	<img src="../assets/sss.png" alt=""  style="margin-top: 30px" />
                    	<ul class="song-header">
                    		<li class="song-name">歌曲</li>
                    		<li class="singner">歌手</li>
                    		<li class="zhuanji">专辑</li>
                    		<li class="dutime">时长</li>
                    	</ul>
                    	<ul class="list-model">
                    		<li>
                    			<router-link to="/Musicinfo"><div class="list-Item" @click="demoLink">
                    				<div class="song-name">
                    					<a href="" class="songWord">寻<span class="songdescribe">《花儿与少年3·冒险季》主题曲</span></a>
                    					<img class="imgmv" src="../assets/mv.png" alt="" />
                    					<ul class="incon-play">
	                    					<li ><img :src="play" alt="" /></li>
	                    					<li ><img class="stobig" :src="add" alt="" /></li>
	                    					<li ><img class="bigtos" :src="down" alt="" /></li>
	                    					<li ><img :src="blish" alt="" /></li>
                    					</ul>
                    				</div>
                    				<div class="singner">
										<a href="" title="华晨宇" class="singer_name">华晨宇</a>
                    				</div>
                    				<div class="zhuanji">
                    					<a href="" title="寻" class="song_zhuanli">寻</a>
                    				</div>
                    				<div class="song-time">
                    					<span>04:30</span>
                    				</div>
                    			</div>	</router-link>
                    		</li>
                    		<li></li>
                    	</ul>
                    </el-tab-pane>
                    <el-tab-pane label="歌单0"></el-tab-pane>
                    <el-tab-pane label="专辑0"></el-tab-pane>
                    <el-tab-pane label="视频0"></el-tab-pane>                  
                 </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="我创建的歌单" name="second"></el-tab-pane>
            <el-tab-pane label="关注" name="third"></el-tab-pane>
            <el-tab-pane label="粉丝" name="fourth"></el-tab-pane>
            <el-tab-pane label="我上传的视频" name="fifth"></el-tab-pane>
        </el-tabs>
	</div>
	<foo-ter></foo-ter>
</div>
</template>

<script>
import HeaDer from './header'
import FooTer from './FooTer'
import Musicinfo from './Musicinfo'
export default {
	name:'MyMusic',
	data() {
	  return {	
	  	activeName: 'second',
		play: require('../assets/lplay.png'),
		add: require('../assets/add.png'),
		down: require('../assets/down.png'),
		blish: require('../assets/delete.png'),
//		resdata: {
//			
//		}
	  }
	},
	components:{
	HeaDer,
  	FooTer 	
 },
     methods: {
        handleClick (tab, event) {console.log(tab, event);},
        
        demoLink () {
        	this.$router.push({ path:'/SongInfo'});
        },
        ajaxGet () {
        	axios({
					method: "get",
					url: "http://localhost:8088/myLikes",
				}).then(response => {
					console.log(response.data);
//					This.mydata = response.data;
				}).catch(response => {
					console.log("发送Ajax请求失败",response);
				})	
        }
    }
}
</script>
<style scoped>
.mymusic-bg {
	width: 1356px;
	height: 380px;
	background-image: url(../assets/bg_profile.jpg);
	position: relative;
}
.mymusic-ph  {
	width: 110px;
	height: 110px;
	position: relative;
	margin: 0 auto;
	background-image: url(../assets/m1.jpg);
	border: 3px solid lightgoldenrodyellow;
	border-radius: 50%;
	top: 20px;
}
.mymusic-name {
	width: 1200px;
	height: 64px;
	position: relative;
	top: 58px;
	margin: 0 auto;	
	text-align: center;
}
h1 {
	width: 100px;
	position: relative;
	left: -50px;
	display: inline-block;
}
.mymusic-name li {
	display: inline-block;
	width: 36px;
	height: 36px;
	background-image: url(../assets/logo.png);
}
.mymusic-fs {
	width: 1200px;
	height: 40px;
	position: relative;
	top: 78px;
	margin: 0 auto;	
	text-align: center;
}
.mymusic-fs {
	color: white;
}
.mymusic-fs li {
	width: 79px;
	height: 44px;
	display: inline-block;
}
.mymusic-fs1 {
	border-right: 1px solid gainsboro;
}
.mymusic-like {
	width: 1200px;
	height: 562px;
	position: relative;
	margin: 0 auto;
	top: -38px;
}

</style>

<style>
.el-tabs__item {
	color: white;
	font-size: 16px;
}
.el-tabs__nav-scroll {
    text-align: left;
}
.el-tabs__item:hover {
	color: #31c27c;
}
.mymusic-like .el-tabs__item{
    color: white;
}
.el-tabs__item.is-active {
    color: #31c27c;
}	
.el-tab-pane {
	text-align: left;
}
.el-tabs--border-card {
	border: none;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item {
	color: #000000;
}
.song-header {
	height: 50px;
	line-height: 50px;
	background-color: rgba(0, 0, 0, .01);
	color: #999;
	clear: both;
}
.song-name {
	padding-left: 20px;
	float: left;
    width: 45.5%;
    position: relative;
    white-space: normal;
}
.singner{
	float: left;
    padding-left: 20px;
    width: 23.5%;
    box-sizing: border-box;
    
}
.zhuanji{
	float: left;
    padding-left: 20px;
    width: 23.5%;
    box-sizing: border-box;
}
.dutime{
	float: left;
    width: 50px;
}
.list-Item{
	clear: both;
    font-size: 0;
    overflow: hidden;
}
.song-name,.singner,.zhuanji,.song-time{
	line-height: 50px;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    position: relative;
}
.songWord,.singer_name{
	text-decoration: none;
	color: black;
}
.song-name .imgmv{
	position: absolute;
	top: 17px;
	left: 245px;
}
.songdescribe{
	display: inline-block;
	margin-left: 10px;
	color: #A9A9A9;
}
.incon-play{
	width: 205px;
	height: 42px;
	float: left;
	position: absolute;
	top: 2px;
	left: 350px;
	display: none;
}
.list-Item:hover>.song-name>.incon-play{
	display: block;
}
.incon-play li{
	float: left;
	margin-left: 10px;
	width: 40px;
	height: 40px;
}
.incon-play img{
	width: 25px;
	height: 25px;
}

.zhuanji .song_zhuanli{
	text-decoration: none;
}
.song-time span{
	color: #808080;
}
</style>