<template>
	<div>
		<hea-der></hea-der>
		<div class="musicinfo">		
		<div class="musicinfo-header">
			<img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000001sQK1S2p1sDq.jpg?max_age=2592000"/>
			<div class="musicinfo-header-r">
				<h1 title="红尘 (《将夜》影视剧夫子人物主题曲)">红尘 (《将夜》影视剧夫子人物主题曲)</h1>
			    <div class="musicinfo-header-rgs">
			    	<li></li>
			    	<span>魏晨</span>
			    </div>
			    <ul class="musicinfo-view">
			    	<li>专辑：红尘</li>
			    	<li>语种：国语</li>
			    	<li>流派：Soundtrack</li>
			    	<li>唱片公司：燃音乐</li>
			    	<li>发行时间：2018-11-01</li>
			    </ul>
			    <div class='musicinfo-header-rplay'>
			    	<button type="button" class="btn1"><img src="../assets/play1.png"/>播放</button>
			    	<button type="button"><img src="../assets/shoucang1.png"/>已收藏</button>
			    	<button type="button"><img src="../assets/pinglun.png"/>评论（3297）</button>
			    	<button type="button"><img src="../assets/must.png"/>更多</button>    	
			    </div>
			</div>
		</div>
		<div class="musicinfo-music">
			<pre>
				红尘 (《将夜》影视剧夫子人物主题曲)- 魏晨
				词：王裕仁
				曲：王铮亮
				制作：王铮亮
				编曲：闫天午
				和声：王铮亮
				小提琴：文薇
				古筝：常静
				萧：张笛
				弦乐：国际首席爱乐乐团弦乐
				录音棚：金田
				录音棚和声：王铮亮
				人声录音混音师：时俊峰 BY 福达STUDIO
				录音棚：时俊峰 BY 福达STUDIO
				音乐出品发行：燃音乐
				拂晓上西楼昨夜风 
				已入秋凉风当沽酒青山远
				琴悠悠乘兴泛轻舟书声朗 
				细雨凉我问清风不如 
				与我红尘走一场
				那年春天桃花香
				切来桃花配酒尝看世间 
				逍遥人生如题 痴儿笑
				我笑众生多喧嚣求不得解药
				情也痴 恨也扰
				伤离别 爱寂寥
				熙攘攘
				总为名利折了腰
				可怜霎那红颜老
				韶华最易销
				只笑 红尘多纷扰
				看那江山许多娇
				浮尘繁世任逍遥
				醉里看花应美好
				且把故人邀只道 
				红尘多纷扰红尘多美好
			</pre>
		</div>
		</div>	
		
		<div class="musicinfo-commnet">
			<h1>评论<span>共3276条评论</span></h1>			
		<div class="musicinfo-text">
			<textarea class="musicinfo-text1"   name="music-comment" rows="5" >期待你的神评论</textarea>
		</div>	
		<div class="musicinfo-button">
			<li></li>
			<button type="button">发表评论</button>
		</div>
		</div>
		<h4>热门评论</h4>
		<comment v-for='view in views' :view='view'></comment>
		<h4>最新评论</h4>
		<comment v-for='view in views' :view='view'></comment>
		<foo-ter></foo-ter>
	</div>
</template>

