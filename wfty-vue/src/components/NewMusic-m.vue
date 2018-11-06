<template>
	<div class="nw-m">   
		<ul class="nw-mx">
			<img src="../assets/m1.jpg"/>		
		<div class="nw-mz" >
			<li>{{list.username}}</li>
			<li>{{list.zjname}}</li>
		</div>		
		<p>{{list.time}}</p>
		</ul>	
	</div>
</template>

<script>
export default {
	name: 'NewMusicm',
	props: ['list'],
	data() {
		return {

		}
	}
}
</script>

<style scoped>
.nw-m {
	width: 400px;
	height: 111px;
	display: inline-block;
	border-bottom: 1px solid darkgray;
}

.nw-mx {
	width: 380px;
	height: 99px;
	position: relative;
}

.nw-mz {
	position: relative;
	top: -8px;
	display: inline-block;
}

.nw-mz li {
	margin: 10px;
}



img {
	width: 86px;
	height: 86px;
	position: relative;
	top: 14px;
}

p {
	height: 21px;
	display: inline-block;
	position: relative;
	right: -196px;
	top: -24px;
}
</style>