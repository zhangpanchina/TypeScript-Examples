/**
 * 公共环境配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.ts', // 入口文件
    output: {
        filename: 'app.js' // 输出文件
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'] // 扩展名
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // 通过一个模板生成一个网站的首页,并且把输出文件自动嵌入这个文件中
            template: './index.html'
        })
    ]
}