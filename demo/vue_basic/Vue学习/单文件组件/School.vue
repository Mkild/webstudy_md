<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-04 14:06:13
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-04 17:16:54
 * @Description: 
 * @FilePath: \vue_basic\Vue学习\单文件组件\school.vue
-->

<template>
	<div class="demo">
		<h2>学校名称：{{ schoolName }}</h2>
		<h2>学校地址：{{ address }}</h2>
		<button @click="showName">点我提示学校名</button>
	</div>
</template>

<script>
	export default {
		name: 'School',
		data() {
			return {
				schoolName: '尚硅谷',
				address: '北京',
			}
		},
		methods: {
			showName() {
				alert(this.name)
			},
		},
	}
</script>

<style>
	.demo {
		background-color: orange;
	}
</style>