<script>
import HeaDer from './HeaDer';
import FooTer from './FooTer';
import Comment from './Comment'
export default {
	name:'Musicinfo',
	data() {
	  return {	
	  	views:[
		 	 {imgsrc :require('../assets/sl04.jpg'),
		 	  username:'长界风语',
		 	  content:'旧时情谊一盏饮，尚有角韵念不尽。来日纷纷无人语，红尘醉去何归处？',
		 	  time:'11月1号'
		 	 },
		 	 {imgsrc :require('../assets/sl04.jpg'),
		 	  username:'长界风语',
		 	  content:'旧时情谊一盏饮，尚有角韵念不尽。来日纷纷无人语，红尘醉去何归处？',
		 	  time:'11月2号'
		 	 },
		 	 {imgsrc :require('../assets/sl04.jpg'),
		 	  username:'风语',
		 	  content:'旧时情谊一盏饮，尚有角韵念不尽。来日纷纷无人语，红尘醉去何归处？',
		 	  time:'11月2号'
		 	 }
		 	 ,
		 	 {imgsrc :require('../assets/sl04.jpg'),
		 	  username:'风语',
		 	  content:'旧时情谊一盏饮，尚有角韵念不尽。来日纷纷无人语，红尘醉去何归处？',
		 	  time:'11月2号'
		 	 }
		 	 ,
		 	 {imgsrc :require('../assets/sl04.jpg'),
		 	  username:'风语',
		 	  content:'旧时情谊一盏饮，尚有角韵念不尽。来日纷纷无人语，红尘醉去何归处？',
		 	  time:'11月2号'
		 	 }
		 	 ,
		 	 {imgsrc :require('../assets/sl04.jpg'),
		 	  username:'风语',
		 	  content:'旧时情谊一盏饮，尚有角韵念不尽。来日纷纷无人语，红尘醉去何归处？',
		 	  time:'11月2号'
		 	 }
		 	]
	  }
	},
	components: {
		HeaDer,
		FooTer,
		Comment
	}
}
</script>

<style scoped>
.musicinfo {
    width: 100%;
	background: linear-gradient(#ccc,#fff);	
    
}
.musicinfo-header {
	width: 1200px;
	height: 250px;

    
	margin: 0 auto;
	position: relative;
}	
.musicinfo-header img {
	width: 250px;
	height: 250px;
	display: inline-block;
} 	
.musicinfo-header-r {
	width: 895px;
	height: 250px;
	display: inline-block;
	position: absolute;
/*	background-color: yellow;*/
	right: 0px;
	
}
h1 {
	font-weight: 400;
	position: relative;
	top: 10px;
	display: inline-block;
}
.musicinfo-header-rgs {
	width: 805px;
	height: 24px;
	margin-top: 20px;
}
.musicinfo-header-rgs li {
	width: 24px;
	height: 24px;
	display: inline-block;
	background-image: url(../assets/icon.png);
	background-position: -16px -236px;
}
.musicinfo-header-rgs span {
	display: inline-block;
	position: relative;
	top: -6px;
}
.musicinfo-view {
	width: 510px;
    height: 89px;
}
.musicinfo-view li {
	width: 250px;
	height: 27px;
	display: inline-block;
	margin-left: 2px;
}
button {
	width: 114px;
	height: 35px;
	line-height: 35px;
	border: 1px solid gainsboro;
	background-color: white;
	border-radius: 3px;
}
.musicinfo-header-r img {
	width: 16px;
	height: 18px;
	position: relative;
	top: 4px;
	left: -4px;
}
.btn1 {
	background-color: #31c27c;
	border: 1px solid #31c27c;
}
.musicinfo-header-rplay {
	margin-top: 20px;
}
.musicinfo-music {
	width: 300px;
	position: relative;
	left: -82px;
	top: 40px;
}
.musicinfo-commnet {
	width: 1200px;
	position: relative;
	margin: 0 auto;
	height: 300px;
/*	background-color: aquamarine;*/
	top: 30px;
}
.musicinfo-commnet span {
	font-size: 14px;
	margin-left: 5px;
}
.musicinfo-text1 {
	width: 857px;
	height: 104px;
	background-color: rgba(195,188,188,0.1);
	position: relative;
	top: 20px;
}
.musicinfo-button {
	width: 300px;
	position: relative;
	left: 745px;
	top: 30px;
}
.musicinfo-button button {
	background-color: #31C27C;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	color: white;
}
h4 {
	width: 1200px;
	height: 60px;
	position: relative;
	margin: 0 auto;
}
</style>