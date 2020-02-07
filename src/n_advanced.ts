/**
 * 交叉类型：将多个类型合并为一个类型
 */
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

/**
 * 联合类型：声明的类型并不确定，是多个类型中的一个
 */
let aaa: number | string = 'a'
let bbb: 'a' | 'b' | 'c' // a> 字符串的联合类型
let ccc: 1 | 2 | 3 // b> 数字的联合类型

// c> 对象的联合类型
class Dog implements DogInterface {
    run() {}
    eat() {}
}
class Cat implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Dog, Cat }
function getPet(master: Master) {
    let pet = master === Master.Dog ? new Dog() : new Cat()
    pet.eat()
    // pet.run()
}


interface Square {
    kind: 'square'
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}
interface Circle {
    kind: 'circle',
    r: number
}

function area(area: Square | Rectangle | Circle) {
    switch(area.kind) {
        case "square":
            return area.size * area.size;
        case "rectangle":
            return area.height * area.width
        case "circle":
            return Math.PI * area.r ** 2
        default:
            return ((e: never) => {throw new Error(e)})(area)
    }
}