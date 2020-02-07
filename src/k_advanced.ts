/**
 * 类型推断
 * a. 基础类型推断
 * b. 最佳通用类型推断
 * c. 上下文类型推断
 */
let b = [1, null]

// window.onkeydown = (event) => {
//     console.log(event)
// }

interface Foo {
    bar: number
}
// let foo = {} as Foo // 类型断言:灵活，但是要慎用,在改造旧代码很有用，但是乱用会存在一些隐患
// foo.bar = 1
let foo: Foo = {
    bar: 1
}