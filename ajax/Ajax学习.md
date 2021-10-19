# **Ajax学习**

## HTTP

**HTTP**（hypertext transport protocol）协议『**超文本传输协议**』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
约定, 规则

### 请求报文
重点是格式与参数
```
行      POST  /s?ie=utf-8  HTTP/1.1 
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
```

### 响应报文
```html
行      HTTP/1.1  200  OK
头      Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行    
体      <html>
            <head>
            </head>
            <body>
                <h1>尚硅谷</h1>
            </body>
        </html>
```
> **常用HTTP状态码**
>
> * 200 - 成功
> * 201 – 已创建
> * 202 – 已接受
> * 302 – 对象已移动
> * 304 – 未修改
> * 307 – 临时重定向
> * 401 - 没有访问权限
> * 403 - 禁止访问
> * 404 - 没有找到文件或目录
> * 500 - 内部服务器错误
> * 502 - 网关错误



## 原生Ajax

### GET

```javascript
// 获取button元素
const btn = document.getElementsByTagName('button')[0]
const result = document.getElementById("result")
// 绑定事件
btn.onclick = function(){
// 1. 创建对象
const xhr = new XMLHttpRequest()
// 2. 初始化 设置请求方法和 url
xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300')
// 3. 发送
xhr.send();
// 4. 事件绑定 处理服务端返回的结果
// on  when 当....时候
// readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
// change  改变
xhr.onreadystatechange = function(){
    // 判断 (服务端返回了所有的结果)
    if(xhr.readyState === 4){
        // 判断响应状态码 200  404  403 401 500
        // 2xx 成功
        if(xhr.status >= 200 && xhr.status < 300){
            // 处理结果  行 头 空行 体
            // 响应 
            // console.log(xhr.status);//状态码
            // console.log(xhr.statusText);//状态字符串
            // console.log(xhr.getAllResponseHeaders());//所有响应头
            // console.log(xhr.response);//响应体
            // 设置 result 的文本
            result.innerHTML = xhr.response
        }else{

        }
    }
}
```



### POST

```javascript
//获取元素对象
const result = document.getElementById("result")
//绑定事件
result.addEventListener("mouseover", function(){
    //1. 创建对象
    const xhr = new XMLHttpRequest()
    //2. 初始化 设置类型与 URL
    xhr.open('POST', 'http://127.0.0.1:8000/server')
    //设置请求头
    xhr.setRequestHeader('Content-Type','application/x-www-form urlencoded')
    xhr.setRequestHeader('name','atguigu')
    //3. 发送（设置请求体）
    xhr.send('a=100&b=200&c=300')
    // xhr.send('a:100&b:200&c:300')
    // xhr.send('1233211234567')

    //4. 事件绑定
    xhr.onreadystatechange = function(){
        //判断
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                //处理服务端返回的结果
                result.innerHTML = xhr.response
            }
        }
    }
})
```

