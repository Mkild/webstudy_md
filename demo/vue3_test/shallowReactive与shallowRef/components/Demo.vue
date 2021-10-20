<template>
	<h4>当前的x值是：{{ x.y }}</h4>
	<button @click="x.y++">点我x加一</button>
	<hr />
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}k</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
	import { reactive, toRefs, shallowRef } from 'vue'

	export default {
		name: 'Demo',
		setup() {
			// 数据
			// let person = shallowReactive({ // 只考虑第一层数据的响应式
			let person = reactive({
				name: '张三',
				age: 18,
				job: {
					j1: {
						salary: 20,
					},
				},
			})

			let x = shallowRef({
				y: 0,
			})

			// 返回一个对象（常用）
			return {
				x,
				// person,
				// name: toRef(person, 'name'),
				// age: toRef(person, 'age'),
				// salary: toRef(person.job.j1, 'salary'),
				...toRefs(person),
			}
		},
	}
</script>
