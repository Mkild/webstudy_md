<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-14 15:45:40
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-16 20:59:36
 * @Description: 
 * @FilePath: \vue_test\src\App.vue
-->

<template>
	<div class="container">
		<Category title="游戏">
			<template scope="kiseki">
				<ul>
					<li v-for="(g, index) in kiseki.games" :key="index">{{ g }}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(g, index) in games" :key="index">{{ g }}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'

	export default {
		name: 'App',
		components: { Category },
	}
</script>

<style>
	.container,
	.foot {
		display: flex;
		justify-content: space-around;
	}

	h4 {
		text-align: center;
	}
</style>
