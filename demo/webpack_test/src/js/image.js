// import oImgSrc from '../img/tio.png'
import '../css/img.css'

function packImg() {
	// 1.创建一个容器元素
	const oEle = document.createElement('div') // 2.创建img标签，设置src属性

	const oImg = document.createElement('img') // oImg.src = require('../img/tio.png').default // webpack5特殊

	oImg.src = require('../img/tio.png') // oImg.src = oImgSrc

	oEle.appendChild(oImg) // 3.设置背景图片

	const oBgImg = document.createElement('div')
	oBgImg.className = 'bgBox'
	oEle.appendChild(oBgImg)
	return oEle
}

document.body.appendChild(packImg())
