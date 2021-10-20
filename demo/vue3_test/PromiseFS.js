const fs = require('fs')

// 使用Promise
const p = new Promise((resolve, reject) => {
    fs.readFile('./README.md', (err, data) => {
        resolve(data)
    })
})

p.then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./promise.js', (err, data) => {
            resolve([value, data])
        })
    })
}).then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./promise.js', (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then((value) => {
    console.log(value.join('/r/n'))    
})