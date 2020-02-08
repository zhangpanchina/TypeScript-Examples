// /**
//  * 映射类型：预定义的一些泛型接口
//  */

//  interface Obj {
//      a: string
//      b: number
//      c: boolean
//  }

// // 同态类型：不会引入新的类型
//  type ReadonlyObj = Readonly<Obj>

//  type PartialObj = Partial<Obj>

//  type PickObj = Pick<Obj, 'a' | 'b'>

 
//  //  非同态类型
//  type RecordObj = Record<'x' | 'y', Obj>