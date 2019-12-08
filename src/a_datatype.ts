/**
 * 原始类型
 */
let a_bool: boolean = true
let a_num: number = 123
let a_str: string = 'abc'

/**
 * 数组
 */
let a_arr1: number[] = [1, 2, 3]
let a_arr2: Array<number> = [1, 2, 3]
let a_arr3: Array<number | string> = [1, 'a', 'b', 3, 'c'] // 联合类型

/**
 * 元组
 */
let a_tuple: [number, string] = [1, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2] // 可以对元组进行添加元素，但不能越界访问

/**
 * 函数 
 */
let a_add = (x: number, y: string) => x + y
let a_compute: (x: number, y: number) => number
a_compute = (a, b) => a + b

/**
 * 对象
 */
let a_obj: {x: number, y: number} = { x: 1, y: 2 }

/**
 * symbol
 */
let a_s1: symbol = Symbol()
let a_s2 = Symbol()

/**
 * undefined, null
 */
let a_un: undefined = undefined
let a_nu: null = null

/**
 * void
 */
let a_noReturn = () => {}

/**
 * any
 */
let a_x

/**
 * never
 */
let a_error = () => {
    throw new Error('error')
}
let a_endless = () => {
    while(true) {}
}