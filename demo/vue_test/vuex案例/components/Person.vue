<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-19 14:15:24
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-19 16:59:42
 * @Description: 
 * @FilePath: \vue_test\src\components\Person.vue
-->

<template>
	<div>
		<h1>人员列表</h1>
		<h3 style="red">Count组件的和是：{{ sum }}</h3>
		<h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
		<input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="add" />
		<button @click="add">添加</button>
		<button @click="addWang">添加一个姓王的人</button>
		<button @click="addPersonServer">添加一个人，名字随机</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{ p.name }}</li>
		</ul>
	</div>
</template>

<script>
	// import { mapActions, mapMutations, mapState } from 'vuex'
	import { nanoid } from 'nanoid'

	export default {
		name: 'Person',
		data() {
			return {
				name: '',
			}
		},
		computed: {
			sum() {
				return this.$store.state.countAbout.sum
			},
			personList() {
				return this.$store.state.personAbout.personList
			},
			firstPersonName() {
				return this.$store.getters['personAbout/firstPersonName']
			},

			// ...mapState('countAbout', ['sum']),
			// ...mapState('personAbout', ['personList']),
			// ...mapState('personAbout', ['firstPersonName'])
		},
		methods: {
			add() {
				const personObj = { id: nanoid(), name: this.name }
				this.$store.commit('personAbout/ADD_PERSON', personObj)
				this.name = ''
			},
			addWang() {
				const personObj = { id: nanoid(), name: this.name }
				this.$store.dispatch('personAbout/addPersonWang', personObj)
			},
			addPersonServer() {
				this.$store.dispatch('personAbout/addPersonServer')
			},

			// ...mapMutations('personAbout', { add: 'ADD_PERSON' }),
			// ...mapActions('personAbout', { addWang: 'addPersonWang' }),
		},
	}
</script>

<style scoped></style>
