console.log("hello h5!")

// 1. 使用 commonJS 的模块化规范
const {add, mul} = require('./mathTools');

console.log(add(20,30));
console.log(mul(20,30));

// 2. 使用 ES6 的模块化规范
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);