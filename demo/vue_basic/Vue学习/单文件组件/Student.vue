<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-04 17:18:16
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-04 17:24:32
 * @Description: 
 * @FilePath: \vue_basic\Vue学习\单文件组件\Student.vue
-->

<template>
	<div>
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生年龄：{{ age }}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Student',
		data() {
			return {
				name: '张三',
				age: 18,
			}
		},
	}
</script>
