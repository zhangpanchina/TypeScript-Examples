/**
 * 函数类型接口
 */
let e_Add1: (x: number, y: number) => number

interface e_Add2 {
    (x: number, y: number): number
}

type e_Add3 = (x: number, y: number) => number

let add4: e_Add3 = (a, b) => a + b // 使用方法

/**
 * 混合类型接口：既可以定义一个函数，也可以像对象一样，拥有属性和方法
 */
interface e_Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function e_getLib() {
    let lib: e_Lib = (() => {}) as e_Lib;
    lib.version = '1.0';
    lib.doSomething = () => {};
    return lib;
}

let e_lib1 = e_getLib()
e_lib1.doSomething()
let e_lib2 = e_getLib()