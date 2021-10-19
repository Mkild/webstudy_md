# JS和ES6



## let

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效。

**不允许重复声明**

`let`不允许在相同作用域内，重复声明同一个变量（不能同名）。

**不存在变量提升**

`var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`。

为了纠正这种现象，`let`命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

**块级作用域**

`let`的作用域：只在声明所在的块级作用域内有效。

**暂时性死区**

只要块级作用域内存在`let`命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```javascript
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

ES6 明确规定，如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

在代码块内，使用`let`命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”。



## const

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。

`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

**不允许重复声明**

`const`不允许在相同作用域内，重复声明同一个变量（不能同名）。

**声明就要赋值**

`const`声明的变量不得改变值，这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值。

**块级作用域**

`const`的作用域与`let`命令相同：只在声明所在的块级作用域内有效。

**不存在变量提升**

`let`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`。

为了纠正这种现象，`const`命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

**暂时性死区**

只要块级作用域内存在`const`命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

ES6 明确规定，如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

在代码块内，使用`const`命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”。



## 新的基本数据类型BigInt

```javascript
// n
let n = 521n
console.log(typeof n)

// 函数
let n2 = 123
console.log(BigInt(n2))
// console.log(BigInt(1.2)) // 报错，参数必须是整数

// 大数值运算
let max = Number.MAX_SAFE_INTEGER

console.log(max)
console.log(max + 1)
console.log(max + 2) // 丢失精度

console.log(BigInt(max))
console.log(BigInt(max) + BigInt(1))
// console.log(BigInt(max) + 1) // 报错，BigInt只能与BigInt进行运算
console.log(BigInt(max) + BigInt(2))
```



## 可选链操作符

```javascript
function main(config) {
    // const dbHost = config && config.db && config.db.host
    const dbHost = config?.db?.host // 相当于上面的语句
    console.log(dbHost)
}

main({
    db: {
        host: '192.168.1.100',
        username: 'root',
    },
    cache: {
        host: '192.168.1.200',
        username: 'admin',
    },
})
```



## 动态import

```javascript
// app.js
import m1 from './hello.js' // 静态导入

// 获取元素
const btn = domcument.getElementbyId('btn')

// 绑定事件
btn.onclick = function() {
    // 动态导入
    import('./hello.js').then((module) => {
        module.hello()
    })
}
```



## 全局对象globalThis

**浏览器环境下，globalThis指向全局的this即window对象**

**Node.js环境下，globalThis指向全局对象global**



## ES6结构赋值

```javascript
//ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值
//这被称为解构赋值。
//1. 数组的解构赋值
const F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
let [xiao, liu, zhao, song] = F4
console.log(xiao)
console.log(liu)
console.log(zhao)
console.log(song)

//2. 对象的解构赋值
const zhao = {
    name: '赵本山',
    age: '不详',
    xiaopin: function() {
        console.log('我可以演小品')
    },
}

// 解构所有属性
let { name, age, xiaopin } = zhao
console.log(name)
console.log(age)
console.log(xiaopin)
xiaopin()

// 单独解构方法
let { xiaopin } = zhao
xiaopin()
```



## ES6数值扩展

```javascript
// 0. Number.EPSILON 是 JavaScript 表示的最小精度
// EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16
function equal(a, b){
    if(Math.abs(a-b) < Number.EPSILON){
        return true
    }else{
        return false
    }
}
console.log(0.1 + 0.2 === 0.3) // false
console.log(equal(0.1 + 0.2, 0.3)) // true

// 1. 二进制和八进制
let b = 0b1010 // B(binary)，二进制0b开头
let o = 0o777 // O(octor)，八进制0开头
let d = 100 // D(decimal)，十进制
let x = 0xff; // H(hex)，十六进制0x开头

// 2. Number.isFinite  检测一个数值是否为有限数
Number.isFinite(100)
Number.isFinite(100/0)
Number.isFinite(Infinity)

// 3. Number.isNaN 检测一个数值是否为 NaN 
Number.isNaN(123)

// 4. Number.parseInt Number.parseFloat字符串转整数
Number.parseInt('5211314love')
Number.parseFloat('3.1415926神奇')

// 5. Number.isInteger 判断一个数是否为整数
Number.isInteger(5)
Number.isInteger(2.5)

// 6. Math.trunc 将数字的小数部分抹掉  
Math.trunc(3.5)

// 7. Math.sign 判断一个数到底为正数 负数 还是零
Math.sign(100)
Math.sign(0)
Math.sign(-20000)
```



## ES6字符串方法扩展

```javascript
let str = '   芜湖起飞     '

