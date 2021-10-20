<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-16 16:36:36
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-16 19:47:42
 * @Description: 
 * @FilePath: \vue_test\src\components\Category.vue
-->

<template>
	<div class="category">
		<h3>{{ title }}分类</h3>
		<!-- 定义一个插槽 -->
		<slot name="center">我是默认值，当使用者没有传递具体结构时，我会出现1</slot>
        <slot name="footer">我是默认值，当使用者没有传递具体结构时，我会出现2</slot>
	</div>
</template>

<script>
	export default {
		name: 'Category',
		props: ['title'],
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
