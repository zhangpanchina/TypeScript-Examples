/**
 * 条件类型
 * T extends U ? X : Y
 */

 type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' :
    'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// 分布式条件类型
// (A | B) extends U ? X : Y  <==>  A extends U ? X : Y | B extends U ? X : Y
type T3 = TypeName<string | number>

// 过滤掉一些类型
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>

// 过滤掉 null 和 undefined
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<'a' | 1 | null | undefined>

// 内置的条件类型
// Exclude<T, U> // 过滤掉T在U中存在的类型
// NonNullable<T> // 过滤掉 null 和 undefined
// Extract<T, U> // 获取T存在U中的类型
// ReturnType<T> // 获取一个函数的返回值类型
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'd'>
type T7 = ReturnType<() => string>
