<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-14 15:45:40
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-15 00:03:00
 * @Description: 
 * @FilePath: \vue_test\src\App.vue
-->

<template>
	<div id="app">
		<button @click="getStudents">获取学生信息</button><br />
		<hr />
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'App',
		methods: {
			// 拿到学生信息
			getStudents() {
				axios.get('http://localhost:8081/hack/students').then(
					(response) => {
						console.log('请求成功了', response.data)
					},
					(error) => {
						console.log('请求失败了', error.message)
					}
				)
			},
			// 拿到汽车信息
			getCars() {
				axios.get('http://localhost:8081/demo/cars').then(
					(response) => {
						console.log('请求成功了', response.data)
					},
					(error) => {
						console.log('请求失败了', error.message)
					}
				)
			},
		},
	}
</script>
