<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-13 17:41:41
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-13 17:42:32
 * @Description: 
 * @FilePath: \vue_test\src\App.vue
-->

<template>
	<div>
		<Test />
		<Test2 />
		<Test3 />
	</div>
</template>

<script>
	import Test from './components/Test'
	import Test2 from './components/Test2'
	import Test3 from './components/Test3'

	export default {
		name: 'App',
		components: { Test, Test2, Test3 },
	}
</script>
