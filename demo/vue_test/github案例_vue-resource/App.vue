<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-14 15:45:40
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-16 16:46:00
 * @Description: 
 * @FilePath: \vue_test\github案例_vue-resource\App.vue
-->

<template>
	<div class="container">
		<Search />
		<List />
	</div>
</template>

<script>
	import Search from './components/Search'
	import List from './components/List'

	export default {
        name: 'App',
		components: { Search, List },
	}
</script>
