<template>
  <div>
  <hea-der></hea-der>
  <new-music></new-music>
  <song-list></song-list>
  <foo-ter></foo-ter>
  </div>
</template>
<script>
import FooTer from './FooTer';
import NewMusic from './NewMusic';
import HeaDer from './HeaDer';
import SongList from './SongList'
export default {
  name: 'MyHome',
  data () {
    return {

    }
  },
  components:{
  	FooTer,
  	NewMusic,
  	HeaDer,
  	SongList
  }
}
</script>


<style scoped>


</style>
