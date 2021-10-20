<!--
 * @Author: 黄楚贤
 * @Date: 2021-08-20 20:51:02
 * @LastEditors: 黄楚贤
 * @LastEditTime: 2021-08-23 21:53:39
 * @Description: 
 * @FilePath: \vue_test\src\components\Message.vue
-->

<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    name: 'detail', // 也可以是path
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>&nbsp;&nbsp;
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>

                 <!-- 跳转路由并携带params参数，to的对象写法 -->
                <!-- <router-link :to="{
                    name: 'detail', // 必须写name代替path
                    params: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>&nbsp;&nbsp; -->
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Message',
		data() {
			return {
				messageList: [
					{ id: '001', title: '消息001' },
					{ id: '002', title: '消息002' },
					{ id: '003', title: '消息003' },
				],
			}
		},
        methods: {
            pushShow(m) {
                this.$router.push({
                    name: 'detail', // 也可以是path
                    query: {
                        id: m.id,
                        title: m.title
                    }
                })
            },
             replaceShow(m) {
                this.$router.replace({
                    name: 'detail', // 也可以是path
                    query: {
                        id: m.id,
                        title: m.title
                    }
                })
            },
        }
	}
</script>
