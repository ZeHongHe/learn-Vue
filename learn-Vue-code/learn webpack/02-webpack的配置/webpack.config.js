const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        // resolve: node 里面的拼接函数
        // __dirname: 获取当前文件夹所在绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
}