<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-07 19:57:38
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-13 21:35:45
 * @Description: 
 * @FilePath: \vue_test\src\components\MyItem.vue
-->

<template>
	<transition name="todo" appear>
		<li>
			<label>
				<input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
				<span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
				<input
					type="text"
					v-show="todoObj.isEdit"
					:value="todoObj.title"
					@blur="handleBlur(todoObj, $event)"
					@keyup.enter="handleBlur(todoObj, $event)"
					ref="inputTitle"
				/>
			</label>
			<button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
			<button class="btn btn-edit" v-show="!todoObj.isEdit" @click="handleEdit(todoObj)">编辑</button>
		</li>
	</transition>
</template>

<script>
	import pubsub from 'pubsub-js'

	export default {
		name: 'MyItem',
		// 声明接受todoObj对象
		props: ['todoObj'],
		methods: {
			// 勾选或取消勾选
			handleCheck(id) {
				// 通知App组件将对应的done值取反
				// this.checkTodo(id)
				this.$bus.$emit('checkTodo', id)
			},
			// 删除
			handleDelete(id) {
				if (confirm('确定删除吗？')) {
					// 通知App组件将对应的todo对象删除
					// this.deleteTodo(id)
					// this.$bus.$emit('deleteTodo', id)
					pubsub.publish('deleteTodo', id)
				}
			},
			// 编辑
			handleEdit(todoObj) {
				// todoObj.prototype.hasOwnProperty('isEdit') // 会报错
				if (Object.prototype.hasOwnProperty.call(todoObj, 'isEdit')) {
					todoObj.isEdit = true
				} else {
					this.$set(todoObj, 'isEdit', true)
				}
				this.$nextTick(function() {
					this.$refs.inputTitle.focus()
				})
			},
			// 失去焦点回调（真正执行修改逻辑）
			handleBlur(todoObj, e) {
				todoObj.isEdit = false
				if (!e.target.value.trim()) return alert('输入不能为空！')
				this.$bus.$emit('updateTodo', todoObj.id, e.target.value)
			},
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover {
		background-color: #ddd;
	}

	li:hover button {
		display: block;
	}

	/* 动画 */
	.todo-enter-active {
		animation: atguigu 0.5s linear;
	}

	.todo-leave-active {
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0px);
		}
	}
</style>
