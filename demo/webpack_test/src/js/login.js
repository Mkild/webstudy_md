// import 'style-loader!css-loader../css/login.css' // 内联方式指定loader
import '../css/login.css'
import '../css/login.less'
import '../css/test.css'

function login() {
	const loginDom = document.createElement('h2')
	loginDom.innerHTML = '我是loginDom'
	loginDom.className = 'title'
	return loginDom
}

document.body.appendChild(login())
