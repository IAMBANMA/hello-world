<template>
	<div id='aside'>
		<dl>
			<template v-for='(x,i) of obj'>
				<dt @click='x.show=!x.show'>{{x.lp}}</dt>
				<dd v-show='x.show'>
					<ul>
						<li v-for='(txt,index) of x.ll'><router-link to='i+""+index'>{{txt}}</router-link></li>
					</ul>
				</dd>
			</template>
		</dl>
	</div>
</template>

<style>
	#aside{
		position:absolute;
		top:50px;
		width:200px;
		background-color:#f6f6f6;
	}
	dl{
		margin:0;
	}
	dt{
		background-color:#eee;
		font-size:16px;
		line-height:22px;
		text-indext:30px;
	}
	dd{
		margin:0;
		background-color:#f6f6f6;

	}
	ul{
	margin:0;
	padding:0;
	list-style:none;
	text-indent:20px;
	}
</style>

<script>
	export default {
		data(){
			return {
				obj:[{show:false,lp:'基础总结',ll:['AJAX基础知识点','JS在不同浏览器中的差异','absolute绝对定位','float浮动知识点总结','line-height属性详解','overflow属性详解','relative相对定位','vertical-align属性详解','z-index属性详解','IE条件注释及css hacks']},{show:false,lp:'编码规范',ll:['HTML规范','CSS规范']},{show:false,lp:'sass学习笔记',ll:['基础教程']},{show:false,lp:'CSS笔记',ll:['伪类或伪元素','属性','函数','数据类型','概念','@规则']},{show:false,lp:'HTML基本模板',ll:['HTML5基本模板','HTML TAG一览表']},{show:false,lp:'git简要',ll:['git简要']}]
				
			}
		}
	}
</script>
