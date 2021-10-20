<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-15 21:42:03
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-16 15:11:19
 * @Description: 
 * @FilePath: \vue_test\src\components\Search.vue
-->

<template>
	<div>
		<section class="jumbotron">
			<h3 class="jumbotron-heading">Search Github Users</h3>
			<div>
				<input type="text" placeholder="enter the name you search" v-model="keyWord" @keyup.enter="searchUsers" />&nbsp;
				<button @click="searchUsers">Search</button>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Search',
		data() {
			return {
				keyWord: '',
			}
		},
		methods: {
			searchUsers() {
                // 请求前更新List的数据
				this.$bus.$emit('updateListData', { isFirst: false, isLoading: true, errMsg: '', users: [] })
				axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
					(response) => {
						console.log('请求成功了', response.data.items)
                        // 请求成功后更新List的数据
						this.$bus.$emit('updateListData', { isLoading: false, errMsg: '', users: response.data.items })
					},
					(error) => {
						console.log('请求失败了', error.message)
                        // 请求失败后更新List的数据
						this.$bus.$emit('updateListData', { isLoading: false, errMsg: error.message, users: [] })
					}
				)
			},
		},
	}
</script>
