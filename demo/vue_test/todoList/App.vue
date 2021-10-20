<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-06 16:01:21
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-15 22:14:49
 * @Description: 
 * @FilePath: \vue_test\todoList\App.vue
-->

<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader @addTodo="addTodo" />
				<MyList :todos="todos" />
				<MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
			</div>
		</div>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js' // 引入消息订阅发布
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter'

	export default {
		name: 'App',
		components: { MyHeader, MyList, MyFooter },
		data() {
			return {
				// 状态数据（状态提升）
				todos: JSON.parse(localStorage.getItem('todos')) || [],
			}
		},
		watch: {
			todos: {
				deep: true,
				handler(value) {
					localStorage.setItem('todos', JSON.stringify(value))
				},
			},
		},
		methods: {
			// 添加一个todoObj
			addTodo(todoObj) {
                let isRepeat = false
                // 校验输入的用户名称是否与已有的重复
				this.todos.forEach((todo) => {
					if (todoObj.title === todo.title) {
						alert('该任务名称已存在，不能重名')
						isRepeat = true
					}
				})
				if (isRepeat === false) this.todos.unshift(todoObj)
			},
			// 勾选或取消勾选一个todo
			checkTodo(id) {
				this.todos.forEach((todo) => {
					if (todo.id === id) todo.done = !todo.done
				})
			},
			// 编辑一个todo
			updateTodo(id, title) {
				this.todos.forEach((todo) => {
					if (todo.id === id) todo.title = title
				})
			},
			// 删除一个todo
			deleteTodo(_, id) {
				this.todos = this.todos.filter((todo) => todo.id !== id)
			},
			// 检索并统计已完成的todo
			checkAllTodo(done) {
				this.todos.forEach((todo) => {
					todo.done = done
				})
			},
			// 清除所有已完成的todo
			clearAllTodo() {
				this.todos = this.todos.filter((todo) => !todo.done)
			},
			//
		},
		mounted() {
			this.$bus.$on('checkTodo', this.checkTodo)
			this.$bus.$on('updateTodo', this.updateTodo)
			// this.$bus.$on('deleteTodo', this.deleteTodo)
			this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
		},
		beforeDestroy() {
			this.$bus.$off('checkTodo')
			this.$bus.$off('updateTodo')
			// this.$bus.$off('deleteTodo')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}

	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn-edit {
		color: #fff;
		background-color: #4d78c7;
		border: 1px solid #2d64cc;
		margin-right: 5px;
	}

	.btn-edit:hover {
		color: #fff;
		background-color: #2d64cc;
	}

	.btn:focus {
		outline: none;
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
