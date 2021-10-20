/*
 * @Author: 黄楚贤
 * @Date: 2021-08-19 16:44:32
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-19 16:45:36
 * @Description:
 * @FilePath: \vue_test\src\store\count.js
 */

// 求和相关的配置
export default {
	namespaced: true, // 开启命名空间，不写默认为false
	actions: {
		jiaOdd(context, value) {
			console.log('action中的jiaOdd被调用了')
			if (context.state.sum % 2) {
				context.commit('JIA', value)
			}
		},
		jiaWait(context, value) {
			console.log('action中的jiaWait被调用了')
			setTimeout(() => {
				context.commit('JIA', value)
			}, 500)
		},
	},
	mutations: {
		JIA(state, value) {
			console.log('mutations中的JIA被调用了')
			state.sum += value
		},
		JIAN(state, value) {
			console.log('mutations中的JIAN被调用了')
			state.sum -= value
		},
	},
	state: {
		sum: 0, //当前的和
		school: '蓝翔',
		subject: '挖掘机',
	},
	getters: {
		bigSum(state) {
			return state.sum * 10
		},
	},
}
