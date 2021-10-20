<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-14 15:45:40
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-16 17:38:52
 * @Description: 
 * @FilePath: \vue_test\src\App.vue
-->

<template>
	<div class="container">
		<Category title="美食">
			<img src="https://tp.85814.com/d/file/shutu/2020-09/1601195379Eah3.jpg" alt="烧烤" />
		</Category>
		<Category title="游戏">
			<ul>
				<li v-for="(g, index) in games" :key="index">{{ g }}</li>
			</ul>
		</Category>
		<Category title="电影">
				<video controls src="https://data.trails-game.com/video/pv/kuro/PS4%E3%80%8C%E8%8B%B1%E9%9B%84%E4%BC%9D%E8%AA%AC%20%E9%BB%8E%E3%81%AE%E8%BB%8C%E8%B7%A1%E3%80%8D%E3%83%86%E3%82%A3%E3%82%B6%E3%83%BC%E3%83%A0%E3%83%BC%E3%83%93%E3%83%BC.mp4"></video>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'

	export default {
		name: 'App',
		components: { Category },
		data() {
			return {
				foods: ['火锅', '烧烤', '小龙虾', '牛排'],
				games: ['怪物猎人', '刺客信条', '最终幻想', '红色警戒'],
				films: ['《教父》', '《醉拳》', '《赌神》', '《魔戒》'],
			}
		},
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: space-around;
	}
</style>
