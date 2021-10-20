<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-15 21:41:46
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-16 15:28:50
 * @Description: 
 * @FilePath: \vue_test\src\components\List.vue
-->

<template>
	<div>
		<div class="row">
			<!-- 展示用户列表 -->
			<div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
				<a :href="user.html_url" target="_blank">
					<img :src="user.avatar_url" style="width: 100px" />
				</a>
				<p class="card-text">{{ user.login }}</p>
			</div>
		</div>
		<!-- 展示欢迎词 -->
		<h1 v-show="info.isFirst">欢迎使用！</h1>
		<!-- 展示加载中 -->
		<h1 v-show="info.isLoading">加载中...</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'List',
		data() {
			return {
				info: {
					isFirst: true,
					isLoading: false,
					errMsg: '',
					users: [],
				},
			}
		},
		mounted() {
			this.$bus.$on('updateListData', (dataObj) => {
				console.log('我是List组件，收到数据：', dataObj)
				this.info = { ...this.info, ...dataObj }
			})
		},
        beforeDestroy() {
            this.$bus.$off('updateListData')
        }
	}
</script>

<style scoped>
	.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: 0.75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: 0.75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>
