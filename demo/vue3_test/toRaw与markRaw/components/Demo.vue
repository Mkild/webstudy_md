<template>
	<!-- <h4>当前求和为：{{ sum }}</h4>
	<button @click="sum++">点我加一</button>
	<hr /> -->
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}k</h2>
	<h2 v-show="person.car">座驾信息：{{ person.car }}</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
	<button @click="showRawPerson">输出最原始的person</button>
	<button @click="addCar">给人添加一台车</button>
    <button @click="person.car.name += '!'">换车名</button>
    <button @click="changePrice">换价格</button>
</template>

<script>
	import { reactive, toRefs, toRaw, markRaw } from 'vue'

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

			function showRawPerson() {
				const p = toRaw(person)
				p.age++
				console.log(p)
			}

			function addCar() {
				let car = { name: '奔驰', price: 40 }
				person.car = markRaw(car)
			}

            function changePrice() {
                person.car.price++
                console.log(person.car.price)
            }

			// 返回一个对象（常用）
			return {
				showRawPerson,
				addCar,
        changePrice,
				person,
				// name: toRef(person, 'name'),
				// age: toRef(person, 'age'),
				// salary: toRef(person.job.j1, 'salary'),
				...toRefs(person),
			}
		},
	}
</script>
