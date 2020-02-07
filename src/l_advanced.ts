/**
 * 类型兼容性：当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X(目标类型)兼容类型Y(源类型)
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */

//  let s: string = 'a'
//  s = null


//  接口兼容性：成员少的可以兼容成员多的
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
x = y
// y = x


// 函数兼容性：
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

// 1>参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 固定参数、可选参数和剩余参数
let a = (p1: number, p2: number) => {}
let d = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
a = d // 固定参数 兼容 可选参数
a = c // 固定参数 兼容 剩余参数
// d = c // 需要将tsconfig.json 的strictNullChecks配置项改为false
// d = a // 需要将tsconfig.json 的strictNullChecks配置项改为false
c = a // 剩余参数 兼容 固定参数
c = d // 剩余参数 兼容 可选参数

// 2> 参数类型
let handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d
// p2d = p3d // 需要将tsconfig.json 的 strictFunctionTypes 配置项改为false

// 3> 返回值类型：目标函数的返回值类型必须与源函数的返回值类型相同，或为其子类型
let f = () => ({ name: 'name' })
let g = () => ({ name: 'name', location: 'location' })
f = g
// g = f

// 4>函数重载
function overload(a: number, b: number, c: number): number; // 目标函数
function overload(a: string, b: string, d: number): string; // 目标函数
function overload(a: any, b: any): any {} // 源函数


// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Banana
// let color: Color.Red = Fruit.Banana


// 类兼容性
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    // private name: string = ''
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    // private name: string = ''

}
let aa = new A(1, 2)
let bb = new B(1)
aa = bb
bb = aa

// 泛型兼容性
interface Empty<T> {
    // value: T // 只有类型参数T被接口成员使用时，才会影响兼容性
}
let obj1: Empty<number> = {}
let obj2: Empty<string> = {}
obj1 = obj2

let log1 = <T>(x: T): T => {
    console.log(x)
    return x
}
let log2 = <U>(y: U): U => {
    console.log(y)
    return y
}
log1 = log2 // 如果两个泛型函数的定义相同，但是没有指定类型参数，则可以兼容