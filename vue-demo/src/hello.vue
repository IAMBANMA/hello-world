<template>
	<div class='panel panel-default'>
		<div class='panel-heading'>
			<h3 class='panel-title'>{{msg.heading}}</h3>
		</div>
		<div class='panel-body'>
			<p>{{msg.context}}</p>
		</div>
	</div>
</template>

<script>
module.exports={
	data:function(){
		return {
			msg:{
				heading:'Hello Vue!',
				context:'this is my first vue demo!'
			}
		}
	}
}
</script>
