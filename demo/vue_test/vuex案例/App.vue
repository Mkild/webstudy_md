<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-17 18:10:55
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-19 14:19:04
 * @Description: 
 * @FilePath: \vue_test\src\App.vue
-->

<template>
	<div>
		<Count />
        <hr />
		<Person />
	</div>
</template>

<script>
	import Count from './components/Count'
	import Person from './components/Person'
    
	export default {
		name: 'App',
		components: { Count, Person },
	}
</script>
