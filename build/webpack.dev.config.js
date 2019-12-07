/**
 * 开发环境配置
 */
module.exports = {
    devtool: 'cheap-module-eval-source-map', // 开启 source-map。cheap：表示 source-map 会忽略文件的列信息；module：表示会定位到ts源码，而不是转译后的js源码；eveal-source-map：会将source-map以data url的形式打包到文件中。
    devServer: {
        port: 8888
    }
}