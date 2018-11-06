<template>
  <div class="">
  	<new-musicm v-for='list in lists' :list='list'></new-musicm>
  </div>
</template>

<script>
import NewMusicm from './NewMusic-m'
export default {
	name:'NewMusicml',
	data() {
	  return {
		 	lists:[
		 	 {imgsrc:'../assets/m1.jpg',
		 	  username:'fsl',
		 	  zjname:'hah',
		 	  time:'2.50'
		 	 },
		 	 {imgsrc:'../assets/m1.jpg',
		 	  username:'whr',
		 	  zjname:'hah',
		 	  time:'2.50'
		 	 },
		 	 {imgsrc:'../assets/m1.jpg',
		 	  username:'yz',
		 	  zjname:'lal',
		 	  time:'2.50'
		 	 }
		 	]
	  }
	},
	components:{
  	  NewMusicm
    }
}
</script>

<style>
</style>