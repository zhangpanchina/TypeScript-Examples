// 类的定义
class Dog {
    /* private / protected */ constructor(name: string) { // * 类的构造函数被私有化，则这个类既不能被实例化，也不能被继承；类的构造函数受保护，则这个类只能被继承，不能被实例化，即基类
        this.name = name
    }

    // name: string
    public name?: string

    run(): void {}

    private pri(): void {} // * 私有成员只能被类本身调用,不能被类的实例调用，也不能被类的子类调用

    protected pro(): void {} // * 受保护成员只能在类或子类中访问，而不能在类的实例中访问

    readonly legs: number = 4 // * 只读成员只能读取，不能修改，必须被初始化

    static static: string = 'static' // * 静态成员只能通过类名调用，不能被类的实例调用，类的静态成员可以被继承
}

let dog = new Dog('dog')
// console.log(dog) // * [类的成员属性] 都是实例属性，而不是原型属性，[类的成员方法] 都是 [原型] 方法
// dog.pro() // 实例中不能调用受保护成员

// 类的继承
class Husky extends Dog {
    constructor(name1: string, public color1: string) { // * 当给构造函数的参数声明 public 时，表明这个属性是实例属性，不需要再被定义
        super(name1)
        this.color2 = color1
        this.pro()
    }
    color2: string
}
const h = new Husky('name', 'color')
// console.log(h.color1) // 被public声明的实例属性，不需要在构造函数再定义，在这里可以直接使用
// console.log(h.color2)
// console.log(Husky.static) // 子类可以调用父类的静态成员