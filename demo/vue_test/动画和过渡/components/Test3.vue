<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-13 17:41:42
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-13 17:45:30
 * @Description: 
 * @FilePath: \vue_test\src\components\Test3.vue
-->

<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group
			appear
			name="animate__animated animate__bounce"
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
		>
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">尚硅谷！</h1>
		</transition-group>
	</div>
</template>

<script>
	import 'animate.css'
	export default {
		name: 'Test',
		data() {
			return {
				isShow: true,
			}
		},
	}
</script>

<style scoped>
	h1 {
		background-color: orange;
	}
</style>
