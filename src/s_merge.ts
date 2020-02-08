/**
 * 声明合并
 */
// 接口的声明合并：非函数成员要唯一，不唯一则类型必须相同；函数成员则会声明为函数重载
interface A {
    x: number,
    // y: string,
    foo (bar: number): number // 5
    foo (bar: 'a'): 'a' // 2
}
interface A {
    y: number,
    foo (bar: string): string // 3
    foo (bar: number[]): number[] // 4
    foo (bar: 'b'): 'b' // 1
}

let aaaa: A = {
    x: 1,
    y: 2,
    foo(bar: any) {
        return bar
    }
}

// 命名空间和函数的声明合并
function Lib() {}
namespace Lib {
    export let version = '1.0'
}
// console.log(Lib.version) // '1.0'

// 命名空间和类的声明合并
class C {}
namespace C {
    export let state = 1
}
// console.log(C.state) // 1

// 命名空间和枚举的声明合并
enum Color {
    Blue,
    Green
}
namespace Color {
    export function mix() {}
}
Color.mix()