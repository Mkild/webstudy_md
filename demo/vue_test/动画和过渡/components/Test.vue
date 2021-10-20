<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-13 17:41:41
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-13 17:42:44
 * @Description: 
 * @FilePath: \vue_test\src\components\Test.vue
-->

<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition name="hello" appear>
			<h1 v-show="isShow">你好啊！</h1>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'Test',
		data() {
			return {
				isShow: true,
			}
		},
	}
</script>

<style scoped>
	h1 {
		background-color: orange;
	}

	.hello-enter-active {
		animation: atguigu 0.5s linear;
	}

	.hello-leave-active {
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0px);
		}
	}
</style>
