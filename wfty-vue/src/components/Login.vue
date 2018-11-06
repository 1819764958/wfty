<template>
<div class="login-bg">
	<div class="login-header">
		<h3>登录FTYW.Music</h3>
	</div>
	<div class="login">
    <form>
    	<div class="user">
    	<li></li>	
    	<input type="text" value="" v-model="resdata.uname"/>
    	<span>{{usertip}}</span>
    	</div>
    	<div class="pad">
    	<li></li>	
    	<input type="password" value="" v-model="resdata.passwd"/>
    	<span>{{passtip}}</span>
    	</div>
    	<button type="button" @click="logincli">登录</button>
    	<button type="button">注册</button>
    </form> 
    </div>   
</div>
</template>

<script>
import axios from 'axios'
export default {
	name:'Login',
	data() {
      return {
		resdata: {
			uname: '',
			passwd: ''
		},
		usertip: '',
		passtip: ''
        }
     },
     methods: {
     	logincli () {
     		axios({
					method: "post",
					url: "http://localhost:8088/login",
				}).then(response => {
					console.log(response.data);
//					This.resdata = response.data;

				}).catch(response => {
					console.log("发送Ajax请求失败",response);
				})
     	}
      }
    }
  
</script>

<style  scoped>
.login-bg {
	color: lightseagreen;
	width: 1366px;
	height: 655px;
    background-image: url(../assets/xinkong.jpg);
    background-size: 1366px 655px;
    position: relative;
}
.login-header {
	font-size: 26px;	
	width: 400px;
	position: relative;
	top: 100px;
	left: 400px;
}
.login {
	background-color: rgba(0,0,0,0.3);
	width: 500px;
	height: 300px;
	margin: 0 auto;
	position: relative;
	top: 150px;
	position: relative;
	text-align: center;
}	
.login div {
	width: 400px;
	height: 50px;
	/*margin: 0 auto;*/
	position: relative;
	top: 10px;
	left:50px ;
	
}
li {
	display: inline-block;
	width: 37px;
	height: 38px;
	position: relative;
	top: 14px;
	left: 6px;
    background-position: -2px -4px;	
    border-color:rgba(0,0,0,0.4) 
}
.user li {
    background-image: url(../assets/zhanghao.jpg);

}
.pad li {
    background-image: url(../assets/mima.jpg);
}
input {
	font-size: 16px;
	width: 240px;
	height: 35px;
	margin-top: 30px;
	background-color: rgba(0,0,0,0.3);
	border-color: rgba(250,250,250,0.4);
	color: lightseagreen;
}
button {
	width: 100px;
	height: 30px;
	background-color: lightseagreen;
	border: none;
	margin-top: 92px;
	position: relative;
	margin-left: 10px;
	border-radius: 3px;
}
h3 {
	width: 400px;
}
</style>