/**
 * 公共环境配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * awesome-typescript-loader 与 ts-loader 的主要区别
 * 1> 更适合与 Babel 集成，使用 Babel 的转义和缓存
 * 2> 不需要安装额外的插件，就可以把类型检查放在独立进程中进行(类型检查会有遗漏)
 * 建议：使用 ts-loader
 */
const { CheckerPlugin } = require('awesome-typescript-loader') // 引入自带的类型检查 
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

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
                    // loader: 'ts-loader',
                    // options: {
                    //     transpileOnly: true /* ts-loader 这个配置项开启只做语言转换，而不做类型检查，可以提高编译速度，但同时类型错误，也会编译成功，此时可以使用插件 fork-ts-checker-webpack-plugin 来进行独立的类型检查 */
                    // }
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true /* awesome-typescript-loader 这个配置项开启，此时可以使用自带插件 CheckerPlugin 来进行独立的类型检查, Waring：但是类型检查会有遗漏 */
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // 通过一个模板生成一个网站的首页,并且把输出文件自动嵌入这个文件中
            template: './index.html'
        }),
        new CheckerPlugin()
        // new ForkTsCheckerWebpackPlugin()
    ]
}