/**
 * 接口的属性
 */
interface d_List {
    readonly id: number, // 只读属性
    name: string,
    age?: number // 可选属性
}

interface d_Result {
    data: d_List[]
}

function d_render(result: d_Result) {
    result.data.forEach(v => {
        console.log(v.id, v.name)
        if (v.age) {
            console.log(v.age)
        }
        // v.id++ // 只读属性不可修改
    })
}

let d_result = { 
    data: [
        { id: 1, name: 'A', age: 10 },
        { id: 2, name: 'B' }
    ],
    total: 1000
}
// d_render(d_result)

/**
 * 用数字索引的接口
 */
interface d_StringArray {
    [index: number]: string // 签名
}
let chars: d_StringArray = ['1']

/**
 * 字符串类型的接口
 */
interface d_Names {
    [x: string]: string;
    [y: number]: string; // 数字索引的返回值必须是字符串索引返回值的子类型
}

