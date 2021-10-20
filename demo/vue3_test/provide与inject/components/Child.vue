<template>
	<div class="child">
		<h3>我是Child组件（子组件）</h3>
		<Son />
	</div>
</template>

<script>
	import Son from '../components/Son'

	export default {
		name: 'Child',
		components: { Son },
	}
</script>

<style scoped>
	.child {
		background-color: slateblue;
		padding: 10px;
	}
</style>
