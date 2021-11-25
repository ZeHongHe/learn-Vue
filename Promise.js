// Promise is a solution of Asynchronous programming !!
// ES6 provides genetic Promise Object(Class) !!

// 1. 使用 setTimeOut
// const foo = setTimeout(() => {
//     let message = 'Hello HTTP require!';
//     console.log(message);
// }, 1000)

// Promise 对象需要以 函数 为参数
// 箭头函数里的参数 (resolve,reject) 本身也是函数
// Promise 的范式：链式编程
const bar = new Promise((resolve, reject) => {
    // 第一次网络请求
    setTimeout(( ) => {
        resolve()
    }, 1000)
}).then(r => {
    // 第一次处理
    let message = 'Hello, HTTP require!';
    console.log(message);
    return new Promise((resolve, reject) => {
        // 第二次网络请求
        setTimeout(( ) => {
            resolve()
        }, 1000)
    }).then(r => {
        // 第二次处理
        let message = 'Hello, another HTTP require!';
        console.log(message);
    })
})


// 什么时候会用到 Promise？
// 需要使用异步操作时，对异步操作进行封装
// new -> 构造函数(1. 保存状态信息， 2. 执行传入的函数)
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('require successfully')
//         reject('error message')
//     }, 1000)
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })