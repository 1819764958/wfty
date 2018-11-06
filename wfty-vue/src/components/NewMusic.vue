<template>
	<div class="newmusic">
		<div class="nm-header">
		<h3>新歌首发</h3>
		</div>		
		<div class="nw-play">
            <el-button class="nw-btn" icon="el-icon-caret-right">播放全部</el-button>           
        </div>               
        <div class="block">
	        <el-carousel height="350px" indicator-position='outside'>
		         <el-carousel-item v-for="item in 4" :key="item">
                 <new-musicml></new-musicml>
		         <new-musicml></new-musicml>	
		         <new-musicml></new-musicml>	
		         </el-carousel-item>
	        </el-carousel>
        </div>
	</div>
</template>

<script>
import NewMusicml from './NewMusic-ml'
export default {
	name:'NewMusic',
	data() {
	  return {
		 	
	  }
	},
	components:{
  	  NewMusicml
    }
}
</script>

<style scoped>
.newmusic {
	width: 1349px;
	height: 556px;
	background: linear-gradient(#ccc,#fff);	
	margin: 0 auto;
}
h3 {
	width: 1200px;
	height: 114px;
	margin: 0 auto;
	line-height: 114px;
	font-size: 35px;
	letter-spacing: 10px;
	}
.nw-play {
	width: 1200px;
	height: 40px;
	margin: 0 auto;
	position: relative;	
}
.nw-btn {
	font-size: 18px;
	position: absolute;
	left: -22px;
	top: -10px;
	background-color: rgba(255,255,255,0.2);
	border: 1px solid grey;
}
  
/*.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0 auto;
  }*/
.block {
	width: 1200px;
	margin: 0 auto;
}
</style>