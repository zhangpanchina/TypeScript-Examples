/**
 * 数字枚举
 */
enum b_Role {
    Reporter = 10 ,
    Developer, // 11
    Maintainer, // 12
    Owner, // 13
    Guest //14
}

/**
 * 字符串枚举
 */
enum b_Message {
    Success = 'Success',
    Fail = 'Fail'
}

/**
 * 异构枚举
 */
enum b_Answer {
    N,
    Y = 'Yes'
}

/**
 * 枚举成员分类
 *      ①常量枚举
 *          a.没有初始值的情况
 *          b.对已有枚举成员的引用
 *          c.常量表达式
 *      ②需要被计算的枚举成员
 */
enum b_Char {
    // const member
    a,
    b = b_Char.a,
    c = 1 + 3,
    // computed member
    d = Math.random(),
    e = '123'.length
}

/**
 * 常量枚举
 */
const enum b_Month {
    Jan,
    Feb,
    Mar
}

/**
 * 枚举类型
 */
enum b_E { a, b }
enum b_F { a = 0, b = 1 }
enum b_G { a = 'apple', b = 'banana' }

let b_e: b_E = 3
let b_f: b_F = 3
// e === f    error

let b_e1: b_E.a
let b_e2: b_E.b
let b_e3: b_E.a

let b_g1: b_G
let b_g2: b_G.a
