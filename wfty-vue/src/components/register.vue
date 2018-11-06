<template>
	<div class="hello">
		<Header>
			<div class="headimg">
				<img src="../assets/logo.jpg" alt="" />
				<li>|</li>
				<p>注册WFTYmusic</p>
				<div class="h-rig">
					<span>我已注册，现在就</span>
					<button id="href_login" style="width: 60px; height: 35px;">登录</button>
				</div>
			</div>
			<div class="hr"></div>
		</Header>
		<div class="table">
			<form action="" method="" />
				用户名&nbsp;&nbsp;
				<el-input required placeholder="请输入4-16英文数字组合用户名" v-model="formdata.username" clearable class="disable" @blur="onBlur"></el-input>&nbsp;&nbsp;<span v-model="proU" class="tipSpan">{{proU}}</span><br />
				&nbsp;&nbsp;密码&nbsp;&nbsp;&nbsp;
				<el-input type="password" required placeholder="请输入6-16数字字母组合密码" v-model="formdata.passwd" clearable class="disable" @blur="onBlur"></el-input>&nbsp;&nbsp;<span v-model="proP" class="tipSpan">{{proP}}</span><br />
				手机号&nbsp;&nbsp;
				<el-input required placeholder="请输入大陆手机号" v-model="formdata.phonum" clearable class="disable"></el-input><span v-model="proC" class="tipSpan" @blur="onBlur">{{proC}}</span><br />
				验证码&nbsp;&nbsp;
				<el-input placeholder="请输入验证码"  clearable class="disable innerw"></el-input><br />
				&nbsp;&nbsp;性别&nbsp;&nbsp;&nbsp;
				<el-radio v-model="formdata.radio" label="1">男</el-radio>
				<el-radio v-model="formdata.radio" label="2">女</el-radio>
				<el-button class="btn" type="primary" @click="onSubmit">立即登录</el-button>
			</form>
		</div>
		<div class="reg-sms">
			<h3 class="reg-sms-title">手机快速注册</h3>
			<div class="reg-sms-content">
				<p class="reg-sms-p reg-sms-p-text">请使用中国大陆手机号，编辑短信：</p>
				<p class="reg-sms-p reg-sms-p-warn">6-14位字符（支持数字/字母/符号）</p>
				<p class="reg-sms-p reg-sms-p-text">作为登录密码，发送至：</p>
				<p class="reg-sms-p reg-sms-p-warn">1069 0691 036590</p>
				<p class="reg-sms-p reg-sms-p-last">即可注册成功，手机号即为登录帐号。</p>
				<p class="reg-sms-qrcode">
					<img src="../assets/upreg.png" style="width: 168px;height: 168px;"><br />
					<span>请使用手机微信进行扫码</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data() {
			return {
				formdata: {
					username: '',
					passwd: '',
					phonum: '',
					radio: '1',
				},
				proU: '',
				proP: '',
				proC: '',
				err: 0,
				mydata: ''
			}
		},
		methods: {
			onBlur() {
				var This = this;
				This.err = 0;
				var uname = This.formdata.username;
				var passwd = This.formdata.passwd;
				var phonum = This.formdata.phonum;
				if (uname) {
					var reguname = /^[a-zA-Z0-9_-]{4,16}$/;
					var regu = reguname.test(uname);
					if (!regu) {
						This.proU = "";
						This.proU = "用户名格式不正确";
						This.err++;
					} else {
						This.proU = "";
					}
				}

				if (passwd) {
					var regpasswd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
					var regp = regpasswd.test(passwd);
					if (!regp) {
						This.proP = "";
						This.proP = "密码格式不正确";
						This.err++;
					} else {
						This.proP = "";
					}
				}
				if (phonum) {
					var regtel = /^[1][3,4,5,7,8][0-9]{9}$/;
					var regph = regtel.test(phonum);
					if (!regph) {
						This.proC = "";
						This.proC = "手机号格式不正确";
						This.err++;
					} else {
						This.proP = "";
					}
				}
			},
			onSubmit() {
				var This = this;
				if (This.err) {
					return;
				}
				axios({
						method: "post",
						url: "http://localhost:8088/register",
						data: This.formdata
					}).then(response => {
						console.log("发送Ajax请求成功", response.data);
						This.mydata = response.data;
						if(This.mydata.r == 'user_existed'){
							This.proU = "用户名已存在";
						}
						if(This.mydata.r == 'ok'){
//							this.$router.push('/MyHome');
							this.$router.push({ path:'/' })
						}
					}).catch(response => {
						console.log("发送Ajax请求失败",response);
					})					
			}

			}
		}
			
</script>
<style scoped>
	*{
	padding: 0;
	margin: 0;
	}
	.headimg{
		width: 980px;
		height: 75px;
		margin: 0 auto;
		position: relative;
		clear: both;
		line-height: 75px;
	}
	.headimg img {
		width: 160px;
		height: 63px;
		display: inline-block;
		position: relative;
		top: 20px;
	}
	li{
		list-style: none;
		display: inline-block;
		margin-left: 8px;
		font-size: 20px;
		color: #C9C5C5;
	}
	.headimg p{
		font-size: 25px;
		display: inline-block;
		color: #5f5e77f5;
		margin-left: 5px;
	}
	.h-rig{
		display: inline-block;
		position: relative;
		top: 8px;
		left: 400px;
	}
	.hr{
		width: 1200px;
		height: 1px;
		margin: 0 auto;
		border-bottom: 1px solid #CCCCCC;
		box-shadow: 3px 1px 2px #CCCCCC;
		margin-top: 8px;
	}
	.table{
		width: 450px;
		position: absolute;
		top: 120px;
		left: 200px;
	}
	.el-input{
		margin-bottom: 20px;
	}
	.el-input__inner{
		height: 30px;
	}
	.disable{
		width: 230px;
	}
	.tipSpan{
		color: red;
		font-size: 14px;
	}
	.innerw{
		width: 160px;
	}
	.btn{
		margin-left: 56px;
		margin-top: 20px;
		width: 240px;
		height: 40px;
	}
	.reg-sms {
    width: 258px;
    border: 1px solid #d1eeff;
    background-color: #f5fbff;
    margin-top: 40px;
    position: absolute;
	top: 75px;
	left: 820px;
    float: right;
}
 .reg-sms .reg-sms-title {
    margin: 0 10px;
    padding-left: 30px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e6edf2;
    font-size: 14px;
    color: #666;
}
.reg-sms .reg-sms-p-text {
    color: #666;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 8px;
}
.reg-sms .reg-sms-p {
    margin: 0 18px;
}
.reg-sms .reg-sms-p-warn {
    font-size: 14px;
    color: #f18300;
    font-weight: 700;
}
.reg-sms .reg-sms-p-last {
    color: #666;
    font-size: 12px;
    margin-top: 8px;
}
.reg-sms-qrcode {
    text-align: center;
    padding: 20px 0 10px;
}
</style>