console.log(str.trim()) // 清除所有空格
console.log(str.trimStart()) // 清除前面的空格
console.log(str.trimEnd()) // 清除后面的空格
```



## ES6对象方法扩展

```javascript
// 1. Object.is 判断两个值是否完全相等 
Object.is(120, 120) // true 
Object.is(NaN, NaN) // true
NaN === NaN // false 

// 2. Object.assign 对象的合并
const config1 = {
    host: 'localhost',
    port: 3306,
    name: 'root',
    pass: 'root',
    test: 'test'
}
const config2 = {
    host: 'http://atguigu.com',
    port: 33060,
    name: 'atguigu.com',
    pass: 'iloveyou',
    test2: 'test2'
}
console.log(Object.assign(config1, config2))

// 3. Object.setPrototypeOf 设置原型对象  Object.getPrototypeof
const school = {
    name: '尚硅谷'
}
const cities = {
    xiaoqu: ['北京','上海','深圳']
}
// 使用ES5 Object.create效率可能更高
Object.setPrototypeOf(school, cities)
Object.getPrototypeOf(school)

// 对象属性的描述对象
Object.getOwnPropertyDescriptors(school)

// rest参数 ...user相当于username，password，type
function connect({host, port, ...user}) {
    console.log(host)
    console.log(port)
    console.log(user)
}

connect({
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    type: 'master'
})

// 扩展运算符
const skillOne = {
    q: '天音波',
    w: '金钟罩'
}
// ...skillOne => q: '天音波', w: '金钟罩'
const hero = {...skillOne}
```



**对象与二维数组之间的转化**

```javascript
// 二维数组转化为对象
const obj = Object.fromEntries([
    ['name', '张三'],
    ['hobby', '睡觉', '吃饭', '打游戏'],
])
console.log(obj)

// Map转化为对象
const map = new Map()
map.set('name', '李四')
const obj2 = Object.fromEntries(map)
console.log(obj2)

// 对象转化为二维数组
const arr = Object.entries({
    name: '张三',
    hobby: '睡觉',
})
console.log(arr)
```



## ES6数组方法扩展

```javascript
// flat 将多维数组转化为一维数组
const arr = [1, 2, 3, [4, 5]]
console.log(arr.flat())
const arr2 = [1, 2, 3, [4, 5, [6, 7]]]
// 参数为深度，是一个数字
console.log(arr2.flat(2))

// flatMap
const arr3 = [1, 2, 3, 4]
// const result = arr3.map((item) => [item * 10]) // 二维
const result = arr3.flatMap((item) => [item * 10]) // 一维
console.log(result)
```



## 判断对象为空的方法

**1、使用for...in... 遍历属性进行判断**

这是最常见的方法，如果为真则“不是空对象”，否则是空对象

```javascript
function isEmptyObj(data) {
  for(var item in data) {
      return false
  }
return true
}
var obj = {}
if (isEmptyObj(obj)){
   console.log("对象为空")
}else {
   console.log("对象不为空")
}
```

**2、通过 JSON.stringify() 方法判断**

将对象转化为json字符串，再判断该字符串是否为"{}"即可。

```javascript
var obj = {}
var objStr = JSON.stringify(obj)
if(objStr === '{}') {
   console.log("对象为空")
}else {
   console.log("对象不为空")
}
```

注意：这里为什么不用 toString()，是因为它返回的是 Object

**3、使用es6的方法Object.keys()+length属性进行判断**

```javascript
var obj = {}
var arr = Object.keys(obj)
if (arr.length == 0){
   console.log("对象为空")
}else {
   console.log("对象不为空")
}
```



## 遍历对象的键和键值

**使用for...in... 遍历**

```javascript
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
console.log(propsMap) // 以Map显示，结果为：Map(3) { 'name' => 123, 'age' => 18, 'gender' => '男' }
console.log(propsArr) // 以数组显示，结果为：[ { name: 123 }, { age: 18 }, { gender: '男' } ]

Object.keys(obj) // 获取对象所有的键
Object.values(obj) // 获取对象所有的键值
Object.entries(obj) // entries
const m = new Map(Object.entries(obj)) // 创建entries
```



## 使用Promise封装Ajax

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*: 初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*: 意味着操作成功完成。
- *已拒绝（rejected）*: 意味着操作失败。

```javascript
const p = new Promise((resolve, reject) => {
    // 1. 创建对象
    const xhr = new XMLHttpRequest()

    // 2. 初始化
    xhr.open('GET', 'http://poetry.apiopen.top/sentences')

    // 3. 发送
    xhr.send()

    // 4. 绑定事件，处理响应结果
    xhr.onreadystatechange = function() {
        // 判断
        if (xhr.readyState === 4) {
            // 判断响应状态码 200-299
            if (xhr.status >= 200 && xhr.status < 300) {
                // 成功
                resolve(xhr.response)
            } else {
                // 失败
                reject(xhr.status)
            }
        }
    }
}).then((value) => {
    console.log(value)
}).catch((reason) => {
    console.error(reason)
})

