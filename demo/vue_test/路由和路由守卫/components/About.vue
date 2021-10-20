<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-20 17:42:08
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-25 16:22:24
 * @Description: 
 * @FilePath: \vue_test\src\components\About.vue
-->

<template>
	<h2>我是About内容</h2>
</template>

<script>
	export default {
		name: 'About',
		// 通过路由规则，进入该组件时被调用
		beforeRouteEnter(to, from, next) {
			console.log('beforeRouteEnter', to, from)
			if (to.meta.isAuth) {
				// 判断是否需要鉴权
				if (localStorage.getItem('school') === 'lanxiang') {
					next()
				} else {
					alert('无权限查看')
				}
			} else {
				next()
			}
		},
		// 通过路由规则，离开该组件时被调用
		beforeRouteLeave(to, from, next) {
			console.log('beforeRouteLeave', to, from)
			next()
		},
	}
</script>
