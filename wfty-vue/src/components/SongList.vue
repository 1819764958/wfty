<template>
   <div>
	<div id="bg">
		<h2>歌单推荐</h2>
		<div id="SLists">
			<div class="sl" v-for="songlist in songlists" >
				<div class="sl-img">
				<div class="sl-playl">
				<div class="sl-play"></div>
				</div>
		 <router-link :to='"/DayMusic/"+songlist.id'>
				<img :src='songlist.imgsrc' class="slimg" />
		 </router-link>
				</div>
				<a href="/Play">{{songlist.listname}}</a>
				<p>播放量：{{songlist.playnum}}</p>
			</div>
		</div>
	</div>
	<div class="inhead"><h2 class="inh2">排行榜</h2></div>
	<div class="nav-cen">
	<div id="topLi" class="top0">
		<h3 class="inh3">巅峰榜</h3>
		<a  class="popTip" href="">流行指数</a>
		<div class="ulist">
			<ul class="ulist-ul">
				<li>
					<a href="#">1&nbsp;&nbsp;&nbsp;不能说的秘密</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林俊杰</p>
				</li><br />
				<li>
					<a href="#">2&nbsp;&nbsp;&nbsp;该死的温柔</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王嘉尔</p>
				</li><br />
				<li>
					<a href="#">3&nbsp;&nbsp;&nbsp;归去来兮</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;叶炫清</p>
				</li><br />
				<li>
					<a href="#">4&nbsp;&nbsp;&nbsp;落</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艾辰</p>
				</li>
			</ul>
		</div>
	</div>
	<div id="topLi" class="top1">
		<h3 class="inh3">巅峰榜</h3>
		<a  class="popTip" href="">流行指数</a>
		<div class="ulist">
			<ul class="ulist-ul">
				<li>
					<a href="#">1&nbsp;&nbsp;&nbsp;不能说的秘密</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林俊杰</p>
				</li><br />
				<li>
					<a href="#">2&nbsp;&nbsp;&nbsp;该死的温柔</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王嘉尔</p>
				</li><br />
				<li>
					<a href="#">3&nbsp;&nbsp;&nbsp;归去来兮</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;叶炫清</p>
				</li><br />
				<li>
					<a href="#">4&nbsp;&nbsp;&nbsp;落</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艾辰</p>
				</li>
			</ul>
		</div>
	</div>
	<div id="topLi" class="top2">
		<h3 class="inh3">巅峰榜</h3>
		<a  class="popTip" href="">流行指数</a>
		<div class="ulist">
			<ul class="ulist-ul">
				<li>
					<a href="#">1&nbsp;&nbsp;&nbsp;不能说的秘密</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林俊杰</p>
				</li><br />
				<li>
					<a href="#">2&nbsp;&nbsp;&nbsp;该死的温柔</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王嘉尔</p>
				</li><br />
				<li>
					<a href="#">3&nbsp;&nbsp;&nbsp;归去来兮</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;叶炫清</p>
				</li><br />
				<li>
					<a href="#">4&nbsp;&nbsp;&nbsp;落</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艾辰</p>
				</li>
			</ul>
		</div>
	</div>
	<div id="topLi" class="top3">
		<h3 class="inh3">巅峰榜</h3>
		<a  class="popTip" href="">流行指数</a>
		<div class="ulist">
			<ul class="ulist-ul">
				<li>
					<a href="#">1&nbsp;&nbsp;&nbsp;不能说的秘密</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林俊杰</p>
				</li><br />
				<li>
					<a href="#">2&nbsp;&nbsp;&nbsp;该死的温柔</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王嘉尔</p>
				</li><br />
				<li>
					<a href="#">3&nbsp;&nbsp;&nbsp;归去来兮</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;叶炫清</p>
				</li><br />
				<li>
					<a href="#">4&nbsp;&nbsp;&nbsp;落</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艾辰</p>
				</li>
			</ul>
		</div>
	</div>
	<div id="topLi" class="top4">
		<h3 class="inh3">巅峰榜</h3>
		<a  class="popTip" href="">流行指数</a>
		<div class="ulist">
			<ul class="ulist-ul">
				<li>
					<a href="#">1&nbsp;&nbsp;&nbsp;不能说的秘密</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林俊杰</p>
				</li><br />
				<li>
					<a href="#">2&nbsp;&nbsp;&nbsp;该死的温柔</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王嘉尔</p>
				</li><br />
				<li>
					<a href="#">3&nbsp;&nbsp;&nbsp;归去来兮</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;叶炫清</p>
				</li><br />
				<li>
					<a href="#">4&nbsp;&nbsp;&nbsp;落</a>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艾辰</p>
				</li>
			</ul>
		</div>
	</div>
	</div>
   </div>
