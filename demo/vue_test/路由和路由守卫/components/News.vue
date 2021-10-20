<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-20 20:51:09
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-24 16:44:24
 * @Description: 
 * @FilePath: \vue_test\src\components\News.vue
-->

<template>
		<ul>
			<li>news001 <input type="text" /></li>
			<li>news002 <input type="text" /></li>
			<li>news003 <input type="text" /></li>
		</ul>
</template>

<script>
	export default {
		name: 'News',
        activated() {
            console.log('News组件激活了')
        },
        deactivated() {
            console.log('News组件失活了')
        }
	}
</script>

