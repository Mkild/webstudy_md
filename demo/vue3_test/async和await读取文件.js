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