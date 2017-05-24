<template>
	<div id='app'>
		<router-view name='header'></router-view>
		<router-view name='aside'></router-view>
		<router-view name='content'></router-view>
	</div>
</template>

<style scoped>
	#app{
		position:relative;
	}
</style>

<script>
	export default{
		name: 'app'
	}

</script>
