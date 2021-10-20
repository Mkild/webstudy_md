<template>
	<div class="son">
		<h3>我是Son组件（孙组件）</h3>
	</div>
</template>

<script>
	import {inject} from 'vue'

	export default {
		name: 'Son',
        setup() {
            let car = inject('car')
            console.log(car)
        }
	}

</script>

<style scoped>
	.son {
		background-color: seagreen;
		padding: 10px;
	}
</style>
