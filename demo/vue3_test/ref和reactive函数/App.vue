<template>
	<h1>我是App组件</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>工种：{{ job.type }}</h2>
	<h2>薪水：{{ job.salary }}</h2>
    <h2>爱好：{{ hobby }}</h2>
	<button @click="changeInfo">修改信息</button>
</template>

<script>
	import { ref, reactive } from 'vue'

	export default {
		name: 'App',
		// Vue3新增
		setup() {
			// 数据
			let name = ref('张三')
			let age = ref(18)
			let job = reactive({
				type: '厨师',
				salary: '10k',
			})
            let hobby = reactive(['抽烟', '喝酒', '烫头'])

			// 方法
			function changeInfo() {
				name.value = '李四'
				age.value = 20
                job.type = '司机'
                job.salary = '66k'
				console.log(job)
                hobby[1] = '学习'
			}


			// 返回一个对象（常用）
			return {
				name,
				age,
				job,
                hobby,
				changeInfo,
			}
		},
	}
</script>
