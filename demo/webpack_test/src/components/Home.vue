<template>
	<div class="msg">{{msg}}</div>
</template>

<script>
	export default {
		name: 'Home',
		setup() {
			return {
				msg: '芜湖起飞！',
			}
		},
	}
</script>

<style>
.msg {
  color: mediumpurple;
}
</style>
