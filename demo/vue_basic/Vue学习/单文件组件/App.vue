<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-04 17:25:13
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-05 16:37:40
 * @Description: 
 * @FilePath: \vue_basic\Vue学习\单文件组件\App.vue
-->

<template>
<div>
    <School></School>
    <Student></Student>
</div>
</template>

<script>
	import School from './School'
	import Student from './Student'
	export default {
		name: 'App',
        component: {
            School,
            Student
        }
	}
</script>

<style></style>
