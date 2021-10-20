const obj = {
	name: 123,
    age: 18,
    gender: '男',
    get: function() {
        return this.name
    }
}
const arr = [1, 2, 3]
console.log(obj)
const json = JSON.stringify(obj)
console.log(json == '{}')

function isEmptyObj(data) {
	for (let item in data) {
		return false
	}
	return true
}

function allProps(obj) {
	// 用来保存所有的属性名称和值
    let propsMap = new Map()
    let propsArr = []
	// 开始遍历
	for (let p in obj) {
		// 方法
		if (typeof obj[p] == 'function') {
			obj[p]()
		} else {
            propsArr.push({[p]: obj[p]})
            propsMap.set(p, obj[p])
		}
	}
	// 最后显示所有的属性
	console.log(propsMap)
    console.log(propsArr)
}

if (isEmptyObj(obj)) {
	console.log('对象为空')
} else {
	console.log('对象不为空')
}

for (let item of arr) {
	console.log(item)
}

allProps(obj)
