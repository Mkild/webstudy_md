<template>
	<div class="app">
		<h3>我是App组件（祖组件） {{name}}--{{price}}</h3>
		<Child />
	</div>
</template>

<script>
	import Child from './components/Child'
	import { reactive, toRefs, provide } from 'vue'

	export default {
		name: 'App',
		components: { Child },
		setup() {
			let car = reactive({
				name: '奔驰',
				price: '40w',
			})

            provide('car', car)

			return {
				...toRefs(car),
			}
		},
	}
</script>

<style scoped>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
