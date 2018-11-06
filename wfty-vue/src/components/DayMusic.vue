<template>
	<div>
		<hea-der></hea-der>
		<div class="musicinfo">
			<div class="musicinfo-header">
				<img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000001sQK1S2p1sDq.jpg?max_age=2592000" />
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
					</ul>
					<div class='musicinfo-header-rplay'>
						<button type="button" class="btn1"><img src="../assets/play1.png"/>播放</button>
						<button type="button"><img src="../assets/shoucang1.png"/>已收藏</button>
						<button type="button"><img src="../assets/pinglun.png"/>评论（3297）</button>
						<button type="button"><img src="../assets/must.png"/>更多</button>
					</div>
				</div>
			</div>
		</div>
		<div class="song-list">
			<div class="song">

				<ul class="song-header">
					<li class="song-name">歌曲</li>
					<li class="singner">歌手</li>
					<li class="zhuanji">专辑</li>
					<li class="dutime">时长</li>
				</ul>
				<ul class="list-model">
					<li>
						<router-link to="/Musicinfo">
							<div class="list-Item" @click="demoLink">
								<div class="song-name">
									<a href="" class="songWord">寻<span class="songdescribe">《花儿与少年3·冒险季》主题曲</span></a>
									<img class="imgmv" src="../assets/mv.png" alt="" />
									<ul class="incon-play">
										<li><img :src="play" alt="" /></li>
										<li><img class="stobig" :src="add" alt="" /></li>
										<li><img class="bigtos" :src="down" alt="" /></li>
										<li><img :src="blish" alt="" /></li>
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
							</div>
						</router-link>
					</li>
					<li></li>
				</ul>
			</div>
		</div>
		<foo-ter></foo-ter>
	</div>
</template>

<script>
	import HeaDer from './HeaDer';
	import FooTer from './FooTer';
	export default {
		name: 'DayMusic',
		props:['songlist'],
		data() {
			return {
		        activeName: 'second',
		        play: require('../assets/lplay.png'),
		        add: require('../assets/add.png'),
		        down: require('../assets/down.png'),
		        blish: require('../assets/delete.png'),		        
			}
		},
		methods: {
        handleClick (tab, event) {console.log(tab, event);},
        
        demoLink () {
        	this.$router.push({ path:'/SongInfo'});
           }
        },
		components: {
			HeaDer,
			FooTer,
		},
		created:function(){
			console.log(this.$route.params);
			
		}
   }	
</script>

<style scoped>
	.musicinfo {
		width: 100%;
		background: linear-gradient(#ccc, #fff);
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
		width: 300px;
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
	
	.song-header {
		height: 50px;
		line-height: 50px;
		background-color: rgba(0, 0, 0, .01);
		color: #999;
		clear: both;
	}
	
	.song-list {
		width: 1200px;
		margin: 0 auto;
	}
	
	.song-name {
		padding-left: 20px;
		float: left;
		width: 45.5%;
		position: relative;
		white-space: normal;
	}
	
	.singner {
		float: left;
		padding-left: 20px;
		width: 23.5%;
		box-sizing: border-box;
	}
	
	.zhuanji {
		float: left;
		padding-left: 20px;
		width: 23.5%;
		box-sizing: border-box;
	}
	
	.dutime {
		float: left;
		width: 50px;
	}
	
	.list-Item {
		clear: both;
		font-size: 0;
		overflow: hidden;
	}
	
	.song-name,
	.singner,
	.zhuanji,
	.song-time {
		line-height: 50px;
		height: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 14px;
		position: relative;
	}
	
	.songWord,
	.singer_name {
		text-decoration: none;
		color: black;
	}
	
	.song-name .imgmv {
		position: absolute;
		top: 17px;
		left: 245px;
	}
	
	.songdescribe {
		display: inline-block;
		margin-left: 10px;
		color: #A9A9A9;
	}
	
	.incon-play {
		width: 205px;
		height: 42px;
		float: left;
		position: absolute;
		top: 2px;
		left: 350px;
		display: none;
	}
	
	.list-Item:hover>.song-name>.incon-play {
		display: block;
	}
	
	.incon-play li {
		float: left;
		margin-left: 10px;
		width: 40px;
		height: 40px;
	}
	
	.incon-play img {
		width: 25px;
		height: 25px;
	}
	
	.zhuanji .song_zhuanli {
		text-decoration: none;
	}
	
	.song-time span {
		color: #808080;
	}
</style>