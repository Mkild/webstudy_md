<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-20 21:28:21
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-24 21:26:50
 * @Description: 
 * @FilePath: \vue_test\src\components\Detail.vue
-->

<template>
	<ul>
		<!-- <li>消息编号：{{ $route.query.id }}</li>
		<li>消息标题：{{ $route.query.title }}</li> -->
        <li>消息编号：{{ id }}</li>
		<li>消息标题：{{ title }}</li>
	</ul>
</template>

<script>
	export default {
		name: 'Detail',
		props: ['id', 'title'],
	}
</script>