// 指定回调 callback风格
/* p.then(function(value) {
    console.log(value)
}, function(reason) {
    console.error(reason)
}) */
```



## 批量异步场景下的Promise

```javascript
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('商品数据 1')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('商品数据 2')
        reject('出错了！')
    }, 1000)
})

// allSettled始终返回成功状态
const result = Promise.allSettled([p1, p2])
console.log(result)

// all全部成功才返回成功状态，有一个失败则返回失败状态
const result2 = Promise.all([p1, p2])
console.log(result2)
```



## async和await读取文件

```javascript
const fs = require('fs')

function readMd1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./Md1.md', (err, data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

function readMd2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./Md2.md', (err, data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

function readMd3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./Md3.md', (err, data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

async function readAllMd() {
    let md1 = await readMd1()
    let md2 = await readMd2()
    let md3 = await readMd3()
    console.log(md1.toString())
    console.log(md2.toString())
    console.log(md3.toString())
}

readAllMd()
```



## async和await结合发送Ajax请求

```javascript
// 发送Ajax请求，返回Promise对象
function sendAjax(url) {
    return new Promise((resolve, reject) => {
        // 1.创建对象
        const xhr = new XMLHttpRequest()

        // 2.初始化
        xhr.open('GET', url)

        // 3.发送
        xhr.send()

        // 4.事件绑定
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.status)
                }
            }
        }
    })
}

// Promise和then方法测试
/* sendAjax('http://poetry.apiopen.top/sentences').then((value) => {
    console.log(value)
}, (reason) => {}) */

// async和await测试
async function main() {
    let result = await sendAjax('http://poetry.apiopen.top/sentences')
    let result2 = await sendAjax('http://poetry.apiopen.top/sentences')
    console.log(result)
    console.log(result2)
}

main()
```



## 正则扩展

**正则不使用命名捕获分组**

```javascript
// 声明一个字符串
let str = '<a href="https://www.baidu.com">百度</a>'

// 提取url与标签文本
const reg = /<a href="(.*)">(.*)<\/a>/

// 执行
const result = reg.exec(str)

console.log(result) 
console.log(result[0]) // <a href="https://www.baidu.com">百度</a>
console.log(result[1]) // https://www.baidu.com
console.log(result[2]) // 百度
```



**正则使用命名捕获分组**

```javascript
// 声明一个字符串
let str = '<a href="https://www.baidu.com">百度</a>'

// 提取url与标签文本
const reg = /<a href="(?<url>.*)">(?<name>.*)<\/a>/

// 执行
const result = reg.exec(str)

console.log(result)
console.log(result.groups.url)
console.log(result.groups.name)
```



**反向断言**

```javascript
// 声明一个字符串
let str = 'JS9527芜湖666起飞'

// 正向断言 提取666这个数字
// const reg = /\d+(?=起)/
// const result = reg.exec(str)
// console.log(result[0]) // 666

// 反向断言
const reg = /(?<=湖)\d+/
const result = reg.exec(str)
console.log(result[0]) // 666
```



**dotAll模式**

```javascript
let str = `<ul>
    <li>
        <a>肖生克的救赎</a>
        <p>上映日期: 1994-09-10</p>
    </li>
    <li>
        <a>阿甘正传</a>
        <p>上映日期: 1994-07-06</p>
    </li>
</ul>`

//声明正则 最后的/s模式修正符使 . 可以匹配任意字符
// const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/;
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs

//执行匹配
// const result = reg.exec(str);
let result
let data = []
while ((result = reg.exec(str))) {
    // console.log(result)
    data.push({ title: result[1], time: result[2] })
}
//输出结果
console.log(data)
```



**得到正则批量匹配的结果**

```javascript
let str = `<ul>
    <li>
        <a>肖生克的救赎</a>
        <p>上映日期: 1994-09-10</p>
    </li>
    <li>
        <a>阿甘正传</a>
        <p>上映日期: 1994-07-06</p>
    </li>
</ul>`

//声明正则 批量匹配最后要加/g
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs

//调用方法
const result = str.matchAll(reg)

/* for (let v of result) {
    console.log(v)
} */

const arr = [...result]

console.log(arr)
```

