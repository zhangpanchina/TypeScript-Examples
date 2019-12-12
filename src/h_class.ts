// abstract 抽象类
abstract class h_Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void// * 抽象方法：不指定方法的具体实现,在子类中再具体实现。好处：抽出事物的共性，有利于代码的复用和扩展，此外抽象类还可以实现多态
}
// let anima = new h_Animal() // * 抽象类只能被继承，不能被实例化

class h_Dog extends h_Animal {
    constructor(param: string) {
        super()
        this.name = param
    }
    name: string
    run() {}
    sleep() {
        console.log('dog sleep')
    }
}

let h_dog = new h_Dog('dog')
// h_dog.eat() // 调用抽象类的方法

class h_Cat extends h_Animal {
    sleep() {
        console.log('Cat sleep')
    }
}
let h_cat = new h_Cat()

let h_animals: h_Animal[] = [h_dog, h_cat]
h_animals.forEach(v => {
    // v.sleep() // * 多态
})

class h_WorkFlow {
    step1(): this {
        console.log('step1')
        return this
    }
    step2(): this {
        console.log('step2')
        return this
    }
}
// new h_WorkFlow().step1().step2() // * 链式调用

class h_Myflow extends h_WorkFlow {
    next(): this {
        console.log('next')
        return this
    }
}
// new h_Myflow().next().step1().next().step2() // * 继承时，this类型也可以表现为多态，即this既可以是父类型，也可以是子类型