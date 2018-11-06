<template>
	<div class="footer">
	    <div class="footer-h">    
	       <div class="footer-h1">
	       	<li class="ft-h1-1">下载一个音乐播放器</li>
	       	<ul>
	       	<li>
	       		<p class="h1-2"></p>
	       		<span>PC版</span>
	       	</li>
	       	<li>
	       		<p class="h1-3"></p>
	       		<span>Mac版</span>
	       	</li>
	       	<li>
	       		<p class="h1-4"></p>
	       		<span>Android版</span>
	       	</li>
	       	<li>
	       		<p class="h1-5"></p>
	       		<span>iPhone版</span>
	       	</li>	       	
	       	</ul>
	       </div>
	       
        <div class="footer-h2">
        	<li class="ft-h1-1">特色产品</li>
        	<ul>
	       	<li>
	       		<p class="h2-2"></p>
	       		<span>全民K歌</span>
	       	</li>
	       	<li>
	       		<p class="h2-3"></p>
	       		<span>Super Sound</span>
	       	</li>
	       	<li>
	       		<p class="h2-4"></p>
	       		<span>QPlay</span>
	       	</li>
	       	</ul>
	       	<div class="footer-h2-2">	       		
	       		<span>车载互联</span>
	       		<span>QQ演出</span>
	       	</div>
        </div>
               
        <div class="footer-h3">
        	<li class="ft-h1-1">合作链接</li>     	
        	<ul class="footer-h3-1">
        		<li>CJ ENM</li>
        		<li>腾讯视频</li>
        		<li>手机QQ空间</li>
        		<li>最新版QQ</li>
        		<li>腾讯社交广告</li>
        		<li>电脑管家</li>
        		<li>QQ浏览器</li>
        		<li>腾讯微云</li>
        		<li>腾讯云</li>
        		<li>企鹅FM</li>
        		<li>智能电视网</li>
        		<li>当贝市场</li>
        	</ul>
        </div>
	    </div>
		
		<h3>开放平台</h3>
		
		<div class="footer-center">
			<li>腾讯音乐人平台</li>
			<li>音乐号认证</li>
			<li>机构入驻</li>
		</div>
		
		<ul class="footer-foot">
			<div><span>关于腾讯</span> | <span>About Tencent </span>| <span>服务条款</span> | <span>用户服务协议</span> | <span>隐私政策 </span>| <span>权利声明</span> | <span>广告服务</span> | <span>腾讯招聘</span> | <span>客服中心</span> | <span>网站导航</span></div>
			<li>Copyright © 1998 - 2018 Tencent. All Rights Reserved.</li>
			<div><span>腾讯公司</span> <span>版权所有</span> <span>腾讯网络文化经营许可证</span></div>			
		</ul>
	</div>
</template>

<script>
export default {
	name:'FooTer',
	data() {
	  return {
		 	
	  }
	}
}
</script>

<style scoped>
.footer {
	position: relative;
	color: darkgray;
	width: 1349px;
	height: 589px;
	background-color: #333;
}
.footer-h {
	width: 1200px;
	height: 457px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.footer-h1,
.footer-h2,
.footer-h3 {
	width: 357px;
	height: 230px;
	display: inline-block;
}
li{
	list-style-type: none;
}
.ft-h1-1 {
	width: 357px;
	height: 148px;
	line-height: 148px;
	text-align: left;
	
}
ul li {
	width: 85px;
	height: 81px;
	display: inline-block;
	float: left;
	text-align: center;
}
p {
	display: block;
	width: 46px;
	height: 48px;
	margin: 0 auto;
}
.h1-2 {
	background-image: url(../assets/footer.png);
}
.h1-3 {
	background-image: url(../assets/footer.png);
	background-position: -92px 0px;
}
.h1-4 {
	background-image: url(../assets/footer.png);
	background-position: -186px 0px;
}
.h1-5 {
	background-image: url(../assets/footer.png);
	background-position: -272px 0px;
}
.h2-2 {
	background-image: url(../assets/footer.png);
	background-position: -368px 0px;
}
.h2-3 {
	background-image: url(../assets/footer.png);
	background-position: -458px 0px;
}
.h2-4 {
	background-image: url(../assets/footer.png);
	background-position: -558px 0px;
}
.h1-2:hover {
	background-image: url(../assets/footer.png);
	background-position: 0px 48px;	
}
.h1-3:hover {
	background-image: url(../assets/footer.png);
	background-position: -92px 48px;
}
.h1-4:hover {
	background-image: url(../assets/footer.png);
	background-position: -186px 48px;
}
.h1-5:hover {
	background-image: url(../assets/footer.png);
	background-position: -272px 48px;
}
.h2-2:hover {
	background-image: url(../assets/footer.png);
	background-position: -368px 48px;
}
.h2-3:hover{
	background-image: url(../assets/footer.png);
	background-position: -458px 48px;
}
.h2-4:hover {
	background-image: url(../assets/footer.png);
	background-position: -558px 48px;
}
.footer-h2-2 {
	width: 150px;
	height: 21px;
	margin-top: 100px;
	margin-left: 10px;
	display: flex;
	justify-content: space-between;
}
.footer-h3-1 li{
	width: 100px;
	height: 21px;
	text-align: left;
	margin-bottom: 10px;

}
h3 {

	width: 1190px;
	margin: 0 auto;
	text-align: left;
	position: relative;
	bottom: 150px;
}
.footer-center {
	width: 1190px;
	margin: 0 auto;	
	text-align: left;
	position: relative;
	bottom: 120px;
}
.footer-center li {
	display: inline-block;
	margin-right: 20px;
}
.footer-foot {
	width: 1190px;
	margin: 0 auto;
	text-align: center;
}
.footer-foot li {
	width: 1190px;
	height: 25px;
	display: inline-block;
}
li:hover {
	color: forestgreen;
}
span:hover {
	color: forestgreen;
}
</style>