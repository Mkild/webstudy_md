// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Message from '../components/Message'
import Detail from '../components/Detail'

const router = new VueRouter({
    mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/about',
			meta: { title: '主页' },
		},
		{
			name: 'guanyu',
			path: '/about',
			component: About,
			meta: { isAuth: true, title: '关于' },
            beforeEnter: (to, from, next) => {
                console.log('about独享路由守卫', to, from)
                if (to.meta.isAuth) {
                    // 判断是否需要鉴权
                    if (localStorage.getItem('school') === 'lanxiang') {
                        next()
                    } else {
                        alert('无权限查看')
                    }
                } else {
                    next()
                }
            },
		},
		{
			name: 'zhuye',
			path: '/home',
			redirect: '/home/news',
			component: Home,
			children: [
				{
					path: 'news',
					component: News,
					meta: { isAuth: true, title: '新闻' },
					beforeEnter: (to, from, next) => {
						console.log('news独享路由守卫', to, from)
						if (to.meta.isAuth) {
							// 判断是否需要鉴权
							if (localStorage.getItem('school') === 'lanxiang') {
								next()
							} else {
								alert('无权限查看')
							}
						} else {
							next()
						}
					},
				},
				{
					path: 'message',
					component: Message,
					meta: { isAuth: true, title: '消息' },
					children: [
						{
							name: 'detail',
							path: 'detail',
							component: Detail,
							meta: { title: '详情' },

							// prop的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
							// props: {a: 1, b: 'Hello'}

							// prop的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
							// props: true

							// prop的第三种写法，值为函数
							props($route) {
								return { id: $route.query.id, title: $route.query.title }
							},
						},
					],
				},
			],
		},
	],
})

// 全局前置路由守卫 初始化的时候被调用，每次路由切换的时候被调用
router.beforeEach((to, from, next) => {
	console.log('beforeEach', to, from)
	if (to.meta.isAuth) {
		// 判断是否需要鉴权
		if (localStorage.getItem('school') === 'lanxiang') {
			next()
		} else {
			alert('无权限查看')
		}
	} else {
		next()
	}
})

// 全局后置路由守卫 初始化的时候被调用，每次路由切换的时候被调用
router.afterEach((to, from) => {
	console.log('afterEach', to, from)
	document.title = to.meta.title || '系统'
})

export default router
