<template lang='jade'>
	div
	  p{{greeting}} world!
	  other-component
</template>

<script>
	import otherComponent from './otherComponent.vue';

	export default{
		data (){
			return {greeting:'hello'}	
		},
		components:{
			otherComponent
		}
	}
</script>

<style lang='stylus' scoped>
p
  font-size 2em;
  text-align center;
</style>
