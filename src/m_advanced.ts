/**
 * 类型保护：
 * TypeScript 能够在特定的区块中保证变量属于某种确定的类型。
 * 可以在此区块中放心地引用此类型的属性，活着调用此类型的方法。
 */
enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('Hello Java')
    }
}
class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
}

function getLanguage(type: Type, x?: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava
    // } else {
    //     (lang as JavaScript).helloJavaScript
    // }

    // 类型保护四种方法：
    // 1> instanceof 关键字
    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    // 2> in 关键字
    if ('helloJava' in lang) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    // 3> typeof 关键字
    if (typeof x === 'string') {
        x.length
    } else {
        x?.toFixed()
    }
    // 4> 创建类型保护函数
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
}

getLanguage(Type.Strong)

// 类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
    // return 'helloJava' in Java
}