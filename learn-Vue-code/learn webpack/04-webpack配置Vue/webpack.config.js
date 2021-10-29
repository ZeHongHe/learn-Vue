const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        // resolve: node 里面的拼接函数
        // __dirname: 获取当前文件夹所在绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                // 正则表达式: 匹配所有的 .css 文件
                test: /\.css$/,
                // css-loader 只负责加载 .css 文件
                // style-loader 负责将 CSS 样式渲染到 DOM 中
                // webpack 在读取使用多个 loader 时，应用顺序是从右往左，注意多个 loader 的顺序
                use: ['style-loader', 'css-loader']
            },
            {
                // 加载 less
                test: /\.less$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }],
            },
            {
                // 转 es5
                test: /\.js$/,
                // 排除 node_modules 的内容
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        // alias: 别名
        alias: {
            // 转换环境为 runtime-compiler
            'vue$': 'vue/dist/vue.esm'
        }
    }
}