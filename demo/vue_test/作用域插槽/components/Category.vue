<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-16 16:36:36
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-16 20:57:10
 * @Description: 
 * @FilePath: \vue_test\src\components\Category.vue
-->

<template>
	<div class="category">
		<h3>{{ title }}分类</h3>
		<!-- 定义一个插槽 -->
		<slot :games="games">我是默认值，当使用者没有传递具体结构时，我会出现</slot>
	</div>
</template>

<script>
	export default {
		name: 'Category',
		props: ['title'],
        data() {
			return {
				games: ['怪物猎人', '刺客信条', '最终幻想', '红色警戒'],
			}
		},
	}
</script>

<style scoped>
	.category {
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}

	h3 {
		text-align: center;
		background-color: orange;
	}

	img {
		width: 100%;
	}
    
	video {
		width: 100%;
	}
</style>
