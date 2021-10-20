import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'

import { person } from './js/utils.js'
import './js/login'
import './js/image'
import './js/font'
import './ts/test'

if (module.hot) {
	module.hot.accept(['./js/utils.js', './js/font.js'], () => {
		console.log('模块更新了')
	})
}

createApp(App).mount('#app')

const hello = () => {
	alert('Hello!' + person.name)
}

const p1 = new Promise((resolve, reject) => {
	console.log(111)
})

console.log(p1)
console.log(123)

hello()

/* axios
	.get('/api/users')
	.then((res) => {
		console.log(res.data)
	})
	.catch((err) => {
		console.log(err)
	}) */

/*
 * @babel/plugin-transform-arrow-functions
 * @babel/plugin-transform-block-scoping
 */
