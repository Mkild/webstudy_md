<template>
	<h1>我是App组件</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>性别：{{ sex }}</h2>
	<button @click="sayHello">Vue3</button>
	<button @click="sayWuhu">Vue2</button>
</template>

<script>
	// import { h } from 'vue'

	export default {
		name: 'App',
        // Vue2老写法
		data() {
			return {
				sex: '男',
			}
		},
		methods: {
			sayWuhu() {
				alert('芜湖起飞')
			},
		},

		// Vue3新增
		setup() {
			// 数据
			let name = '张三'
			let age = 18
			// 方法
			function sayHello() {
				alert(`我叫${name}，我${age}岁了！`)
			}

			// 返回一个对象（常用）
			return {
				name,
				age,
				sayHello,
			}

			// 返回一个渲染函数
			// return () => h('h1', '芜湖')
		},
	}
</script>
