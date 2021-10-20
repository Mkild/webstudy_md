<template>
	<h1>我是App组件</h1>
	<h2 v-show="person.name">姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
    <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
	<h2>工种：{{ person.job.type }}</h2>
	<h2>薪水：{{ person.job.salary }}</h2>
	<h2>爱好：{{ person.hobby }}</h2>
	<button @click="changeInfo">修改信息</button>
	<button @click="addSex">添加一个sex属性</button>
	<button @click="deleteName">删除一个name属性</button>
</template>

<script>
	import { reactive } from 'vue'

	export default {
		name: 'App',
		// Vue3新增
		setup() {
			// 数据
			let person = reactive({
				name: '张三',
				age: 18,
				job: {
					type: '厨师',
					salary: '10k',
				},
				hobby: ['抽烟', '喝酒', '睡觉'],
			})

			// 方法
			function changeInfo() {
				person.name = '李四'
				person.age = 20
				person.job.type = '司机'
				person.job.salary = '66k'
				console.log(person.job)
				person.hobby[1] = '学习'
			}
			function addSex() {
                person.sex = '男'
            }
			function deleteName() {
                delete person.name
            }

			// 返回一个对象（常用）
			return {
				person,
				changeInfo,
				addSex,
				deleteName,
			}
		},
	}
</script>
