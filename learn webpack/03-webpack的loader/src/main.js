console.log("hello h5!");

// 1. 使用 commonJS 的模块化规范
const {add, mul} = require('./js/mathTools');

console.log(add(20,30));
console.log(mul(20,30));

// 2. 使用 ES6 的模块化规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3. 依赖 css 文件
require('./css/normal.css');

// 4. 依赖 less 文件
require('./css/speacial.less');