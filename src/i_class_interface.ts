interface i_Human {
    name: string;
    eat(): void;
}

class i_Asian implements i_Human { // * 类实现接口，必须实现接口中所有的属性和方法
    constructor(name: string) { 
        this.name = name
    }
    /* private */ name: string // * 接口只能约束类的共有成员
    eat() {}
    sleep() {}
}

interface i_Man extends i_Human { // * 接口可以像类一样相互继承
    run(): void
}

interface i_Child {
    cry(): void
}

interface i_Boy extends i_Man, i_Child {} // * 一个接口可以同时继承多个接口

let i_boy: i_Boy = {
    name: '',
    eat() {},
    cry() {},
    run() {}
}

class i_Auto {
    state = 1
    // private state2 = 2 // * 因为C不是Auto的子类，自然不能实现接口AutoInterface
}
interface i_AutoInterface extends i_Auto { // * 接口继承类；接口在抽离类的时候，不仅抽离的公共成员，还抽离了私有成员和受保护成员

}

class i_C implements i_AutoInterface { // 实现这个接口
    state = 1
}

class i_Bus extends i_Auto implements i_AutoInterface { // * 因为Bus是Auto的子类，所以自然就继承了state属性，不再需要实现state属性

}
