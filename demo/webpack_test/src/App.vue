<template>
	<div>
		<h2 class="example">{{ msg }}</h2>
		<Home />
	</div>
</template>

<script>
	import Home from '@/components/Home'

	export default {
		name: 'App',
		components: { Home },
		setup() {
			let msg = 'Hello webpack!'

			return {
				msg,
			}
		},
	}
</script>

<style scoped>
	.example {
		color: seagreen;
	}
</style>
