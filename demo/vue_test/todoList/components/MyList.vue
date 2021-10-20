<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-07 19:57:26
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-11 21:03:23
 * @Description: 
 * @FilePath: \vue_test\src\components\MyList.vue
-->

<template>
	<ul class="todo-main">
		<MyItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" />
	</ul>
</template>

<script>
	import MyItem from './MyItem'

	export default {
		name: 'MyList',
		components: { MyItem },
		props: ['todos'],
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
