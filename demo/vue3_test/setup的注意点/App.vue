<template>
	<Demo @hello="showHelloMsg" msg="你好" school="蓝翔">
        <template v-slot:qwe>
            <span>村村幼儿园</span>
        </template>
    </Demo>
</template>

<script>
	import Demo from './components/Demo'

	export default {
		name: 'App',
		components: { Demo },
		setup() {
			function showHelloMsg(value) {
				alert(`你好，你触发了hello事件，我收到的参数是${value}`)
			}

			return {
				showHelloMsg,
			}
		},
	}
</script>
