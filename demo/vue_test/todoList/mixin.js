/*
 * @Author: 黄楚贤
 * @Date: 2021-08-07 15:20:36
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-07 15:42:28
 * @Description:
 * @FilePath: \vue_test\src\mixin.js
 */

export const hunhe = {
	methods: {
		showName() {
			alert(this.name)
		},
	},
	mounted() {
		console.log('起飞')
	},
}

export const hunhe2 = {
	data() {
		return {
			x: 100,
			y: 200,
		}
	},
	mounted() {
		console.log('芜湖')
	},
}
