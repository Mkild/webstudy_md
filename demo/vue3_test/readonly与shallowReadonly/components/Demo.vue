<template>
	<h4>当前求和为：{{ sum }}</h4>
	<button @click="sum++">点我加一</button>
	<hr />
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}k</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
	import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'

	export default {
		name: 'Demo',
		setup() {
			// 数据
			let person = reactive({
				name: '张三',
				age: 18,
				job: {
					j1: {
						salary: 20,
					},
				},
			})
			let sum = ref(0)

            sum = readonly(sum)
            person = shallowReadonly(person)

			// 返回一个对象（常用）
			return {
				sum,
				// person,
				// name: toRef(person, 'name'),
				// age: toRef(person, 'age'),
				// salary: toRef(person.job.j1, 'salary'),
				...toRefs(person),
			}
		},
	}
</script>
