/*
 * @Author: 黄楚贤
 * @Date: 2021-08-19 16:44:37
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-19 17:07:54
 * @Description:
 * @FilePath: \vue_test\src\store\person.js
 */

import axios from 'axios'
import { nanoid } from 'nanoid'

// 人员管理相关的配置
export default {
	namespaced: true, // 开启命名空间，不写默认为false
	actions: {
		addPersonWang(context, value) {
			if (value.name.indexOf('王') === 0) {
				context.commit('ADD_PERSON', value)
			} else {
				alert('添加的人必须姓王！')
			}
		},
		addPersonServer(context) {
			axios.get('https://v1.hitokoto.cn').then(
				(response) => {
					context.commit('ADD_PERSON', { id: nanoid(), name: response.data.hitokoto })
				},
				(error) => {
                    alert(error.message)
                }
			)
		},
	},
	mutations: {
		ADD_PERSON(state, value) {
			console.log('mutations中的ADD_PERSON被调用了')
			state.personList.unshift(value)
		},
	},
	state: {
		personList: [{ id: '001', name: '张三' }],
	},
	getters: {
		firstPersonName(state) {
			return state.personList[0].name
		},
	},
}