</template>
<script>
export default {
  name: 'SongList',
  props:['songlist'],
  data () {
    return {
       songlists:[
           {
           	id:1,
           	listname:'每日新歌：刘惜君完美演绎',
           	playnum:'2.6万',
           	imgsrc :require("../assets/sl01.jpg")
           },
           {
           	id:2,
           	listname:'清新小调：清泉般声音沁入心',
           	playnum:'2.5万',
           	imgsrc :require("../assets/sl02.jpg")          	
           },
           {
           	id:3,
           	listname:'我本孤独成性 却愿为你深情',
           	playnum:'2.8万',
           	imgsrc :require("../assets/sl03.jpg" )         	
           },{
           	id:4,
           	listname:'每日新歌：刘惜君完美演绎',
           	playnum:'2.7万',
           	imgsrc :require('../assets/sl04.jpg')
           },{
           	id:5,
           	listname:'当古风歌名拆分成两首曲子',
           	playnum:'2.6万',
           	imgsrc :require('../assets/sl03.jpg')
           }
       ]
    }
  },
  methods:{
  	hover:function(){
  		
  	}
  }
}
</script>
<style scoped>
	#bg {
		background: linear-gradient(#ccc, #fff);
	}
	
	#SLists {
		width: 1200px;
		height: 260px;
		margin: auto;
		display: flex;
		justify-content: space-between;
	}
	
	h2 {
		padding: 20px;
		text-align: center;
	}
	
	.sl {
		width: 224px;
		height: 285px;
		display: inline-block;
		/*overflow: hidden;*/
	}
	.sl-playl {
		width: 224px;
		height: 224px;
		position: absolute;
		background-color: rgba(0,0,0,0.2);
		visibility: hidden;
		/*display: none;*/
	}
	.sl-playl:hover{
		visibility: visible;
	}
	.sl-play {
		width: 49px;
		height: 49px;
		border-radius: 50%;
		background-color: white;
		position: absolute;	
		top: 87px;
		left: 87px;	
		background-image: url(../assets/play.png);
		background-size: 40px 40px;
		background-repeat: no-repeat;
		background-position: 9px 4px;
		z-index: 20;
		
	}
	.sl-img {
		width: 224px;
		height: 224px;
		overflow: hidden;
		position: relative;
	}
	.sl .slimg {
		width: 224px;
		height: 224px;
		cursor: pointer;
		transition: all 0.6s;
	}
	.slimg:hover {
		width: 234px;
		height: 224px;
		transform: scale(1.4);
	}
	
	a {
		font-size: 15px;
		text-decoration: none;
		color: black;
	}
	
	p {
		color: #999;
		font-size: 16px;
	}
	
	.inhead {
		width: 1200px;
		height: 90px;
		margin: auto;
		padding: 20px;
	}
	.inh2 {
		line-height: 90px;
	}
	.nav-cen {
		width: 1200px;
		margin: 0 auto;
		/*background: linear-gradient(#fff, #ccc);*/
		display: flex;
		justify-content: space-between;
	}
	#topLi {
		width: 224px;
		height: 500px;
		display: inline-block;
		margin: auto;
		text-align: center;
/*		background: url('../assets/bgImg.jpg') left top no-repeat;*/
		position: relative;
		overflow: hidden;
		margin-bottom: 50px;
	}
	.top0 {
		background-image: url('../assets/bgImg.jpg');
	}
	.top1 {
		background-image: url('../assets/bgImg.jpg');
		background-position: 224px 0px;
	}
	.top2 {
		background-image: url('../assets/bgImg.jpg');
		background-position: 448px 0px;
	}
	.top3 {
		background-image: url('../assets/bgImg.jpg');
		background-position: -224px 0px;
	}
	.top4 {
		background-image: url('../assets/bgImg.jpg');
		background-position: -448px 0px;
	}

	.inh3 {
		width: 66px;
		height: 22px;
		margin: 25px auto 9px;
	}
	.popTip {
		height: 36px;
	    line-height: 1;
	    font-size: 26px;
	    color: #fff;
	    font-weight: 400;
	}
	.ulist {
		width: 164px;
		height: 296px;
		position: absolute;
		top: 150px;
		left: 30px;
	}
	.ulist .ulist-ul{
		text-align: left;
		list-style: none;
	}
	.ulist .ulist-ul a{
		font-size: 16px;
		color: #fff;
	}
	.ulist .ulist-ul p{
		font-size: 16px;
		color: #fff;
		margin-top: 10px;
	}
</style>
