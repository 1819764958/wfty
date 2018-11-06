<template>
	<div class="header">
		<nav>
			<ul>
				<li><img id="header-img" src="//y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x"/></li>
				<li><a href="" class="checked">音乐馆</a></li>
				<li><router-link to="/mymusic">我的音乐</router-link></li>
				<li><a href="">客户端</a></li>
				<li><a href="">音乐号</a></li>
				<li><a href="">VIP</a></li>
			</ul>
			
		</nav>
		<div class="search">
			<div class="search-inner">
				<input type="text" name="search" id="" value="" placeholder="搜索音乐"/>
				<button class="search-btn"><i class="search-icon"></i></button>
				
			</div>
			
		</div>
		<div class="nav-login">
			<router-link  to="/Login">登录</router-link>
			<a href="" class="checked">开通绿钻豪华版</a>
			<a href="">开通付费包</a>
		</div>
		<div class="subnav">
			
		
		<ul class="subnav-inner">
			<li><a class="subnav-checked" href="">首页</a></li>
			<li><a href="">歌手</a></li>
			<li><a href="">专辑</a></li>
			<li><a href="">排行榜</a></li>
			<li><a href="">分类歌单</a></li>
			<li><a href="">电台</a></li>
			<li><a href="">MV</a></li>
			<li><a href="">数字专辑</a></li>
			<li><a href="">票务</a></li>
		</ul>
		</div>
	</div>
</template>
<script>
	export default {
  name: 'HeaDer',
  data () {
    return {
    	
    }
  }
}
</script>

<style scoped>
	.header {
		width: 1200px;
		height: 142px;
		margin: 0 auto;
		position: relative;
	}
	.header ul li ,a{
		padding: 0 20px;
		line-height: 90px;
		height: 90px;
		text-align: center;
		font-size: 18px;
		float: left;
		color: #000;
	}
	#header-img {
		width: 176px;
		height: 46px;
		margin-top: 23px;
	}
	nav {
		border-bottom: 1px solid #f2f2f;
	}
	
	.alink:hover{
		color: #31C27C;
	}
	.checked {
		background-color: #31c27c;
		color: #fff;
	}
	.checked:hover {
		color: #fff;
	}
	.search {
		width: 220px;
		height: 64px;
		position: absolute;
		top: 23px;
		right: 284px;
	}
	.search-inner {
		
		height: 38px;
		border: 1px solid #c9c9c9;
		border-radius: 3px;
		padding: 0 33px 0 11px;

	}
	.search-inner input {
		border: none;
		width: 176px;
		height: 36px;
		outline: none;
	}
	.search .search-btn {
		width: 38px;
		height: 35px;
		position: absolute;
		top: 0;
		right: 0;
		border: 0 none;
		overflow: visible;
		background: 0 0;
		outline: none;
		cursor: pointer;
	}
	.search-icon {
		background-image: url(../assets/icon.png);
		background-position: 0 -40px;
		width: 16px;
		height: 16px;
		position: absolute;
		top: 50%;
		margin-top: -8px;
		right: 11px;
		
	}
	.search .search-btn:hover .search-icon{
		background-position: 0 -60px;
	}
	.nav-login {
		width: 264px;
		height: 90px;
		position: absolute;
		right: 0;
	}
	.nav-login a:first-of-type {
		font-size: 16px;
		padding: 0;
	}
	.nav-login a:last-of-type {
		border: 1px solid #C9C9C9;
		border-radius: 2px;
	}
	.nav-login a {
		display: inline-block;
		box-sizing: border-box;
		height: 38px;
		line-height: 38px;
		margin: 24px 0 0 10px;
		padding: 0 9px;
		font-size: 13px;
	}
	.subnav {
		margin-right: -50px;
		height: 51px;
		line-height: 51px;
		padding-top: 90px;
	}
	.subnav li a {
		font-size: 15px;
	}
	.subnav ul {
		padding-left: 230px;
		
		height: 38px;
		border-top: 1px solid #f2f2f2;
	}
	.subnav-inner li a {
		height: 51px;
		line-height: 51px;
	}
	.subnav-checked {
		color: #31C27C;
	}
</style>