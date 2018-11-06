<template>
	<div class="comment">
		<div class="comment-min">
			<img :src='view.imgsrc' />
			<h4>{{view.username}}</h4>
			<pre>{{view.content}}</pre>
			<div class="comment-view">
				<span class="comment-time">{{view.time}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Comment',
	props: ['view'],
	data() {
		return {

		}
	}
}
</script>

<style scoped>
.comment {
	width: 1200px;
	position: relative;
	margin: 0 auto;
	margin-bottom: 50px;
}
.comment-min {
	width: 857px;
	border-bottom: 1px solid gainsboro;
}
.comment-min img {
	width: 38px;
	height: 38px;
	border-radius: 50%;
	display: inline-block;
}
h4 {
	display: inline-block;
	position: relative;
	top: -22px;
	left: 5px;
}
pre {
	width: 801px;
	position: relative;
	top: -16px;
	left: 46px;
	text-align: left;
	font-size: 16px;
}
.comment-view {
	width: 801px;
	height: 28px;
	position: relative;
	left: 44px;
}
</style>