/**
 * 生产环境配置
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin() // 清空上次构建的dist目录
    ]
}
