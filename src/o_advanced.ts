/**
 * 索引类型
 */
let obj = {
    a: 1,
    b: 2,
    c: 3
}
function getValues<T, U extends keyof T>(obj: T, keys: U[]): T[U][] {
    return keys.map(key => obj[key])
}
console.table(getValues(obj, ['a', 'b']))
// console.log(getValues(obj, ['e', 'f']))

// 查询操作符： keyof T 表示类型T的所有公共属性的字面量的联合类型
interface Obj {
    a: number
    b: string
}
let key: keyof Obj

// 索引访问操作符：T[K] 对象T的属性K所代表的类型
let value: Obj['b']

// T extends U