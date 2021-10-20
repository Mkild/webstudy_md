/*
 * @Author: 黄楚贤
 * @Date: 2021-08-04 17:32:19
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-04 17:43:33
 * @Description:
 * @FilePath: \vue_basic\Vue学习\单文件组件\main.js
 */

import App from './App.vue'

new Vue({
	el: '#app',
    template: `<App></App>`,
	components: { App },
    data() {
        return {
            
        }
    },
})
