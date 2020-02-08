import $ from 'jquery'
$('.app').css('color', 'red')

globalLib({a: 1})
globalLib.doSomething()

import module from './module'
module.doSomething()

// 引入的类库添加自定义方法
import m from 'moment'
declare module 'moment' { // 模块化的插件添加自定义方法
    export function myFunction(): void
}
m.myFunction = () => {}

declare global { // 全局的插件添加自定义方法
    namespace globalLib {
        function doAnything(): void
    }
}
globalLib.doAnything = () => {}