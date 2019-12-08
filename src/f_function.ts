/**
 * 函数相关知识点梳理
 */
/**
 * ① 函数定义
 */
function f_add1(x: number, y: number): number {
    return x + y
}

let f_add2 = (x: number, y: number): number => x + y

let f_add3: (x: number, y: number) => number

type f_add4 = (x: number, y: number) => number

interface f_add5 {
    (x: number, y: number): number
}

/**
 * ② 对函数参数的要求：形参和实参必须一一对应
 *    可选参数必须位于必选参数之后
 */
function f_add6(x: number, y?: number) {
    return y? x + y : x
}
function f_add7(x: number = 1, y: number, z = 100 ) { // 带有默认值的参数同es6
    console.log(x + y + z)
}
// f_add7(undefined, 10) // 必选参数之前的默认值必穿，之后的可以不传
function f_add8(x: number, ...rest: number[]) { // 剩余参数
    return x + rest.reduce((acc, cur) => acc + cur)
}
// console.log(f_add8(1, 2, 4))

/**
 * 函数重载
 */
function f_add9(...rest: number[]): number;
function f_add9(...rest: string[]): string;
function f_add9(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('')
    }
    if (typeof first === 'number') {
        return rest.reduce((acc, cur) => acc + cur)
    }
}
// console.log(f_add9(1, 2, 3))
// console.log(f_add9('a', 'b', 'c'))