interface c_List {
    id: number,
    name: string
}

interface c_Result {
    data: c_List[],
    // [x: string]: any // 字符串索引签名：用任意的字符串去索引 Result 得到任意的结果，这个样 Result 就可以是多个属性了
}

function c_render(result: c_Result) {
    result.data.forEach(v => {
        console.log(v.id, v.name)
    })
}


// c_render({
//     data: [
//         { id: 1, name: 'A' },
//         { id: 2, name: 'B' }
//     ],
//     total: 1000 // error
// })

// first
// let c_result = {
//     data: [
//         { id: 1, name: 'A' },
//         { id: 2, name: 'B' }
//     ],
//     total: 1000
// }
// c_render(c_result)

// second 类型断言
// c_render({
//     data: [
//         { id: 1, name: 'A' },
//         { id: 2, name: 'B' }
//     ],
//     total: 1000
// } as c_Result)

// third 字符串索引签名